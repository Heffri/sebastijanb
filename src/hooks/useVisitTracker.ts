import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useVisitTracker() {
  const sent = useRef(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    const trackVisit = async (timeOnPage = 0, maxScroll = 0) => {
      try {
        await supabase.functions.invoke("track-visit", {
          body: {
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
            page_path: window.location.pathname,
            time_on_page: timeOnPage,
            max_scroll_depth: maxScroll,
          },
        });
      } catch {
        // Silent fail - don't affect UX
      }
    };

    // Track max scroll depth
    let maxScrollDepth = 0;
    const onScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      maxScrollDepth = Math.max(maxScrollDepth, scrollPercent);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Send on page unload
    const onUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      // Use sendBeacon for reliable unload tracking
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-visit`;
      const body = JSON.stringify({
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        page_path: window.location.pathname,
        time_on_page: timeOnPage,
        max_scroll_depth: maxScrollDepth,
      });
      navigator.sendBeacon(url, body);
    };

    // Initial track (without time/scroll data)
    trackVisit(0, 0);

    window.addEventListener("beforeunload", onUnload);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);
}

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + "portfolio-salt-2026");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function parseUserAgent(ua: string) {
  let browser = "Unknown";
  let os = "Unknown";
  let deviceType = "Desktop";

  if (/Mobile|Android|iPhone|iPad/i.test(ua)) deviceType = "Mobile";
  if (/Tablet|iPad/i.test(ua)) deviceType = "Tablet";

  if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/Chrome\//i.test(ua)) browser = "Chrome";
  else if (/Safari\//i.test(ua)) browser = "Safari";

  if (/Windows/i.test(ua)) os = "Windows";
  else if (/Mac OS/i.test(ua)) os = "macOS";
  else if (/Linux/i.test(ua)) os = "Linux";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad/i.test(ua)) os = "iOS";

  return { browser, os, deviceType };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { referrer, user_agent, page_path, time_on_page, max_scroll_depth } = body;

    // Get IP from headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const ipHash = ip !== "unknown" ? await hashIP(ip) : "unknown";

    // Geo lookup via ip-api.com (free, no key needed)
    let country = null;
    let city = null;
    let org = null;

    if (ip !== "unknown" && ip !== "127.0.0.1") {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,org,status`);
        const geo = await geoRes.json();
        if (geo.status === "success") {
          country = geo.country;
          city = geo.city;
          org = geo.org;
        }
      } catch {
        // Geo lookup failed, continue without it
      }
    }

    const { browser, os, deviceType } = parseUserAgent(user_agent || "");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("visits").insert({
      ip_hash: ipHash,
      referrer: referrer || null,
      user_agent: user_agent || null,
      country,
      city,
      org,
      device_type: deviceType,
      browser,
      os,
      time_on_page: time_on_page || 0,
      max_scroll_depth: max_scroll_depth || 0,
      page_path: page_path || "/",
    });

    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Track visit error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

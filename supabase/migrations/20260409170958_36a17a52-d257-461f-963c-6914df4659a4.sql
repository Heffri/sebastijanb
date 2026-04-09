
CREATE TABLE public.visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_hash TEXT,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  org TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  time_on_page INTEGER DEFAULT 0,
  max_scroll_depth INTEGER DEFAULT 0,
  page_path TEXT DEFAULT '/'
);

ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.visits FROM anon, authenticated;
GRANT ALL ON public.visits TO service_role;

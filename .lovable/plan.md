

# Visitor Tracking for Your Portfolio

## What You'll Get

A system that logs every visit to your portfolio with detailed information:
- Timestamp, referrer (where they came from -- e.g. LinkedIn, email link, Google)
- Approximate geolocation (city/country) and company/organization via IP lookup
- Device type, browser, OS
- Time on page and scroll depth
- A private `/admin` dashboard page to view all this data

## How It Works

```text
Visitor lands on portfolio
        │
        ▼
Client JS collects: referrer, user agent, scroll depth, time on page
        │
        ▼
Supabase Edge Function receives data + visitor IP
        │
        ▼
Edge function calls ip-api.com (free) for geo/org lookup
        │
        ▼
All data stored in Supabase `visits` table
        │
        ▼
You view it on a password-protected /analytics page
```

## Steps

1. **Set up Supabase backend** -- Connect Lovable Cloud to get a database and edge functions
2. **Create `visits` table** -- With columns: id, timestamp, ip_hash (hashed for privacy), referrer, user_agent, country, city, org/company, device_type, browser, os, time_on_page, max_scroll_depth, page_path
3. **Create `track-visit` edge function** -- Receives visit data from the client, extracts IP from the request, calls a free IP geolocation API (ip-api.com) to get location and organization/company name, then inserts into the database
4. **Add client-side tracking script** -- A lightweight React hook that fires on page load (sends referrer, user agent, page path) and on page unload (sends time on page and scroll depth)
5. **Build a private `/analytics` dashboard** -- A simple password-protected page (you set the password as a secret) showing:
   - Total visits over time (chart)
   - Recent visitors table (time, location, company/org, referrer, device)
   - Top referrers and top locations

## Prerequisites

This requires Supabase to be connected. The project doesn't have Supabase set up yet, so the first step will be enabling Lovable Cloud backend.

## Privacy Note

Visitor IPs will be hashed (not stored raw) to maintain basic privacy. The geolocation/org lookup happens server-side in the edge function so no third-party scripts are loaded on the client.


import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Visit {
  id: string;
  created_at: string;
  ip_hash: string | null;
  referrer: string | null;
  country: string | null;
  city: string | null;
  org: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  time_on_page: number | null;
  max_scroll_depth: number | null;
  page_path: string | null;
}

const Analytics = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVisits = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("get-visits", {
        headers: { "x-analytics-password": pw },
      });
      if (fnError) throw fnError;
      if (data?.error === "Unauthorized") {
        setError("Wrong password");
        setAuthenticated(false);
        return;
      }
      if (data?.error) throw new Error(data.error);
      setVisits(data.visits || []);
      setAuthenticated(true);
    } catch (e: any) {
      setError(e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchVisits(password);
  };

  // Stats
  const totalVisits = visits.length;
  const uniqueVisitors = new Set(visits.map((v) => v.ip_hash)).size;
  const topReferrers = Object.entries(
    visits.reduce((acc, v) => {
      const ref = v.referrer || "Direct";
      acc[ref] = (acc[ref] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const topLocations = Object.entries(
    visits.reduce((acc, v) => {
      const loc = [v.city, v.country].filter(Boolean).join(", ") || "Unknown";
      acc[loc] = (acc[loc] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const topOrgs = Object.entries(
    visits.reduce((acc, v) => {
      if (v.org) acc[v.org] = (acc[v.org] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1]).slice(0, 10);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Loading..." : "Access"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Portfolio Analytics</h1>
          <Button variant="outline" size="sm" onClick={() => fetchVisits(password)}>
            Refresh
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Total Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalVisits}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Unique Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{uniqueVisitors}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Avg. Scroll Depth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {visits.length
                  ? Math.round(visits.reduce((s, v) => s + (v.max_scroll_depth || 0), 0) / visits.length)
                  : 0}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top Orgs/Companies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              {topOrgs.length === 0 ? (
                <p className="text-muted-foreground text-sm">No data yet</p>
              ) : (
                <div className="space-y-2">
                  {topOrgs.map(([org, count]) => (
                    <div key={org} className="flex justify-between text-sm">
                      <span className="truncate mr-2">{org}</span>
                      <span className="text-muted-foreground font-mono">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Referrers</CardTitle>
            </CardHeader>
            <CardContent>
              {topReferrers.length === 0 ? (
                <p className="text-muted-foreground text-sm">No data yet</p>
              ) : (
                <div className="space-y-2">
                  {topReferrers.map(([ref, count]) => (
                    <div key={ref} className="flex justify-between text-sm">
                      <span className="truncate mr-2">{ref}</span>
                      <span className="text-muted-foreground font-mono">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Top Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Top Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {topLocations.map(([loc, count]) => (
                <div key={loc} className="flex justify-between text-sm border rounded p-2">
                  <span className="truncate mr-2">{loc}</span>
                  <span className="text-muted-foreground font-mono">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Visits Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Recent Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Referrer</TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Browser</TableHead>
                  <TableHead>Scroll</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visits.slice(0, 50).map((v) => (
                  <TableRow key={v.id}>
                    <TableCell className="whitespace-nowrap text-xs">
                      {new Date(v.created_at).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-xs">
                      {[v.city, v.country].filter(Boolean).join(", ") || "—"}
                    </TableCell>
                    <TableCell className="text-xs max-w-[200px] truncate">{v.org || "—"}</TableCell>
                    <TableCell className="text-xs max-w-[200px] truncate">{v.referrer || "Direct"}</TableCell>
                    <TableCell className="text-xs">{v.device_type || "—"}</TableCell>
                    <TableCell className="text-xs">{[v.browser, v.os].filter(Boolean).join("/") || "—"}</TableCell>
                    <TableCell className="text-xs">{v.max_scroll_depth ? `${v.max_scroll_depth}%` : "—"}</TableCell>
                    <TableCell className="text-xs">{v.time_on_page ? `${v.time_on_page}s` : "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

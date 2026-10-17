export type WorkSystem = {
  name: string;
  context: string;
  period: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: { href: string; label: string };
  source: "private" | "public";
};

/**
 * Systems that were built to be used by someone other than me. Ordered by
 * how much of the engineering is mine, not by recency.
 */
export const workSystems: WorkSystem[] = [
  {
    name: "Verah",
    context: "East Sea Technologies · founding engineer",
    period: "Jun 2026 –",
    status: "In production",
    summary:
      "A vertical SaaS for Swedish VVS and heat-pump installers. Three surfaces on one multi-tenant backend: a mobile field view technicians use on site, an office view for jobs, offers, ROT tax claims and certificates, and a public customer portal that turns a homeowner's description into a price indication.",
    highlights: [
      "Multi-tenant Postgres where every table carries row-level security and every policy resolves through org-scoped helper functions — a query cannot read across tenants even if the application layer is wrong.",
      "Retrieval over each company's own approved offers: Voyage voyage-4-lite embeddings (1024-dim) stored in pgvector behind an HNSW index and ranked by cosine similarity, replacing a hand-tuned proximity heuristic. The heuristic stays as the fallback path, so the feature degrades instead of failing when the embedding service is down.",
      "Offer estimation runs in two phases on two different models — a fast preliminary range, then a slower pass that produces the binding offer shape — with prompt caching on the system block and per-call token and cost accounting written to an invocation log.",
      "Swedish voice dictation from the field: audio to a private bucket, Deepgram Nova-2 for transcription, an LLM pass to correct it into trade terminology, then autofill of the job description.",
      "GDPR by construction: customer data and Swedish personal numbers are stripped before any text reaches a model, and the ROT identifiers never leave the server at all.",
      "Public AI endpoints are the dangerous surface, so they are schema-validated, rate-limited per IP and per organisation per month, budget-checked fail-closed, and the counter increments before the paid call rather than after it.",
    ],
    stack: [
      "TanStack Start",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL / RLS",
      "pgvector",
      "Cloudflare Workers",
      "Claude API",
      "Tailwind",
      "Playwright",
      "Vitest",
    ],
    link: { href: "https://verah.ai", label: "verah.ai" },
    source: "private",
  },
  {
    name: "OpinionLive",
    context: "Townhall Analytics · founding engineer",
    period: "2026",
    status: "In development",
    summary:
      "A Swedish platform where citizens create, sign and track petitions under a verified identity. Signatures are only worth something if they are real, so identity verification runs through BankID rather than an email confirmation.",
    highlights: [
      "BankID identity through the GrandID provider, with a mock simulator so the whole signing flow is testable without touching the real identity service.",
      "Async FastAPI over SQLAlchemy 2.0 and PostgreSQL 16, with Alembic migrations and Redis-backed Celery for the work that must not happen inside a request.",
      "JWT authentication with role-based access enforced by a dependency rather than scattered per-endpoint checks.",
      "Containerised end to end: Docker Compose, Nginx, and GitHub Actions running pytest, Ruff and tsc on every push.",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "FastAPI",
      "Python 3.12",
      "PostgreSQL 16",
      "Redis / Celery",
      "BankID",
      "Docker",
    ],
    source: "private",
  },
  {
    name: "Life OS",
    context: "Personal instrument panel",
    period: "2026",
    status: "Self-hosted, in daily use",
    summary:
      "One screen for economy, work, study and career. It mirrors the systems I already live in — calendar, mail, task database, course platform, bank via read-only account access — into a local SQLite file and derives the numbers that actually decide anything: weekly hour load against a budget, monthly net after a tax reserve, credits remaining toward the degree.",
    highlights: [
      "Every page renders from seeded data before any API key exists. Integrations are additive and never required, which keeps the app runnable on a fresh clone.",
      "742 tests over the parts where a silent error is expensive: money arithmetic, load calculations, every sync mapper, and the push-notification crypto.",
      "Drizzle over better-sqlite3 called synchronously inside async server components — no API layer for reads, because a single-user local database does not need one.",
      "Installable as a PWA with web push, deployed to a private host reachable only over Tailscale rather than a public port.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Drizzle ORM",
      "SQLite",
      "Tailwind v4",
      "Vitest",
      "Docker",
    ],
    source: "private",
  },
];

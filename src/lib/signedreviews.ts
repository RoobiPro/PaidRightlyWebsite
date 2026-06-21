// SignedReviews public API client.
//
// Reads verified review data from the two read-only v1 endpoints using the
// publishable key (safe to ship in client-side code — it only ever reads public
// data and the endpoints allow cross-origin requests).
//
// Docs: https://backend.signedreviews.com/api/public/v1/{profile,reviews}

const BASE = "https://backend.signedreviews.com/api/public/v1";

const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SIGNEDREVIEWS_KEY ??
  "rvwpk_c3c70c17a7677043ec569c495eafee870e64504096796466";

export interface ReviewSummary {
  /** Average rating, 1–5. */
  average: number;
  /** Total number of verified reviews. */
  total: number;
  /** Count of reviews per star rating, keyed "1".."5" (optional). */
  distribution?: Partial<Record<"1" | "2" | "3" | "4" | "5", number>>;
}

export interface Reviewer {
  displayName: string | null;
  photoUrl: string | null;
}

export interface Review {
  id: string;
  rating: number;
  title: string | null;
  body: string;
  createdAt: string | null;
  reviewer: Reviewer;
  /** Public, third-party verification page for this review. */
  verificationUrl: string | null;
}

export interface VerifiedReviewsData {
  summary: ReviewSummary;
  reviews: Review[];
}

// The public API nests its payload under `data`. The exact field names have
// shifted between the legacy (secret-key) and v1 (publishable-key) endpoints,
// so the normalizers below accept either shape and coerce to our types.

interface RawEnvelope<T> {
  data?: T;
  error?: string;
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function normalizeSummary(raw: unknown): ReviewSummary {
  const root = isRecord(raw) ? raw : {};
  // v1 nests the summary under `summary`; tolerate a flat shape too.
  const summary = isRecord(root.summary) ? root.summary : root;

  const average = asNumber(summary.average ?? summary.averageRating);
  const total = asNumber(summary.total ?? summary.totalReviews);
  const distRaw = summary.distribution;
  const distribution = isRecord(distRaw)
    ? (distRaw as ReviewSummary["distribution"])
    : undefined;

  return { average, total, distribution };
}

function normalizeReview(raw: unknown, index: number): Review {
  const r = isRecord(raw) ? raw : {};
  const reviewer = isRecord(r.reviewer) ? r.reviewer : {};
  const verification = isRecord(r.verification) ? r.verification : {};

  return {
    id: asString(r.id) ?? `review-${index}`,
    rating: asNumber(r.rating),
    title: asString(r.title),
    body: asString(r.body) ?? "",
    createdAt: asString(r.createdAt),
    reviewer: {
      displayName:
        asString(reviewer.displayName) ?? asString(r.reviewerDisplayName),
      photoUrl: asString(reviewer.photoUrl) ?? asString(r.reviewerPhotoUrl),
    },
    verificationUrl: asString(verification.url) ?? asString(r.verificationUrl),
  };
}

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${PUBLISHABLE_KEY}` },
    signal,
  });

  const json = (await res.json()) as RawEnvelope<T>;

  if (!res.ok || json.error) {
    throw new Error(
      json.error ?? `SignedReviews request failed (${res.status})`
    );
  }

  return json.data as T;
}

/**
 * Fetch the rating summary and the most recent verified reviews in parallel.
 * Throws if either request fails (e.g. plan gating, rate limit, network).
 */
export async function fetchVerifiedReviews(
  limit = 9,
  signal?: AbortSignal
): Promise<VerifiedReviewsData> {
  const [profileRaw, reviewsRaw] = await Promise.all([
    getJson<unknown>("/profile", signal),
    getJson<unknown>(`/reviews?page=1&limit=${limit}&sort=date_desc`, signal),
  ]);

  const reviewsArray = Array.isArray(reviewsRaw)
    ? reviewsRaw
    : isRecord(reviewsRaw) && Array.isArray(reviewsRaw.data)
      ? reviewsRaw.data
      : [];

  return {
    summary: normalizeSummary(profileRaw),
    reviews: reviewsArray.map(normalizeReview),
  };
}

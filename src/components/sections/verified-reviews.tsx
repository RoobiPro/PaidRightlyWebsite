"use client";

import { useEffect, useState } from "react";
import { Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { cn } from "@/lib/utils";
import {
  type Review,
  type ReviewSummary,
  type VerifiedReviewsData,
} from "@/lib/signedreviews";

type Status = "loading" | "ready" | "empty";

async function loadReviews(
  limit: number,
  signal: AbortSignal
): Promise<VerifiedReviewsData> {
  // Same-origin proxy (app/api/reviews) — avoids the upstream CORS allowlist.
  const res = await fetch(`/api/reviews?limit=${limit}`, { signal });
  const json = (await res.json()) as {
    success: boolean;
    data: VerifiedReviewsData | null;
    error: string | null;
  };
  if (!res.ok || !json.success || !json.data) {
    throw new Error(json.error ?? `Request failed (${res.status})`);
  }
  return json.data;
}

function useVerifiedReviews(limit: number) {
  const [data, setData] = useState<VerifiedReviewsData | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const controller = new AbortController();

    loadReviews(limit, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        if (result.reviews.length === 0 && result.summary.total === 0) {
          setStatus("empty");
          return;
        }
        setData(result);
        setStatus("ready");
      })
      .catch((error: unknown) => {
        if ((error as Error)?.name === "AbortError") return;
        // On any failure, hide the section rather than show a broken block.
        setStatus("empty");
      });

    return () => controller.abort();
  }, [limit]);

  return { data, status };
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              filled ? "text-amber-400" : "text-[var(--border)]"
            )}
            fill={filled ? "currentColor" : "none"}
            strokeWidth={filled ? 0 : 1.5}
          />
        );
      })}
    </div>
  );
}

function initials(name: string | null): string {
  if (!name) return "VB";
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Avatar({ reviewer }: { reviewer: Review["reviewer"] }) {
  if (reviewer.photoUrl) {
    // Avatars come from arbitrary third-party hosts (OAuth/Gravatar/uploads),
    // so a native <img> avoids next/image's per-host allowlist requirement.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={reviewer.photoUrl}
        alt={reviewer.displayName ?? "Verified buyer"}
        width={40}
        height={40}
        loading="lazy"
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
      {initials(reviewer.displayName)}
    </div>
  );
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : dateFormatter.format(date);
}

function SummaryHeader({ summary }: { summary: ReviewSummary }) {
  const max = Math.max(
    1,
    ...(["5", "4", "3", "2", "1"] as const).map(
      (key) => summary.distribution?.[key] ?? 0
    )
  );

  return (
    <Card
      hover={false}
      className="mb-10 flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-12"
    >
      {/* Headline rating */}
      <div className="flex flex-col items-center justify-center text-center md:min-w-[220px]">
        <p className="font-display text-6xl font-bold text-[var(--foreground)]">
          {summary.average.toFixed(1)}
        </p>
        <Stars rating={summary.average} size={22} />
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          Based on{" "}
          <span className="font-semibold text-[var(--foreground)]">
            {summary.total.toLocaleString()}
          </span>{" "}
          verified reviews
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-200">
          <ShieldCheck size={14} />
          Verified by SignedReviews
        </div>
      </div>

      {/* Distribution bars */}
      {summary.distribution && (
        <div className="w-full flex-1 space-y-2 md:border-l md:border-[var(--border)] md:pl-12">
          {(["5", "4", "3", "2", "1"] as const).map((key) => {
            const count = summary.distribution?.[key] ?? 0;
            return (
              <div key={key} className="flex items-center gap-3 text-sm">
                <span className="w-3 text-[var(--muted-foreground)]">
                  {key}
                </span>
                <Star
                  size={13}
                  className="text-amber-400"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--muted)]">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${(count / max) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-[var(--muted-foreground)]">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const date = formatDate(review.createdAt);

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        {review.verificationUrl && (
          <a
            href={review.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            <BadgeCheck size={14} />
            Verified
          </a>
        )}
      </div>

      {review.title && (
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--foreground)]">
          {review.title}
        </h3>
      )}

      <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
        “{review.body}”
      </p>

      <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
        <Avatar reviewer={review.reviewer} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--foreground)]">
            {review.reviewer.displayName ?? "Verified buyer"}
          </p>
          {date && (
            <p className="text-xs text-[var(--muted-foreground)]">{date}</p>
          )}
        </div>
      </div>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-10 h-44 rounded-2xl border border-[var(--border)] bg-[var(--card)]" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="h-56 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
          />
        ))}
      </div>
    </div>
  );
}

export function VerifiedReviews({ limit = 9 }: { limit?: number }) {
  const { data, status } = useVerifiedReviews(limit);

  // Hide entirely when there's nothing verified to show.
  if (status === "empty") return null;

  if (status === "loading" || !data) {
    return (
      <div className="mb-16">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="mb-16">
      <FadeIn>
        <SummaryHeader summary={data.summary} />
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.reviews.map((review) => (
          <StaggerItem key={review.id} className="h-full">
            <ReviewCard review={review} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

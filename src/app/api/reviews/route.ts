import { NextRequest, NextResponse } from "next/server";
import {
  fetchVerifiedReviews,
  type VerifiedReviewsData,
} from "@/lib/signedreviews";

interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

// Server-side proxy for the SignedReviews public API. The upstream API only
// allows a couple of hard-coded browser origins (and 500s on the rest), so the
// browser fetches this same-origin route instead and we make the cross-origin
// call from the server, where CORS does not apply.
export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<VerifiedReviewsData>>> {
  const limitParam = Number(request.nextUrl.searchParams.get("limit"));
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 50)
    : 9;

  try {
    const data = await fetchVerifiedReviews(limit);
    return NextResponse.json({ success: true, data, error: null });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to load reviews";
    return NextResponse.json(
      { success: false, data: null, error: message },
      { status: 502 }
    );
  }
}

import { NextResponse } from "next/server";
import { Prisma } from "./prisma-client";
import { UnauthorizedError } from "./auth-guard";

/**
 * Shared catch-block handler for admin API routes. Maps the error cases
 * that aren't really 500s — no session, or the record was already deleted
 * (e.g. by a reseed, or another admin) — to the right status code, and
 * falls back to a generic 500 for everything else.
 */
export function handleApiError(error: unknown, fallbackMessage: string): NextResponse {
  if (error instanceof UnauthorizedError) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
    return NextResponse.json(
      { error: "Not found — it may have been deleted or the data reseeded. Refresh and try again." },
      { status: 404 }
    );
  }
  console.error(fallbackMessage, error);
  return NextResponse.json({ error: fallbackMessage }, { status: 500 });
}

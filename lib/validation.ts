import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

export const reviewSchema = z.object({
  author: z.string().trim().min(1).max(200),
  content: z.string().trim().min(1).max(2000),
  rating: z.number().int().min(1).max(5).optional(),
});

export const surveyResponseSchema = z.object({
  respondentName: z.string().trim().max(200).optional().or(z.literal("")),
  respondentEmail: z.string().trim().email().max(200).optional().or(z.literal("")),
  answers: z
    .array(
      z.object({
        questionId: z.string().trim().min(1),
        value: z.union([z.string(), z.array(z.string())]),
      })
    )
    .min(1),
});

/**
 * A hidden field public forms include ("website" or similar) that a human
 * never fills in. If it arrives non-empty, treat the submission as spam.
 */
export function failsHoneypot(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

/**
 * Best-effort in-memory per-key (e.g. IP + route) rate limit for public POST
 * endpoints. Not distributed/persistent — adequate at this scale, not a
 * substitute for a real WAF/rate-limiting service.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const existing = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (existing.length >= RATE_LIMIT_MAX_REQUESTS) {
    hits.set(key, existing);
    return true;
  }

  existing.push(now);
  hits.set(key, existing);
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

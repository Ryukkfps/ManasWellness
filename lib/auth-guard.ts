import { auth } from "@/auth";

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

/**
 * Throws UnauthorizedError if there is no logged-in admin session.
 * Use at the top of every server action / API route handler that mutates
 * data or returns data containing visitor PII.
 */
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new UnauthorizedError();
  }
  return session;
}

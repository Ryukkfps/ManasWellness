// MongoDB ObjectIds are exactly 24 hex characters. Prisma validates every
// branch of an `OR` filter against a field's declared type eagerly on
// MongoDB, so building `{ OR: [{ id }, { slug: id }] }` throws before the
// slug branch is even tried when `id` isn't a valid ObjectId (e.g. a slug
// passed in a route param that accepts either). Check this first.
export function isValidObjectId(value: string): boolean {
  return /^[0-9a-fA-F]{24}$/.test(value);
}

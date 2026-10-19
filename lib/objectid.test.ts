import { describe, it, expect } from 'vitest';
import { isValidObjectId } from './objectid';

describe('isValidObjectId', () => {
  it('accepts a real 24-char hex ObjectId', () => {
    expect(isValidObjectId('6ad13f9b007b064e1289a84c')).toBe(true);
  });

  it('rejects a slug', () => {
    expect(isValidObjectId('sample-wellbeing-check-in')).toBe(false);
  });

  it('rejects a too-short hex string', () => {
    expect(isValidObjectId('abc123')).toBe(false);
  });

  it('rejects an empty string', () => {
    expect(isValidObjectId('')).toBe(false);
  });
});

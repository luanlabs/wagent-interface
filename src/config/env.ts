/**
 * Centralised, validated access to public environment variables.
 *
 * All NEXT_PUBLIC_* variables are inlined at build time, so they must be
 * referenced statically (never via a dynamic key) for Next.js to replace them.
 */

export const API_URL = process.env.NEXT_PUBLIC_API ?? '';

if (typeof window !== 'undefined' && !API_URL) {
  // Surfaced in the browser console so a misconfigured deployment is obvious
  // instead of silently sending requests to "undefined/...".
  console.error('[config] NEXT_PUBLIC_API is not set — API requests will fail.');
}

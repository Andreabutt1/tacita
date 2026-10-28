const ALLOWED_METHODS = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
const ALLOWED_HEADERS = 'authorization, x-client-info, apikey, content-type, x-locale';

/**
 * Returns CORS headers with origin validated against the CORS_ALLOWED_ORIGINS env var.
 * Falls back to '*' when no allowlist is configured (local dev).
 *
 * To also allow deploy-preview URLs (e.g. Netlify, Vercel), set a
 * CORS_PREVIEW_PATTERN env var with a regex, e.g.:
 *   CORS_PREVIEW_PATTERN=^https:\/\/[a-z0-9-]+--myapp\.netlify\.app$
 */
export function getCorsHeaders(req: Request): Record<string, string> {
  const allowed = (Deno.env.get('CORS_ALLOWED_ORIGINS') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const previewPattern = Deno.env.get('CORS_PREVIEW_PATTERN');

  const requestOrigin = req.headers.get('origin') ?? '';
  let allowOrigin: string;

  if (allowed.length === 0) {
    allowOrigin = '*';
  } else if (allowed.includes(requestOrigin)) {
    allowOrigin = requestOrigin;
  } else if (previewPattern && new RegExp(previewPattern).test(requestOrigin)) {
    allowOrigin = requestOrigin;
  } else {
    allowOrigin = '';
  }

  return {
    ...(allowOrigin && { 'Access-Control-Allow-Origin': allowOrigin }),
    'Access-Control-Allow-Methods': ALLOWED_METHODS,
    'Access-Control-Allow-Headers': ALLOWED_HEADERS,
    'Vary': 'Origin',
  };
}


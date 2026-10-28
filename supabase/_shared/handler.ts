import { getCorsHeaders } from './cors.ts';
import { HttpError } from './errors.ts';

type HandlerFunction = (req: Request) => Promise<Response>;

export function createHandler(handler: HandlerFunction) {
  return async (req: Request): Promise<Response> => {
    const corsHeaders = getCorsHeaders(req);

    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
      const response = await handler(req);

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...corsHeaders,
          ...Object.fromEntries(response.headers.entries()),
        },
      });
    } catch (error) {
      const statusCode = error instanceof HttpError ? error.statusCode : 500;
      // Only expose message for known HttpErrors; hide internal details otherwise
      const message = error instanceof HttpError
        ? error.message
        : 'Internal server error';
      console.error(error);

      return new Response(
        JSON.stringify({ error: message }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: statusCode,
        }
      );
    }
  };
}

export const runtime = "nodejs";

export async function GET() {
  return Response.json(
    {
      ok: true,
      serverTime: Date.now(),
    },
    {
      headers: {
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    },
  );
}

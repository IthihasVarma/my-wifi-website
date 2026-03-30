export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.arrayBuffer();

  return Response.json(
    {
      ok: true,
      bytesReceived: payload.byteLength,
    },
    {
      headers: {
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    },
  );
}

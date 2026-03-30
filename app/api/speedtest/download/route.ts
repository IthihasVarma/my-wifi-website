export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sizeMb = Math.min(Number(searchParams.get("sizeMb") ?? "6"), 8);
  const bytes = Math.max(1, sizeMb) * 1024 * 1024;
  const buffer = Buffer.alloc(bytes, "a");

  return new Response(buffer, {
    headers: {
      "content-type": "application/octet-stream",
      "content-length": String(bytes),
      "cache-control": "no-store, no-cache, must-revalidate",
    },
  });
}

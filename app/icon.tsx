import { ImageResponse } from "next/og";
import { TEAM_PHOTOS_API } from "@/lib/config";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getFaviconUrl(): Promise<string | null> {
  try {
    const res = await fetch(TEAM_PHOTOS_API, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.favicon ?? null;
  } catch {
    return null;
  }
}

export default async function Icon() {
  const faviconUrl = await getFaviconUrl();

  if (faviconUrl) {
    const res = await fetch(faviconUrl);
    const buf = await res.arrayBuffer();
    return new Response(buf, {
      headers: { "Content-Type": res.headers.get("content-type") || "image/png" },
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#100e1a",
          color: "#c8960c",
          fontSize: 34,
          fontWeight: 700,
          borderRadius: 12,
        }}
      >
        J
      </div>
    ),
    { ...size }
  );
}

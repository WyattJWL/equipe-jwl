import { Landing } from "@/components/Landing";
import { TEAM_PHOTOS_API } from "@/lib/config";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

async function getPhotos(): Promise<{ wyatt: string | null; jodie: string | null }> {
  try {
    const res = await fetch(TEAM_PHOTOS_API, { cache: "no-store" });
    if (!res.ok) return { wyatt: null, jodie: null };
    return res.json();
  } catch {
    return { wyatt: null, jodie: null };
  }
}

export default async function HomePage() {
  const photos = await getPhotos();
  return <Landing wyattPhoto={photos.wyatt} jodiePhoto={photos.jodie} />;
}

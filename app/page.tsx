import { Landing } from "@/components/Landing";
import { TEAM_PHOTOS_API, WYATT_URL, JODIE_URL } from "@/lib/config";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

interface TeamInfo {
  wyatt: string | null;
  jodie: string | null;
  linkWyatt?: string;
  linkJodie?: string;
}

async function getTeamInfo(): Promise<TeamInfo> {
  try {
    const res = await fetch(TEAM_PHOTOS_API, { cache: "no-store" });
    if (!res.ok) return { wyatt: null, jodie: null };
    return res.json();
  } catch {
    return { wyatt: null, jodie: null };
  }
}

export default async function HomePage() {
  const info = await getTeamInfo();
  return (
    <Landing
      wyattPhoto={info.wyatt}
      jodiePhoto={info.jodie}
      wyattUrl={info.linkWyatt || WYATT_URL}
      jodieUrl={info.linkJodie || JODIE_URL}
    />
  );
}

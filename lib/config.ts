// Chemins relatifs par defaut : next.config.js proxifie /wyatt et /jodie vers les
// deux deployments Vercel (voir rewrites()), donc rester sur ce meme domaine par
// defaut. Wyatt peut remplacer ces cibles depuis /admin/settings (section "Page
// d'equipe") sans toucher au code.
export const WYATT_URL = "/wyatt";
export const JODIE_URL = "/jodie";

export const TEAM_PHOTOS_API =
  process.env.NEXT_PUBLIC_TEAM_PHOTOS_API || "https://site-builder-snowy-delta.vercel.app/wyatt/api/public/team-photos";

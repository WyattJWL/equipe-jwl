// Cibles de redirection. A mettre a jour avec les sous-domaines une fois le DNS
// OVH configure (wyatt.jwl-marketing.fr / jodie.jwl-marketing.fr) - en attendant,
// pointe directement vers les deployments Vercel deja en prod.
export const WYATT_URL = process.env.NEXT_PUBLIC_WYATT_URL || "https://site-builder-snowy-delta.vercel.app";
export const JODIE_URL = process.env.NEXT_PUBLIC_JODIE_URL || "https://jodie-portfolio-silk.vercel.app";

export const TEAM_PHOTOS_API =
  process.env.NEXT_PUBLIC_TEAM_PHOTOS_API || "https://site-builder-snowy-delta.vercel.app/api/public/team-photos";

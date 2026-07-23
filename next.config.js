/** @type {import('next').NextConfig} */
const nextConfig = {
  // "Multi Zones" Next.js : /wyatt/* et /jodie/* sont proxifies vers deux deployments
  // Vercel independants (chacun configure avec basePath: "/wyatt" ou "/jodie" dans son
  // propre next.config.js, donc le chemin transmis inclut deja ce prefixe).
  async rewrites() {
    const WYATT = process.env.WYATT_ORIGIN || "https://site-builder-snowy-delta.vercel.app";
    const JODIE = process.env.JODIE_ORIGIN || "https://jodie-portfolio-silk.vercel.app";
    return [
      { source: "/wyatt", destination: `${WYATT}/wyatt` },
      { source: "/wyatt/:path*", destination: `${WYATT}/wyatt/:path*` },
      { source: "/jodie", destination: `${JODIE}/jodie` },
      { source: "/jodie/:path*", destination: `${JODIE}/jodie/:path*` },
    ];
  },
};
module.exports = nextConfig;

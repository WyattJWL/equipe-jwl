"use client";

export function Landing({
  wyattPhoto,
  jodiePhoto,
  wyattUrl,
  jodieUrl,
}: {
  wyattPhoto: string | null;
  jodiePhoto: string | null;
  wyattUrl: string;
  jodieUrl: string;
}) {
  return (
    <main className="equipe-root">
      <div className="equipe-eyebrow">Choisis ta destination</div>

      <div className="equipe-panels">
        <a
          href={jodieUrl}
          className="equipe-panel equipe-panel--jodie"
          style={jodiePhoto ? ({ "--photo": `url(${JSON.stringify(jodiePhoto)})` } as React.CSSProperties) : undefined}
        >
          <div className="equipe-panel-bg" />
          <span className="equipe-name equipe-name--jodie">Jodie</span>
          <span className="equipe-sub">SEO &amp; visibilité</span>
        </a>

        <a
          href={wyattUrl}
          className="equipe-panel equipe-panel--wyatt"
          style={wyattPhoto ? ({ "--photo": `url(${JSON.stringify(wyattPhoto)})` } as React.CSSProperties) : undefined}
        >
          <div className="equipe-panel-bg" />
          <span className="equipe-name equipe-name--wyatt">Wyatt</span>
          <span className="equipe-sub">Technique &amp; produit</span>
        </a>
      </div>

      <style>{`
        .equipe-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: #f2ede4;
          overflow: hidden;
        }
        .equipe-eyebrow {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #1a1a1a;
          pointer-events: none;
        }
        .equipe-panels {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .equipe-panel {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
        }
        .equipe-panel-bg {
          position: absolute;
          inset: 0;
          background-image: var(--photo);
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 0.5s ease, transform 0.6s ease;
          z-index: -2;
        }
        .equipe-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.5s ease;
          z-index: -1;
        }
        .equipe-panel:hover .equipe-panel-bg {
          opacity: 0.9;
          transform: scale(1);
        }
        .equipe-panel:hover::after {
          background: rgba(0, 0, 0, 0.42);
        }
        .equipe-panel--jodie {
          background: #f2ede4;
        }
        .equipe-panel--wyatt {
          background: #100e1a;
        }
        .equipe-name {
          font-size: clamp(3rem, 11vw, 6.5rem);
          line-height: 1;
          transition: transform 0.4s ease, color 0.4s ease;
        }
        .equipe-panel:hover .equipe-name {
          transform: scale(1.06);
        }
        .equipe-name--jodie {
          font-family: var(--font-brush);
          font-weight: 700;
          color: #c8960c;
          text-shadow: 4px 4px 0 rgba(232, 168, 214, 0.55);
          transform: rotate(-3deg);
        }
        .equipe-panel--jodie:hover .equipe-name--jodie {
          color: #fdf7ea;
          text-shadow: 4px 4px 0 rgba(232, 168, 214, 0.35);
        }
        .equipe-name--wyatt {
          font-family: var(--font-blocky);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #7c4dff;
          text-shadow:
            2px 2px 0 #8ee6b0,
            4px 4px 0 #8ee6b0,
            6px 6px 0 #6a3ce0,
            8px 8px 0 #6a3ce0;
        }
        .equipe-panel--wyatt:hover .equipe-name--wyatt {
          color: #b9a2ff;
        }
        .equipe-sub {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.6;
          transition: opacity 0.4s ease, color 0.4s ease;
        }
        .equipe-panel--wyatt .equipe-sub {
          color: #cfc6ff;
        }
        .equipe-panel--jodie .equipe-sub {
          color: #5b5347;
        }
        .equipe-panel:hover .equipe-sub {
          opacity: 0.95;
          color: #fdf7ea;
        }

        @media (min-width: 860px) {
          .equipe-panels {
            flex-direction: row;
          }
        }
      `}</style>
    </main>
  );
}

"use client";

export function Landing({
  wyattPhoto,
  jodiePhoto,
  idlePhoto,
  wyattUrl,
  jodieUrl,
}: {
  wyattPhoto: string | null;
  jodiePhoto: string | null;
  idlePhoto: string | null;
  wyattUrl: string;
  jodieUrl: string;
}) {
  return (
    <main className="equipe-root">
      <div className="equipe-eyebrow">Choisis ta destination</div>

      {idlePhoto && (
        <div className="equipe-idle">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={idlePhoto} alt="" />
        </div>
      )}

      <div className="equipe-panels">
        <a href={jodieUrl} className="equipe-panel equipe-panel--jodie">
          <span className="equipe-name equipe-name--jodie">Jodie</span>
          <span className="equipe-sub">SEO &amp; visibilité</span>
          {jodiePhoto && (
            <div className="equipe-frame equipe-frame--jodie">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={jodiePhoto} alt="Jodie" />
            </div>
          )}
        </a>

        <a href={wyattUrl} className="equipe-panel equipe-panel--wyatt">
          <span className="equipe-name equipe-name--wyatt">Wyatt</span>
          <span className="equipe-sub">Technique &amp; produit</span>
          {wyattPhoto && (
            <div className="equipe-frame equipe-frame--wyatt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={wyattPhoto} alt="Wyatt" />
            </div>
          )}
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
          z-index: 30;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f2ede4;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
          pointer-events: none;
        }

        .equipe-idle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(30vw, 300px);
          aspect-ratio: 3 / 4;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
          z-index: 5;
          opacity: 1;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .equipe-idle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .equipe-panels:has(.equipe-panel:hover) .equipe-idle {
          opacity: 0;
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
          gap: 6px;
          text-decoration: none;
          overflow: hidden;
        }
        .equipe-panel--jodie {
          background: #f2ede4;
        }
        .equipe-panel--wyatt {
          background: #100e1a;
        }

        .equipe-name {
          position: relative;
          z-index: 2;
          font-size: clamp(3rem, 11vw, 6.5rem);
          line-height: 1;
          transition: transform 0.4s ease;
        }
        .equipe-panel:hover .equipe-name {
          transform: scale(1.05);
        }
        .equipe-name--jodie {
          font-family: var(--font-brush);
          font-weight: 700;
          color: #c8960c;
          text-shadow: 4px 4px 0 rgba(232, 168, 214, 0.55);
          transform: rotate(-3deg);
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
        .equipe-sub {
          position: relative;
          z-index: 2;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.55;
          transition: opacity 0.4s ease;
        }
        .equipe-panel--wyatt .equipe-sub {
          color: #cfc6ff;
        }
        .equipe-panel--jodie .equipe-sub {
          color: #5b5347;
        }
        .equipe-panel:hover .equipe-sub {
          opacity: 0.9;
        }

        /* Le cadre de la photo arrive juste sous le nom (a peine visible au repos),
           comme si la personne pointait le texte depuis la photo. */
        .equipe-frame {
          position: relative;
          z-index: 1;
          margin-top: 10px;
          width: min(46vw, 230px);
          aspect-ratio: 3 / 4;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(28px) scale(0.96);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .equipe-panel:hover .equipe-frame {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .equipe-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 860px) {
          .equipe-panels {
            flex-direction: row;
          }
          .equipe-idle {
            width: min(16vw, 240px);
          }
          .equipe-frame {
            width: min(20vw, 220px);
          }
        }
      `}</style>
    </main>
  );
}

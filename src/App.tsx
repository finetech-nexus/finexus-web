import { useEffect, useRef, useState } from "react";
import { copies, HERO_SHOTS, LANGS, STORE_LINKS, type Lang } from "./i18n";

const STORAGE_KEY = "finexus-lang";

function detectLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "fr" || saved === "en" || saved === "ar") return saved;
  const browser = (navigator.language || "fr").toLowerCase();
  if (browser.startsWith("ar")) return "ar";
  if (browser.startsWith("en")) return "en";
  return "fr";
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="22" height="22" fill="currentColor">
      <path d="M16.37 12.84c.03 2.96 2.6 3.95 2.63 3.96-.02.06-.41 1.4-1.35 2.77-.81 1.19-1.66 2.37-2.99 2.4-1.31.03-1.73-.78-3.23-.78s-1.97.75-3.21.81c-1.29.06-2.27-1.28-3.09-2.46C3.3 16.95 1.94 12.5 3.76 9.5c.9-1.5 2.52-2.45 4.27-2.48 1.33-.03 2.59.9 3.23.9s2.37-1.11 4-.95c.68.03 2.59.28 3.82 2.08-.1.06-2.28 1.33-2.71 3.79ZM14.5 5.5c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.33-.59 3.04-1.46Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="20" height="20" fill="currentColor">
      <path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l.1.1 9.6-9.6v-.3L3.7 2.2l-.1.1Zm11.1 6.4L12.2 11l2.5 2.5 3-1.7c.7-.4.7-1 0-1.4l-3-1.7ZM4.5 2.9l8.3 4.8-2.1 2.1L4.5 2.9Zm8.3 13.4 2.1 2.1-8.3 4.8 6.2-6.9Zm3.8-1.5 2.7 1.5c.7.4.7 1 0 1.4l-2.7 1.5-3-1.7 3-1.7Z" />
    </svg>
  );
}

function StoreButtons({
  appleLabel,
  googleLabel,
  className = "",
}: {
  appleLabel: string;
  googleLabel: string;
  className?: string;
}) {
  return (
    <div className={`store-buttons ${className}`.trim()}>
      <a
        className="store-btn store-btn-apple"
        href={STORE_LINKS.apple}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppleIcon />
        <span className="store-btn-text">
          <small>Download on the</small>
          <strong>{appleLabel}</strong>
        </span>
      </a>
      <a
        className="store-btn store-btn-google"
        href={STORE_LINKS.google}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PlayIcon />
        <span className="store-btn-text">
          <small>Get it on</small>
          <strong>{googleLabel}</strong>
        </span>
      </a>
    </div>
  );
}

const featureIcons = ["◎", "⇄", "▣", "↗", "◈"];

export default function App() {
  const [lang, setLang] = useState<Lang>(() =>
    typeof window === "undefined" ? "fr" : detectLang()
  );
  const [solidNav, setSolidNav] = useState(false);
  const t = copies[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, t.dir, t.metaTitle, t.metaDescription]);

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`site ${t.dir === "rtl" ? "is-rtl" : ""}`}>
      <header className={`nav ${solidNav ? "is-solid" : ""}`}>
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="Finexus">
            <span className="brand-mark" aria-hidden>
              <span />
            </span>
            Finexus
          </a>

          <nav className="nav-links" aria-label="main">
            <a href="#mission">{t.nav.mission}</a>
            <a href="#nexus">{t.nav.nexus}</a>
            <a href="#platform">{t.nav.platform}</a>
            <a href="#trust">{t.nav.trust}</a>
            <a href="#download">{t.nav.download}</a>
          </nav>

          <div className="nav-end">
            <div className="lang-switch" role="group" aria-label="Language">
              {LANGS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={lang === item.id ? "is-active" : ""}
                  onClick={() => setLang(item.id)}
                  aria-pressed={lang === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a className="nav-cta" href="#contact">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-visual" aria-hidden>
            <div className="hero-mesh" />
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-collage">
              {HERO_SHOTS.map((shot, index) => (
                <figure key={shot.src} className={`hero-shot hero-shot-${index}`}>
                  <img src={shot.src} alt="" />
                </figure>
              ))}
            </div>
          </div>

          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="hero-brand">
                Fine<span>xus</span>
              </p>
              <h1 className="hero-headline">{t.hero.headline}</h1>
              <p className="hero-lead">{t.hero.lead}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#download">
                  {t.hero.ctaPrimary}
                </a>
                <a className="btn btn-ghost" href="#trust">
                  {t.nav.trust}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="proof" aria-label={t.proof.title}>
          <div className="shell">
            <Reveal>
              <div className="proof-head">
                <p className="section-kicker">{t.proof.kicker}</p>
                <h2 className="proof-title">{t.proof.title}</h2>
              </div>
              <div className="proof-grid">
                {t.proof.items.map((item) => (
                  <article className="proof-item" key={item.title}>
                    <h3 className="proof-item-title">{item.title}</h3>
                    <p className="proof-item-text">{item.text}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mission" id="mission">
          <div className="shell mission-grid">
            <Reveal>
              <p className="section-kicker">{t.mission.kicker}</p>
              <h2 className="section-title">{t.mission.title}</h2>
              <p className="section-text">{t.mission.text}</p>
            </Reveal>
            <Reveal>
              <ol className="mission-list">
                {t.mission.items.map((item, index) => (
                  <li key={item.title}>
                    <span className="mission-index">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="product" id="nexus">
          <div className="shell product-layout">
            <Reveal>
              <p className="section-kicker">{t.nexus.kicker}</p>
              <h2 className="section-title">{t.nexus.title}</h2>
              <p className="section-text">{t.nexus.text}</p>
              <a className="btn btn-dark product-cta" href="#download">
                {t.nexus.cta}
              </a>
            </Reveal>
            <Reveal>
              <div className="feature-rail">
                {t.nexus.features.map((item, index) => (
                  <article className="feature" key={item.title}>
                    <div className="feature-icon" aria-hidden>
                      {featureIcons[index]}
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="platform" id="platform">
          <div className="shell">
            <Reveal>
              <p className="section-kicker">{t.platform.kicker}</p>
              <h2 className="section-title">{t.platform.title}</h2>
              <p className="section-text">{t.platform.text}</p>
            </Reveal>
            <div className="stack">
              {t.platform.items.map((item, index) => (
                <Reveal key={item.title}>
                  <article className="stack-item">
                    <span className="stack-index">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="shell">
            <Reveal>
              <p className="section-kicker">{t.trust.kicker}</p>
              <h2 className="section-title">{t.trust.title}</h2>
              <p className="section-text">{t.trust.text}</p>
            </Reveal>
            <div className="trust-grid">
              {t.trust.items.map((item) => (
                <Reveal key={item.title}>
                  <article className="trust-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="download" id="download">
          <div className="shell">
            <Reveal>
              <p className="section-kicker">{t.download.kicker}</p>
              <h2 className="section-title">{t.download.title}</h2>
              <p className="section-text">{t.download.text}</p>
              <StoreButtons appleLabel={t.download.apple} googleLabel={t.download.google} />
            </Reveal>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="shell">
            <Reveal>
              <div className="cta-panel">
                <h2>{t.cta.title}</h2>
                <p>{t.cta.text}</p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="mailto:hello@finexus.io">
                    {t.cta.primary}
                  </a>
                  <a className="btn btn-ghost" href="#download">
                    {t.cta.secondary}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <strong>Finexus</strong>
            <span> — {t.footer.tagline}</span>
          </div>
          <div>
            © {new Date().getFullYear()} Finexus. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { publications, sourceCopy, workExperience } from './source-data';

/* ── real data from source sites ─────────────────────────────────────────── */
const focusAreas = [
  {
    title: 'Power & Analog in India',
    detail: 'Building Renesas’ Power & Analog business for the Indian market.',
  },
  {
    title: 'Semiconductor strategy',
    detail: 'Connecting product development and commercial strategy with local market needs.',
  },
  {
    title: 'Partnerships',
    detail: 'Developing strategic partnerships that bring global capabilities to customers in India.',
  },
];

const selectedWork = publications;
const trackRecord = workExperience;

/* ── page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Abhay Jain — home">
          <span className="wordmark-badge">AJ</span>
          <span className="wordmark-copy">
            <strong className="wordmark-name">Abhay Jain</strong>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <Link href="#top" className="nav-active nav-home">Home</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/about-me">About</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="#work">Work</Link>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#focus" className="nav-secondary">Focus</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <a href="#track-record" className="nav-secondary">Experience</a>
          <span className="nav-dot" aria-hidden="true">·</span>
          <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <h1 className="hero-name">
            Abhay<br />
            <em>Jain</em>
          </h1>
          <p className="hero-role">Senior Director, Power &amp; Analog Business Division · Renesas Electronics</p>
          <p className="hero-statement">
            {sourceCopy.homeLead}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-dark" href="/about-me#experience">
              Experience
              <span className="btn-icon" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="portrait-wrap">
            <Image
              src="/Abhay_Jain_profile_pic.jpg"
              alt="Abhay Jain"
              width={400}
              height={400}
              className="portrait-img"
              sizes="(max-width: 700px) 60vw, (max-width: 960px) 28vw, 320px"
              priority
            />
          </figure>
        </div>

      </section>

      {/* ── CURRENT FOCUS ──────────────────────────────────────────── */}
      <section id="focus" className="section">
        <div className="wrap section-grid reveal">
          <div>
            <h2 className="section-h2">Current focus</h2>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <div className="focus-item" key={area.title}>
                <h3 className="focus-title">{area.title}</h3>
                <p className="focus-text">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ───────────────────────────────────────────── */}
      <section id="track-record" className="section section-alt">
        <div className="wrap section-grid reveal">
          <div>
            <h2 className="section-h2">Experience</h2>
          </div>
          <div className="track-list">
            {trackRecord.map((item) => (
              <article className="track-item" key={item.company}>
                <div className="track-company">
                  {item.logoLink && item.logo ? (
                    <a className="renesas-logo-link" href={item.logoLink} target="_blank" rel="noreferrer" aria-label="Renesas Electronics Corporation Web site">
                      <Image src={item.logo} alt="Renesas Electronics Corporation Web site" width={210} height={50} />
                    </a>
                  ) : item.logo ? (
                    <span className="company-mark-box">
                      <Image src={item.logo} alt={item.alt ?? `${item.company} logo`} width={96} height={52} />
                    </span>
                  ) : null}
                  {!item.logoLink ? <span>{item.company}</span> : null}
                </div>
                <div className="track-content">
                  <p className="track-label">{item.role} · {item.period}</p>
                  <p className="track-detail">{item.detail}</p>
                  {item.brands ? (
                    <ul className="brand-strip" aria-label="Organizations during Stanford">
                      {item.brands.map((brand) => (
                        <li className="brand-strip-item" key={brand.name}>
                          <span className="brand-strip-logo"><Image src={brand.logo} alt={brand.alt} width={92} height={48} /></span>
                          <span>{brand.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ──────────────────────────────────────────── */}
      <section id="work" className="section">
        <div className="wrap reveal">
          <div className="work-header"><h2 className="section-h2">Selected work</h2></div>
          <div className="work-list">
            {selectedWork.map((work) => (
              <article
                className="work-item"
                key={work.title}
              >
                <span className="work-title">{work.title}</span>
                <span className="work-context">{work.source}</span>
                <span className="work-view">
                  <a href={work.href} target="_blank" rel="noreferrer" aria-label={`View ${work.title}`}>
                    View <span aria-hidden="true">↗</span>
                  </a>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVERSATION ────────────────────────────────────────────── */}
      <section id="inbound" className="banner-section">
        <div className="banner-img-wrap">
          <Image
            src="/abhay-kalam-clean.webp"
            alt="Abhay Jain meeting Dr. A.P.J. Abdul Kalam at IIT Kanpur"
            fill
            className="banner-img"
            sizes="100vw"
          />
          <div className="banner-overlay" />
        </div>
        <div className="wrap banner-content">
          <h2 className="banner-h2">Contact</h2>
          <p className="banner-sub">
            For leadership, advisory, or business conversations in semiconductors, technology, energy, and industrial markets.
          </p>
          <a
            className="btn btn-dark"
            href="https://www.linkedin.com/in/abhay-jain-10/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <p className="banner-caption">Abhay Jain with Dr. A.P.J. Abdul Kalam · IIT Kanpur</p>
        </div>
        <footer className="wrap site-footer banner-footer">
          <span>© {new Date().getFullYear()} Abhay Jain</span>
          <Link href="/about-me">About</Link>
          <Link href="/#work">Selected work</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </footer>
      </section>
      </main>
    </>
  );
}

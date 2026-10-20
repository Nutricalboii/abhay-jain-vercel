import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { awards, education, publications, sourceCopy, workExperience } from '../source-data';

export const metadata: Metadata = {
  title: 'About Abhay Jain',
  description: 'Experience, education, and selected work of Abhay Jain, Senior Director of the Power & Analog Business Division at Renesas Electronics.',
  alternates: { canonical: '/about-me' },
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content">
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="Abhay Jain — home">
            <span className="wordmark-badge">AJ</span>
            <span className="wordmark-copy"><strong className="wordmark-name">Abhay Jain</strong></span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/" className="nav-home">Home</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/about-me" className="nav-active">About</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#work">Work</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#focus" className="nav-secondary">Focus</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#track-record" className="nav-secondary">Experience</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/contact-me" className="nav-cta">Contact <span aria-hidden="true">↗</span></Link>
          </nav>
        </header>

        <section className="about-hero wrap">
          <div className="about-hero-copy">
            <h1 className="about-h1">Abhay Jain</h1>
            <p className="about-current-role">Senior Director, Power &amp; Analog Business Division<br />Renesas Electronics</p>
            <p className="about-lede">
              I helped establish and now lead Renesas’ Power &amp; Analog business in India, spanning semiconductor strategy, new-product development, and partnerships for the Indian market.
            </p>
            <p className="about-origin">{sourceCopy.aboutLead}</p>
          </div>
          <figure className="about-portrait">
            <Image
              src="/Abhay_Jain_profile_pic.jpg"
              alt="Abhay Jain"
              width={400}
              height={400}
              className="about-portrait-img"
              sizes="(max-width: 640px) 82vw, (max-width: 960px) 36vw, 440px"
              priority
            />
          </figure>
        </section>

        <section id="experience" className="section section-alt">
          <div className="wrap about-section-wrap">
            <h2 className="about-section-title">Experience</h2>
            <div className="career-list">
              {workExperience.map((item) => (
                <article className={`career-item${item.current ? ' career-item-current' : ''}`} key={item.company}>
                  <div className="career-period">{item.period}</div>
                  <div className="career-content">
                    <div className="career-heading">
                      {item.logoLink && item.logo ? (
                        <a className="renesas-logo-link" href={item.logoLink} target="_blank" rel="noreferrer" aria-label="Renesas Electronics Corporation Web site">
                          <Image src={item.logo} alt="Renesas Electronics Corporation Web site" width={210} height={50} />
                        </a>
                      ) : item.logo ? (
                        <span className="company-mark-box career-logo-box">
                          <Image src={item.logo} alt={item.alt ?? `${item.company} logo`} width={96} height={52} className="career-logo" />
                        </span>
                      ) : null}
                      <div>
                        <h3 className="career-co">{item.company}</h3>
                        <p className="career-role">{item.role}</p>
                      </div>
                    </div>
                    <p className="career-detail">{item.detail}</p>
                    {item.brands ? (
                      <ul className="brand-strip brand-strip-about" aria-label="Organizations during Stanford">
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

        <section id="education" className="section">
          <div className="wrap about-section-wrap">
            <h2 className="about-section-title">Education</h2>
            <div className="edu-list">
              {education.map((item) => (
                <article className="edu-item" key={item.school}>
                  <div className="edu-period">{item.period}</div>
                  <div className="edu-content">
                    <div className="edu-marks" aria-label={`${item.school} marks`}>
                      {item.logos.map((mark) => (
                        <span className="edu-logo-box" key={mark.logo}>
                          <Image src={mark.logo} alt={mark.alt} width={112} height={56} className="edu-logo" />
                        </span>
                      ))}
                    </div>
                    <div>
                      <h3 className="edu-school">{item.school}</h3>
                      <p className="edu-prog">{item.degree}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recognition" className="section section-alt">
          <div className="wrap about-section-wrap">
            <h2 className="about-section-title">Recognition</h2>
            <div className="recognition-list">
              {awards.map((item) => (
                <article className="recognition-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="recognition-meta"><span>{item.kind}</span><time>{item.year}</time></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="section">
          <div className="wrap about-section-wrap">
            <h2 className="about-section-title">Selected publications &amp; patents</h2>
            <div className="pub-list pub-list-about">
              {publications.map((item) => (
                <article className="pub-item" key={item.title}>
                  <span className="pub-title">{item.title}</span>
                  <span className="pub-src">{item.source}</span>
                  <span className="pub-view">
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.title}`}>
                      View <span aria-hidden="true">↗</span>
                    </a>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="wrap contact-inner about-contact-inner">
            <h2 className="contact-h2">Contact</h2>
            <div className="contact-side">
              <p className="contact-desc">{sourceCopy.contactLead}</p>
              <a className="contact-link contact-link-primary" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <footer className="wrap site-footer footer-dark">
            <Link href="/">Home</Link><span>© {new Date().getFullYear()} Abhay Jain</span>
            <Link href="/#work">Work</Link><Link href="/sitemap.xml">Sitemap</Link><span>abhayjain.net</span>
          </footer>
        </section>
      </main>
    </>
  );
}

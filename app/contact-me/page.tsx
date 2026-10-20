import type { Metadata } from 'next';
import Link from 'next/link';
import { sourceCopy } from '../source-data';

export const metadata: Metadata = {
  title: 'Contact Abhay Jain',
  description: 'Contact Abhay Jain on LinkedIn about leadership, advisory, or business conversations.',
  alternates: { canonical: '/contact-me' },
};

export default function ContactMePage() {
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
            <Link href="/about-me">About</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#work">Work</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/#focus" className="nav-secondary">Focus</Link><span className="nav-dot" aria-hidden="true">·</span>
            <Link href="/contact-me" className="nav-cta nav-active">Contact</Link>
          </nav>
        </header>

        <section className="contact-page wrap">
          <h1>Contact</h1>
          <div>
            <p>{sourceCopy.contactLead}</p>
            <a className="btn btn-dark" href="https://www.linkedin.com/in/abhay-jain-10/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="wrap site-footer">
          <Link href="/">Home</Link><Link href="/about-me">About</Link>
          <Link href="/#work">Selected work</Link><Link href="/sitemap.xml">Sitemap</Link>
          <span>© {new Date().getFullYear()} Abhay Jain</span>
        </footer>
      </main>
    </>
  );
}

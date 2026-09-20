import Link from "next/link";
import { navItems } from "../data";
import { NavigationLink } from "./NavigationLink";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="4Ss Engineering Services home">
        <img src="/logo.jpeg" alt="4Ss Engineering Services UAE" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, -1).map((item) => <NavigationLink key={item.href} href={item.href}>{item.label}</NavigationLink>)}
      </nav>
      <Link className="button button-gold header-cta" href="/contact">Discuss a Requirement</Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => <NavigationLink key={item.href} href={item.href}>{item.label}</NavigationLink>)}
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/logo.jpeg" alt="4Ss Engineering Services UAE" />
        <p>Integrated nuclear, radiation, inspection and environmental engineering for critical environments.</p>
        <span>Abu Dhabi | United Arab Emirates</span>
      </div>
      <div className="footer-links">
        <p className="micro-label">Navigation</p>
        {navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
      <div className="footer-links">
        <p className="micro-label">The Four Ss</p>
        <span>Safety</span><span>Security</span><span>Safeguards</span><span>Sustainability</span>
      </div>
      <div className="footer-links">
        <p className="micro-label">Legal</p>
        <Link href="/privacy">Privacy</Link>
        <Link href="/cookies">Cookies</Link>
      </div>
      <div className="footer-bottom"><span>4Ss Engineering Services</span><span>See the invisible. Protect what matters.</span></div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>;
}

export function OrbitalScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`orb-stage ${compact ? "orb-compact" : ""}`} aria-hidden="true">
      <div className="coordinate coordinate-x" />
      <div className="coordinate coordinate-y" />
      <div className="orb-core"><span /></div>
      <div className="orbit orbit-a"><i /></div>
      <div className="orbit orbit-b"><i /></div>
      <div className="orbit orbit-c"><i /></div>
      <div className="scan-plane" />
      <div className="hud hud-a">Detect</div>
      <div className="hud hud-b">Inspect</div>
      <div className="hud hud-c">Protect</div>
    </div>
  );
}

export function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy reveal">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {lead && <p className="hero-lead">{lead}</p>}
      </div>
      <OrbitalScene compact />
    </section>
  );
}

export function SectionHeading({ kicker, title, lead, light = false }: { kicker: string; title: string; lead?: string; light?: boolean }) {
  return (
    <div className={`section-heading reveal ${light ? "on-light" : ""}`}>
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export function CTASection({ title, text, label = "Discuss a Requirement", href = "/contact" }: { title: string; text: string; label?: string; href?: string }) {
  return (
    <section className="cta-section">
      <div className="cta-energy" aria-hidden="true"><span /><span /><span /></div>
      <div className="reveal">
        <p className="eyebrow">4Ss Engineering Services</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button button-gold" href={href}>{label}<span aria-hidden="true">↗</span></Link>
    </section>
  );
}

export function RelatedChips({ ids }: { ids: string[] }) {
  const labels: Record<string, string> = {
    radiation: "Radiation & Dosimetry",
    nuclear: "Nuclear Engineering & Plant Support",
    inspection: "Inspection, Robotics & AI",
    environment: "Environment, NORM & Waste",
    security: "Security & CBRNe",
    integration: "Integration & Lifecycle",
  };
  return <div className="chip-row">{ids.map((id) => <span key={id}>{labels[id]}</span>)}</div>;
}

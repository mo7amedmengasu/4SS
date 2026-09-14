import type { Metadata } from "next";
import { leaders } from "../data";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Leadership | 4Ss Engineering Services",
  description: "Governance, engineering direction and technical credibility.",
};

export default function LeadershipPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="Leadership" title="Responsible direction. Technical depth. Long-term intent." lead="Governance, engineering direction and technical credibility." />
        <section className="chairman-message">
          <div className="quote-mark" aria-hidden="true">“</div>
          <div className="reveal"><p className="eyebrow">Chairman message</p><h2>Engineering that earns confidence.</h2><blockquote>Our ambition is to make complex capability practical: technology must work within a clear mission, with qualified people, dependable data, responsible governance and support across the full lifecycle.</blockquote></div>
        </section>
        <section className="section pearl-section">
          <SectionHeading kicker="Leadership" title="Governance and credibility." light />
          <div className="leadership-grid">
            {leaders.map((leader, index) => <article className="leader-card reveal" key={leader.name}><div className="portrait-placeholder" aria-hidden="true"><span>0{index + 1}</span><div /></div><p className="micro-label">{leader.role}</p><h2>{leader.name}</h2></article>)}
          </div>
        </section>
        <CTASection title="Responsible direction. Technical depth. Long-term intent." text="Engineering confidence where uncertainty carries consequences." label="Contact 4Ss" />
      </main>
    </SiteShell>
  );
}

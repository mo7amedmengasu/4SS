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
          <div className="chairman-copy reveal">
            <p className="eyebrow">Chairman message</p>
            <h2>Engineering that earns confidence.</h2>
            <blockquote className="chairman-statement">
              <p>Inspired by the vision and leadership of His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the UAE and Ruler of Abu Dhabi, we believe that meaningful progress is built on knowledge, responsibility, innovation and the ability to create lasting national capability.</p>
              <p>At 4Ss, our responsibility goes beyond delivering technology. We bring together international expertise, advanced engineering and strong local capability to protect people, strengthen critical infrastructure and support the long-term resilience of the UAE and the organizations we serve.</p>
              <p>In safety- and security-critical sectors, trust must be earned through technical excellence, integrity and consistent performance.</p>
              <p>Our ambition is to contribute to a safer, more resilient and technologically capable future — creating value that endures for generations.</p>
            </blockquote>
            <figure className="chairman-signature">
              <div className="signature-plate"><img src="/signature.jpeg" width="1600" height="500" alt="Signature of H.E. Mohamed Ali Al Shamsi" /></div>
              <figcaption><strong>{leaders[0].name}</strong><span>{leaders[0].role}</span></figcaption>
            </figure>
          </div>
        </section>
        <section className="section pearl-section">
          <SectionHeading kicker="Leadership" title="Governance and credibility." light />
          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <article className="leader-card reveal" key={leader.name}>
                <div className="portrait-placeholder" aria-hidden="true">
                  <span>0{index + 1}</span>
                  <div />
                </div>
                <div className="leader-profile">
                  <p className="micro-label">{leader.role}</p>
                  <h2>{leader.name}</h2>
                  <div className="leader-biography">
                    {leader.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CTASection title="Responsible direction. Technical depth. Long-term intent." text="Engineering confidence where uncertainty carries consequences." label="Contact 4Ss" />
      </main>
    </SiteShell>
  );
}

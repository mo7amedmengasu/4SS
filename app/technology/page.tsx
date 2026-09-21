import type { Metadata } from "next";
import { howWeWork, technologyCategories } from "../data";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Technology | 4Ss Engineering Services",
  description: "Global specialism selected around the mission—integrated and supported locally.",
};

export default function TechnologyPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Technology"
          title="Selected around the mission."
          lead="Global specialism selected around the mission—integrated and supported locally."
        />

        <section className="section dark-section">
          <SectionHeading kicker="Technology categories" title="Selected around the mission." />
          <div className="technology-grid">
            {technologyCategories.map((category, index) => (
              <article className="technology-card reveal" key={category.title}>
                <span>0{index + 1}</span>
                <div className="tech-sphere" aria-hidden="true" />
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section pearl-section lifecycle-feature">
          <div className="lifecycle-orb" aria-hidden="true"><span /><i /><b /></div>
          <div className="reveal">
            <p className="eyebrow">Integration &amp; support</p>
            <h2>Make advanced technology work in the field.</h2>
            <p>The value of specialist technology depends on integration, acceptance, training, maintenance and sustained performance. 4Ss provides one coordinated path from requirement to deployment and long-term readiness.</p>
            <div className="chip-row">{howWeWork.map((step) => <span key={step.title}>{step.title}</span>)}</div>
          </div>
        </section>

        <CTASection
          title="Discuss technology cooperation."
          text="Global specialism selected around the mission—integrated and supported locally."
          label="Discuss Technology Cooperation"
          href="/contact?interest=technology-cooperation&source=technology"
        />
      </main>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import { howWeWork, technologyCategories } from "../data";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Technology & Partners | 4Ss Engineering Services",
  description: "Global specialism selected around the mission—integrated and supported locally.",
};

export default function TechnologyPartnersPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="Technology & Partners" title="Global specialism. Local capability." lead="Global specialism selected around the mission—integrated and supported locally." />

        <section className="editorial light-section split-section">
          <SectionHeading kicker="Technology network" title="Global specialism. Local capability." light />
          <div className="body-copy reveal"><p>4Ss develops relationships with specialist technology organizations across radiation, dosimetry, nuclear instrumentation, inspection, autonomy and environmental monitoring.</p><p>Our value is integration. We connect the instrument to the platform, the platform to the data, the data to qualified interpretation, and the solution to the people, procedures and support model that must sustain it.</p></div>
        </section>

        <section className="section dark-section">
          <SectionHeading kicker="Technology categories" title="Selected around the mission." />
          <div className="technology-grid">
            {technologyCategories.map((category, index) => <article className="technology-card reveal" key={category.title}><span>0{index + 1}</span><div className="tech-sphere" aria-hidden="true" /><h3>{category.title}</h3><p>{category.text}</p></article>)}
          </div>
        </section>

        <section className="section process-section">
          <SectionHeading kicker="Cooperation model" title="From mission to lifecycle performance." />
          <div className="process-line cooperation-line">
            {[
              ["01", "Understand the mission"], ["02", "Select the specialist technology"], ["03", "Define roles and interfaces"],
              ["04", "Integrate and validate"], ["05", "Train and support"], ["06", "Review lifecycle performance"],
            ].map(([number, title]) => <article className="process-step reveal" key={number}><span>{number}</span><h3>{title}</h3></article>)}
          </div>
        </section>

        <section className="section pearl-section lifecycle-feature">
          <div className="lifecycle-orb" aria-hidden="true"><span /><i /><b /></div>
          <div className="reveal"><p className="eyebrow">Integration & support</p><h2>Make advanced technology work in the field.</h2><p>The value of specialist technology depends on integration, acceptance, training, maintenance and sustained performance. 4Ss provides one coordinated path from requirement to deployment and long-term readiness.</p><div className="chip-row">{howWeWork.map((step) => <span key={step.title}>{step.title}</span>)}</div></div>
        </section>

        <CTASection title="Discuss technology cooperation." text="Global specialism selected around the mission—integrated and supported locally." label="Discuss Technology Cooperation" href="/contact?interest=technology-cooperation&source=technology-partners" />
      </main>
    </SiteShell>
  );
}

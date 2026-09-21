import type { Metadata } from "next";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Partners | 4Ss Engineering Services",
  description: "Global specialism selected around the mission—integrated and supported locally.",
};

const cooperationSteps = [
  ["01", "Understand the mission"],
  ["02", "Select the specialist technology"],
  ["03", "Define roles and interfaces"],
  ["04", "Integrate and validate"],
  ["05", "Train and support"],
  ["06", "Review lifecycle performance"],
];

export default function PartnersPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          kicker="Partners"
          title="Global specialism. Local capability."
          lead="Global specialism selected around the mission—integrated and supported locally."
        />

        <section className="editorial light-section split-section">
          <SectionHeading kicker="Technology network" title="Global specialism. Local capability." light />
          <div className="body-copy reveal">
            <p>4Ss develops relationships with specialist technology organizations across radiation, dosimetry, nuclear instrumentation, inspection, autonomy and environmental monitoring.</p>
            <p>Our value is integration. We connect the instrument to the platform, the platform to the data, the data to qualified interpretation, and the solution to the people, procedures and support model that must sustain it.</p>
          </div>
        </section>

        <section className="section process-section">
          <SectionHeading kicker="Cooperation model" title="From mission to lifecycle performance." />
          <div className="process-line cooperation-line">
            {cooperationSteps.map(([number, title]) => (
              <article className="process-step reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <CTASection
          title="Discuss technology cooperation."
          text="Global specialism selected around the mission—integrated and supported locally."
          label="Discuss Technology Cooperation"
          href="/contact?interest=technology-cooperation&source=partners"
        />
      </main>
    </SiteShell>
  );
}

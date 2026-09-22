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
            <p>4Ss works with a global network of established technology partners and internationally recognized experts across radiation detection, dosimetry, nuclear instrumentation, advanced inspection, robotics, autonomy and environmental monitoring.</p>
            <p>Our strength is integration. We bring together specialist technologies, proven global expertise and local engineering capability to connect the instrument, the platform, the data and the qualified technical interpretation into one complete solution.</p>
            <p>This allows 4Ss to deliver more than equipment. We combine world-class technology, expert knowledge, engineering implementation, training and lifecycle support to create practical, deployment-ready solutions for complex and safety-critical environments.</p>
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

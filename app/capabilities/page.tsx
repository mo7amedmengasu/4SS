import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, pillars } from "../data";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Capabilities | 4Ss Engineering Services",
  description: "Explore radiation detection, nuclear engineering, advanced NDT, robotics, dosimetry, NORM, waste and lifecycle-support capabilities.",
};

export default function CapabilitiesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="Capabilities" title="Detection. Intelligence. Engineering. Lifecycle support." lead="Integrated nuclear, radiation, inspection and environmental engineering for critical environments." />

        <nav className="anchor-index" aria-label="Capability pillars">
          {pillars.map((pillar) => <a href={`#${pillar.id}`} key={pillar.id}><span>{pillar.number}</span>{pillar.title}</a>)}
        </nav>

        {pillars.map((pillar, pillarIndex) => {
          const items = capabilities.filter((capability) => capability.pillar === pillar.id);
          return (
            <section className={`capability-pillar ${pillarIndex % 2 ? "pillar-light" : "pillar-dark"}`} id={pillar.id} key={pillar.id}>
              <div className="pillar-heading reveal"><span>{pillar.number}</span><div><p className="eyebrow">Capability pillar</p><h2>{pillar.title}</h2><p>{pillar.summary}</p></div></div>
              {items.length > 0 ? items.map((capability, index) => (
                <article className={`capability-detail reveal ${index % 2 ? "reverse" : ""}`} id={capability.slug} key={capability.slug}>
                  <div className="capability-visual" aria-hidden="true"><div className="sensor-disc"><span>{pillar.number}.{index + 1}</span></div><i /><i /><i /></div>
                  <div className="capability-copy">
                    <p className="micro-label">{capability.title}</p><h3>{capability.headline}</h3><p>{capability.narrative}</p>
                    <ul>{capability.services.map((service) => <li key={service}>{service}</li>)}</ul>
                    <Link className={`button ${pillarIndex % 2 ? "button-dark" : "button-ghost"}`} href={`/contact?capability=${capability.slug}&source=capabilities`}>Discuss This Capability <span>↗</span></Link>
                  </div>
                </article>
              )) : (
                <article className="capability-brief reveal">
                  <p>{pillar.summary}</p>
                  <Link className={`button ${pillarIndex % 2 ? "button-dark" : "button-ghost"}`} href={`/contact?capability=${pillar.id}&source=capabilities`}>Discuss This Capability <span>↗</span></Link>
                </article>
              )}
            </section>
          );
        })}

        <section className="scope-band"><SectionHeading kicker="Lifecycle responsibility" title="One coordinated path from requirement to deployment and long-term readiness." /><p>Integration, validation, training, maintenance and long-term readiness are planned from the start.</p></section>
        <CTASection title="Discuss this capability." text="Tell us about the environment, the mission and the decision you need to make." />
      </main>
    </SiteShell>
  );
}

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
              <div className="pillar-heading reveal"><span>{pillar.number}</span><div><p className="eyebrow">Capability pillar</p><h2>{pillar.title}</h2>{pillar.detailHeadline && <h3 className="pillar-detail-headline">{pillar.detailHeadline}</h3>}<p>{pillar.detail ?? pillar.summary}</p></div></div>
              {items.length > 0 ? items.map((capability, index) => (
                <article className={`capability-detail reveal ${index % 2 ? "reverse" : ""} ${capability.techniques ? "has-techniques" : ""} ${pillar.id === "radiation" ? "radiation-capability" : ""} ${capability.slug === "nuclear-engineering" ? "nuclear-capability" : ""} ${capability.slug === "advanced-ndt-asset-integrity" ? "advanced-ndt-capability" : ""} ${capability.slug === "robotics-remote-inspection" ? "capability-featured" : ""}`} id={capability.slug} key={capability.slug}>
                  {pillar.id === "radiation" ? (
                    <figure className={`capability-visual capability-image-visual radiation-visual-${index + 1}`}>
                      <img
                        src={`/capabilities/Radiation Detection, Monitoring & Dosimetry/${["cap1_.png", "cap2.png", "cap3.png"][index]}`}
                        alt={`${capability.title} equipment`}
                        loading="lazy"
                      />
                    </figure>
                  ) : capability.slug === "nuclear-engineering" ? (
                    <figure className="capability-visual nuclear-image-visual">
                      <img
                        src="/capabilities/Nuclear Engineering, Plant Support & Maintenance/cap1.png"
                        alt="Nuclear engineering, plant support and maintenance facility"
                        loading="lazy"
                      />
                    </figure>
                  ) : capability.slug === "advanced-ndt-asset-integrity" ? (
                    <figure className="capability-visual advanced-ndt-image-visual">
                      <img
                        src="/capabilities/Advanced NDT, Robotics & AI Inspection/advanced-ndt-equipment-collage.png"
                        alt="Advanced NDT and digital inspection equipment"
                        loading="lazy"
                      />
                    </figure>
                  ) : capability.slug === "robotics-remote-inspection" ? (
                    <figure className="capability-visual robotics-image-visual">
                      <img
                        src="/capabilities/Advanced NDT, Robotics & AI Inspection/cap2.png"
                        alt="Robotic crawler performing digital NDT inspection on industrial pipework"
                        loading="lazy"
                      />
                    </figure>
                  ) : capability.slug === "smart-autonomous-ai" ? (
                    <figure className="capability-visual smart-ai-image-visual">
                      <img
                        src="/capabilities/Advanced NDT, Robotics & AI Inspection/cap3.png"
                        alt="Autonomous wheeled and tracked robotic inspection platforms"
                        loading="lazy"
                      />
                    </figure>
                  ) : capability.slug === "environmental-radiological-consultancy" ? (
                    <figure className="capability-visual environment-site-image-visual">
                      <img
                        src="/capabilities/Environment, NORM, Waste & Decommissioning/cap1.png"
                        alt="Environmental site characterization team surveying industrial pipeline infrastructure"
                        loading="lazy"
                      />
                    </figure>
                  ) : (
                    <div className="capability-visual" aria-hidden="true"><div className="sensor-disc"><span>{pillar.number}.{index + 1}</span></div><i /><i /><i /></div>
                  )}
                  <div className="capability-copy">
                    <p className="micro-label">{capability.title}</p><h3>{capability.headline}</h3><p>{capability.narrative}</p>
                    {capability.techniques ? (
                      <div className="inspection-accordion">
                        <p className="micro-label">{capability.techniquesLabel ?? "Inspection Techniques"}</p>
                        <div className="technique-list">
                          {capability.techniques.map((technique, techniqueIndex) => (
                            <details className="technique-item" key={technique.title}>
                              <summary>
                                <span>{String(techniqueIndex + 1).padStart(2, "0")}</span>
                                <strong>{technique.title}</strong>
                                <i aria-hidden="true">+</i>
                              </summary>
                              <p>{technique.text}</p>
                            </details>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {capability.services.length > 0 && <>{capability.servicesLabel && <p className="services-label">{capability.servicesLabel}</p>}<ul>{capability.services.map((service) => <li key={service}>{service}</li>)}</ul></>}
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

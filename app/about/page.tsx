import type { Metadata } from "next";
import { companyCopy, howWeWork, principles, statements, uaeCommitment, uaeObjective } from "../data";
import { CTASection, PageHero, SectionHeading, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About 4Ss | 4Ss Engineering Services",
  description: "Discover how 4Ss Engineering Services connects specialist technology, responsible engineering and lifecycle support for critical missions.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="About 4Ss" title="From complex risk to dependable capability." lead={companyCopy.overview} />

        <section className="editorial light-section split-section">
          <SectionHeading kicker="About the company" title="We do not begin with a product." lead="We begin with the environment, the risk, the asset and the decision the client must make." light />
          <div className="body-copy reveal"><p>{companyCopy.detail}</p><p>{companyCopy.value}</p></div>
        </section>

        <section className="statement-stack">
          {statements.map((statement, index) => (
            <article className={`statement-panel reveal ${index % 2 ? "statement-light" : ""}`} key={statement.label}>
              <p className="eyebrow">{statement.label}</p><h2>{statement.title}</h2><p>{statement.text}</p>
            </article>
          ))}
        </section>

        <section className="section dark-section">
          <SectionHeading kicker="Our operating principles" title="Mission first. Evidence led. Lifecycle responsible." />
          <div className="principles-grid">
            {principles.map((principle) => <article className="principle reveal" key={principle.title}><div className="principle-dot" /><h3>{principle.title}</h3><p>{principle.text}</p></article>)}
          </div>
        </section>

        <section className="section process-section">
          <SectionHeading kicker="How 4Ss works" title="From requirement to readiness." />
          <div className="process-line">{howWeWork.map((step) => <article className="process-step reveal" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </section>

        <section className="presidential-quote" aria-labelledby="presidential-quote-heading">
          <figure className="presidential-portrait reveal">
            <img
              src="/imirates presedant.jpeg"
              width="1500"
              height="1080"
              alt="His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the United Arab Emirates"
            />
          </figure>
          <div className="presidential-quote-copy reveal">
            <p className="eyebrow">A vision for sustainable progress</p>
            <span className="presidential-quote-mark" aria-hidden="true">“</span>
            <blockquote id="presidential-quote-heading">
              The UAE is keen to establish an integrated system for artificial intelligence to identify effective solutions for energy sustainability, ensuring energy security, and achieving sustainable economic and social development.
            </blockquote>
            <div className="presidential-attribution">
              <strong>H.H. Sheikh Mohamed bin Zayed Al Nahyan</strong>
              <span>President of the United Arab Emirates</span>
            </div>
          </div>
        </section>

        <section className="uae-band">
          <div className="uae-accent" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="reveal"><p className="eyebrow">UAE commitment</p><h2>Global specialism. Local capability. Long-term value.</h2></div>
          <div className="body-copy reveal"><p>{uaeCommitment}</p><p>{uaeObjective}</p></div>
        </section>

        <CTASection title="Discover our capabilities." text="Radiation, nuclear engineering, NDT inspection, robotics, environmental intelligence and lifecycle support." label="Discover Our Capabilities" href="/capabilities" />
      </main>
    </SiteShell>
  );
}

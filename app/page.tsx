import Link from "next/link";
import { companyCopy, differentiators, flagshipCapabilities, howWeWork, industries, leaders, outcomes, pillars, technologyCategories } from "./data";
import { CTASection, Header, OrbitalScene, SectionHeading, Footer } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero home-hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">Advanced radiation, nuclear, inspection and environmental engineering</p>
            <h1>See the invisible.<br /><span>Protect what matters.</span></h1>
            <p className="hero-lead">4Ss Engineering Services brings together specialist engineering, advanced detection, autonomous inspection, environmental intelligence and lifecycle support to help government, nuclear, energy and critical-infrastructure organizations see risk earlier, act with confidence and keep essential operations resilient.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/capabilities">Discover Our Capabilities <span aria-hidden="true">↗</span></Link>
              <Link className="button button-ghost" href="/contact">Discuss a Requirement</Link>
            </div>
          </div>
          <OrbitalScene />
          <div className="hero-index" aria-hidden="true">SAFETY / SECURITY / SAFEGUARDS / SUSTAINABILITY</div>
        </section>

        <section className="trust-line" aria-label="4Ss approach">
          <article><span>01</span><strong>UAE-based coordination</strong><p>Abu Dhabi-based engineering and technology coordination for critical environments.</p></article>
          <article><span>02</span><strong>Mission-first engineering</strong><p>Requirements, operating context and acceptance criteria come before product selection.</p></article>
          <article><span>03</span><strong>Lifecycle responsibility</strong><p>Integration, validation, training, maintenance and long-term readiness are planned from the start.</p></article>
        </section>

        <section className="editorial light-section split-section">
          <SectionHeading kicker="Company positioning" title={companyCopy.positionHeading} light />
          <div className="body-copy reveal"><p>{companyCopy.position}</p><p>{companyCopy.positionDetail}</p><Link className="text-link" href="/about">About 4Ss <span>↗</span></Link></div>
        </section>

        <section className="section dark-section">
          <SectionHeading kicker="Four outcomes. One connected capability." title="What do you need to detect, inspect, protect or sustain?" />
          <div className="outcome-grid">
            {outcomes.map((outcome, index) => <article className="outcome-card reveal" key={outcome.title}><span>0{index + 1}</span><h3>{outcome.title}</h3><p>{outcome.text}</p></article>)}
          </div>
        </section>

        <section className="section pearl-section">
          <SectionHeading kicker="Capabilities" title="Six activity pillars. One integrated engineering company." light />
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <Link className="pillar-card reveal" href={`/capabilities#${pillar.id}`} key={pillar.id}>
                <div className="pillar-orbit" aria-hidden="true"><span>{pillar.number}</span></div>
                <h3>{pillar.title}</h3><p>{pillar.summary}</p><span className="card-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section dark-section flagship-section">
          <SectionHeading kicker="Flagship capability stories" title="Engineering confidence where uncertainty carries consequences." />
          <div className="flagship-list">
            {flagshipCapabilities.map((item, index) => (
              <article className="flagship-card reveal" key={item.label}>
                <div className="flagship-number">0{index + 1}</div>
                <div><p className="micro-label">{item.label}</p><h3>{item.headline}</h3><p>{item.text}</p></div>
                <Link href="/capabilities" aria-label={`Explore ${item.label}`}>↗</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section light-section">
          <SectionHeading kicker="Industries" title="Engineering for critical industries." lead="The same technology can serve very different missions." light />
          <div className="industry-marquee">
            {industries.map((industry) => <Link className="industry-row reveal" href={`/industries#${industry.slug}`} key={industry.slug}><span>{industry.number}</span><h3>{industry.title}</h3><p>{industry.text}</p><b>↗</b></Link>)}
          </div>
          <Link className="button button-dark section-action" href="/industries">Explore Industries</Link>
        </section>

        <section className="section process-section">
          <SectionHeading kicker="How 4Ss works" title="From requirement to readiness." />
          <div className="process-line">
            {howWeWork.map((step) => <article className="process-step reveal" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section className="section technology-section">
          <div>
            <SectionHeading kicker="Technology network" title="Global specialism. Local capability." lead="4Ss develops relationships with specialist technology organizations across radiation, dosimetry, nuclear instrumentation, inspection, autonomy and environmental monitoring." />
            <Link className="button button-ghost" href="/technology-partners">View Technology &amp; Partners</Link>
          </div>
          <div className="tech-cloud" aria-label="Technology categories">
            {technologyCategories.map((category, index) => <span key={category.title} style={{ "--i": index } as React.CSSProperties}>{category.title}</span>)}
          </div>
        </section>

        <section className="section pearl-section">
          <SectionHeading kicker="Why 4Ss" title="One responsible point of coordination." lead="Specialist technology creates value when it is selected carefully, integrated correctly and supported for the long term." light />
          <div className="differentiator-grid">
            {differentiators.map((item, index) => <article className="differentiator reveal" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>

        <section className="section leadership-preview">
          <SectionHeading kicker="Leadership" title="Responsible direction. Technical depth. Long-term intent." />
          <div className="leadership-preview-grid">
            {leaders.map((leader, index) => <article className="preview-leader reveal" key={leader.name}><span>0{index + 1}</span><p>{leader.role}</p><h3>{leader.name}</h3></article>)}
          </div>
          <Link className="button button-ghost section-action" href="/leadership">Meet Our Leadership</Link>
        </section>

        <CTASection title="What do you need to detect, inspect, protect or sustain?" text="Tell us about the environment, the mission and the decision you need to make." label="Contact 4Ss" />
      </main>
      <Footer />
    </>
  );
}

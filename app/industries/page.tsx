import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "../data";
import { CTASection, PageHero, RelatedChips, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Industries | 4Ss Engineering Services",
  description: "Mission-led engineering solutions for government, nuclear energy, oil and gas, ports, environment, utilities and radiological operations.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="Industries" title="Critical sectors. Mission-specific context." lead="The same technology can serve very different missions." />
        <nav className="anchor-index industry-index" aria-label="Industry sectors">
          {industries.map((industry) => <a href={`#${industry.slug}`} key={industry.slug}><span>{industry.number}</span>{industry.title}</a>)}
        </nav>
        <section className="industry-sections">
          {industries.map((industry, index) => (
            <article className="industry-detail reveal" id={industry.slug} key={industry.slug}>
              <div className="industry-visual" aria-hidden="true"><span>{industry.number}</span><div className="depth-frame" /><div className="depth-frame second" /></div>
              <div><p className="eyebrow">Engineering for critical industries</p><h2>{industry.title}</h2><p>{industry.text}</p><RelatedChips ids={industry.related} /><Link className="button button-dark" href={`/contact?industry=${industry.slug}&source=industries`}>{index === 0 || index === 3 ? "Start a Private Discussion" : index === 6 ? "Discuss Your Site" : "Discuss a Requirement"}<span>↗</span></Link></div>
            </article>
          ))}
        </section>
        <CTASection title="Engineering for critical industries." text="Tell us about the environment, the mission and the decision you need to make." />
      </main>
    </SiteShell>
  );
}

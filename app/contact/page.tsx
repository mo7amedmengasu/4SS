import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | 4Ss Engineering Services",
  description: "Discuss a requirement with 4Ss Engineering Services.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero kicker="Contact" title="Discuss a requirement." lead="Requirement-led language for engineering, government and technology-partner enquiries." />
        <section className="contact-layout">
          <div className="contact-intro reveal"><p className="eyebrow">Requirement-led conversation</p><h2>What do you need to detect, inspect, protect or sustain?</h2><p>Tell us about the environment, the mission and the decision you need to make.</p><div className="contact-location"><span>4Ss Engineering Services</span><strong>Abu Dhabi | United Arab Emirates</strong></div></div>
          <ContactForm />
        </section>
      </main>
    </SiteShell>
  );
}

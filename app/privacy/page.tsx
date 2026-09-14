import type { Metadata } from "next";
import { PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Privacy | 4Ss Engineering Services" };

export default function PrivacyPage() {
  return <SiteShell><main><PageHero kicker="4Ss Engineering Services" title="Privacy" lead="" /></main></SiteShell>;
}

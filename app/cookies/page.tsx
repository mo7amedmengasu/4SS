import type { Metadata } from "next";
import { PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Cookies | 4Ss Engineering Services" };

export default function CookiesPage() {
  return <SiteShell><main><PageHero kicker="4Ss Engineering Services" title="Cookies" lead="" /></main></SiteShell>;
}

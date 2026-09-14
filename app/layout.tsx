import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4Ss Engineering Services",
  description: "Advanced radiation, nuclear, inspection, robotics and environmental engineering from Abu Dhabi for critical environments.",
  icons: { icon: "/logo.jpeg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

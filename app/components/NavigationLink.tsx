"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isCurrent = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return <Link href={href} aria-current={isCurrent ? "page" : undefined}>{children}</Link>;
}

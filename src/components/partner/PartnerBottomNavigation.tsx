"use client";

import { Building2, Files, Inbox, LayoutDashboard, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

const items = [
  { href: routes.partner.home, label: "Обзор", icon: LayoutDashboard },
  { href: routes.partner.organization, label: "Организация", icon: Building2 },
  { href: routes.partner.content, label: "Контент", icon: Files },
  { href: routes.partner.requests, label: "Обращения", icon: Inbox },
  { href: routes.partner.profile, label: "Профиль", icon: UserRound },
];

export function PartnerBottomNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Навигация партнёра" className="border-t border-border bg-surface/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur"><ul className="grid grid-cols-5 gap-1">{items.map(({ href, label, icon: Icon }) => { const active = pathname === href || (href !== routes.partner.home && pathname.startsWith(`${href}/`)); return <li key={href}><Link href={href} aria-current={active ? "page" : undefined} className={cn("flex min-h-12 flex-col items-center justify-center gap-1 rounded-control px-1 text-[13px] font-semibold", active ? "bg-primary-soft text-primary" : "text-muted hover:bg-surface-soft hover:text-ink")}><Icon aria-hidden="true" className="h-5 w-5" /><span>{label}</span></Link></li>; })}</ul></nav>;
}

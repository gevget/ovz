"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { AppIcon, type AppIconName } from "@/components/ui/AppIcon";

const items = [
  { href: routes.partner.home, label: "Обзор", icon: "LayoutDashboard" as AppIconName },
  { href: routes.partner.organization, label: "Организация", icon: "Building2" as AppIconName },
  { href: routes.partner.content, label: "Контент", icon: "Files" as AppIconName },
  { href: routes.partner.requests, label: "Обращения", icon: "Inbox" as AppIconName },
  { href: routes.partner.profile, label: "Профиль", icon: "UserRound" as AppIconName },
];

export function PartnerBottomNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Навигация партнёра" className="shrink-0 border-t border-border/80 bg-surface/92 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-nav backdrop-blur-xl"><ul className="grid min-w-0 grid-cols-5 gap-1">{items.map(({ href, label, icon }) => { const contentGroup = [routes.partner.content, routes.partner.vacancies, routes.partner.courses, routes.partner.events, routes.partner.offers]; const active = href === routes.partner.content ? contentGroup.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)) : pathname === href || (href !== routes.partner.home && pathname.startsWith(`${href}/`)); return <li key={href} className="min-w-0"><Link href={href} aria-current={active ? "page" : undefined} className={cn("flex min-h-12 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-control px-0 text-center text-[13px] font-semibold leading-tight tracking-[-0.02em]", active ? "bg-primary-soft/70 text-primary shadow-xs" : "text-muted hover:bg-surface-soft hover:text-ink")}><AppIcon name={icon} className="h-5 w-5" /><span className="max-w-full whitespace-nowrap">{label}</span></Link></li>; })}</ul></nav>;
}

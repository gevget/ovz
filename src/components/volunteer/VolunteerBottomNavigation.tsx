"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { AppIcon, type AppIconName } from "@/components/ui/AppIcon";

const items = [
  { href: routes.volunteer.home, label: "Заявки", icon: "ClipboardList" as AppIconName },
  { href: routes.volunteer.map, label: "Карта", icon: "Map" as AppIconName },
  { href: routes.volunteer.community, label: "Сообщество", icon: "Users" as AppIconName },
  { href: routes.volunteer.history, label: "История", icon: "History" as AppIconName },
  { href: routes.volunteer.profile, label: "Профиль", icon: "UserRound" as AppIconName },
];

export function VolunteerBottomNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Навигация волонтёра" className="shrink-0 border-t border-border/80 bg-surface/92 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-nav backdrop-blur-xl"><ul className="grid min-w-0 grid-cols-5 gap-1">{items.map(({ href, label, icon }) => { const active = pathname === href || (href !== routes.volunteer.home && pathname.startsWith(`${href}/`)); return <li key={href} className="min-w-0"><Link href={href} aria-current={active ? "page" : undefined} className={cn("flex min-h-12 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-control px-0 text-center text-[13px] font-semibold leading-tight tracking-[-0.02em]", active ? "bg-primary-soft/70 text-primary shadow-xs" : "text-muted hover:bg-surface-soft hover:text-ink")}><AppIcon name={icon} className="h-5 w-5" /><span className="max-w-full whitespace-nowrap">{label}</span></Link></li>; })}</ul></nav>;
}

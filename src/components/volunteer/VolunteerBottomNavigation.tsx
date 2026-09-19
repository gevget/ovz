"use client";

import { ClipboardList, History, Map, UserRound, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

const items = [
  { href: routes.volunteer.home, label: "Заявки", icon: ClipboardList },
  { href: routes.volunteer.map, label: "Карта", icon: Map },
  { href: routes.volunteer.community, label: "Сообщество", icon: Users },
  { href: routes.volunteer.history, label: "История", icon: History },
  { href: routes.volunteer.profile, label: "Профиль", icon: UserRound },
];

export function VolunteerBottomNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Навигация волонтёра" className="border-t border-border bg-surface/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur"><ul className="grid grid-cols-5 gap-1">{items.map(({ href, label, icon: Icon }) => { const active = pathname === href || (href !== routes.volunteer.home && pathname.startsWith(`${href}/`)); return <li key={href}><Link href={href} aria-current={active ? "page" : undefined} className={cn("flex min-h-12 flex-col items-center justify-center gap-1 rounded-control px-1 text-[13px] font-semibold", active ? "bg-primary-soft text-primary" : "text-muted hover:bg-surface-soft hover:text-ink")}><Icon aria-hidden="true" className="h-5 w-5" /><span>{label}</span></Link></li>; })}</ul></nav>;
}

"use client";

import { CircleHelp, Home, Map, UserRound, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { cn } from "@/lib/cn";

const items = [
  { href: routes.user.home, label: uiCopy.nav.home, icon: Home },
  { href: routes.user.map, label: uiCopy.nav.map, icon: Map },
  { href: routes.user.help, label: uiCopy.nav.help, icon: CircleHelp },
  { href: routes.user.opportunities, label: uiCopy.nav.opportunities, icon: Sparkles },
  { href: routes.user.profile, label: uiCopy.nav.profile, icon: UserRound },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Основная навигация" className="border-t border-border bg-surface/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
      <ul className="grid grid-cols-5 gap-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== routes.user.home && pathname.startsWith(`${href}/`));
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-1 rounded-control px-1 text-[13px] font-semibold transition-colors",
                  active ? "bg-primary-soft text-primary" : "text-muted hover:bg-surface-soft hover:text-ink",
                )}
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

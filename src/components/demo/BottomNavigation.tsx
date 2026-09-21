"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";
import { cn } from "@/lib/cn";
import { AppIcon, type AppIconName } from "@/components/ui/AppIcon";
import { ResponsiveNavLabel } from "@/components/demo/ResponsiveNavLabel";

const items = [
  { href: routes.user.home, label: uiCopy.nav.home, compactLabel: "Главная", icon: "Home" as AppIconName },
  { href: routes.user.map, label: uiCopy.nav.map, compactLabel: "Карта", icon: "Map" as AppIconName },
  { href: routes.user.help, label: uiCopy.nav.help, compactLabel: "Помощь", icon: "CircleHelp" as AppIconName },
  { href: routes.user.opportunities, label: uiCopy.nav.opportunities, compactLabel: "Разделы", icon: "Sparkles" as AppIconName },
  { href: routes.user.profile, label: uiCopy.nav.profile, compactLabel: "Профиль", icon: "UserRound" as AppIconName },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
            <nav aria-label="Основная навигация" className="shrink-0 border-t border-border/80 bg-surface/92 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-nav backdrop-blur-xl">
      <ul className="grid min-w-0 grid-cols-5 gap-1">
        {items.map(({ href, label, compactLabel, icon }) => {
          const opportunityGroup = [
            routes.user.opportunities,
            routes.user.events,
            routes.user.clubs,
            routes.user.feed,
            routes.user.community,
            routes.user.friends,
            routes.user.dating,
          ];
          const active = href === routes.user.opportunities
            ? opportunityGroup.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
            : pathname === href || (href !== routes.user.home && pathname.startsWith(`${href}/`));
          return (
            <li key={href} className="min-w-0">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 w-full min-w-0 flex-col items-center justify-center gap-1 rounded-control px-0 text-center text-[13px] font-semibold leading-tight tracking-[-0.02em] transition-colors",
                  active ? "bg-primary-soft/70 text-primary shadow-xs" : "text-muted hover:bg-surface-soft hover:text-ink",
                )}
              >
                <AppIcon name={icon} className="h-5 w-5" />
                <ResponsiveNavLabel label={label} compactLabel={compactLabel} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

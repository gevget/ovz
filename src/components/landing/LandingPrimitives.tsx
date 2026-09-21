"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navigation = [
  { label: "Возможности", href: "#opportunities" },
  { label: "Карта", href: "#map" },
  { label: "Сообщество", href: "#community" },
  { label: "Для партнёров", href: "#partners" },
  { label: "О проекте", href: "#investors" },
];

export function LandingHeader({ onPartner }: { onPartner: () => void }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const firstControl = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstControl?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="surface-glass sticky top-0 z-40 border-x-0 border-t-0 bg-canvas/90">
      <div className="mx-auto flex min-h-16 max-w-[1280px] items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="#top" className="shrink-0 rounded-control text-sm font-bold tracking-[-0.02em] text-ink">
          Навигатор доступности
        </Link>
        <nav aria-label="Основная навигация" className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
          <a key={item.href} href={item.href} className="rounded-control px-2 py-2 text-sm font-semibold text-muted transition-colors hover:bg-surface-soft hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/demo" className="inline-flex min-h-11 items-center gap-2 rounded-control bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-strong hover:shadow-md">
            Открыть демо <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Button variant="secondary" onClick={onPartner}>Стать партнёром</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-border bg-surface text-ink lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="landing-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div id="landing-mobile-menu" ref={menuRef} className="border-t border-border bg-surface px-4 py-4 shadow-sm lg:hidden">
          <nav aria-label="Мобильная навигация" className="grid gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="flex min-h-12 items-center rounded-control px-3 text-base font-semibold text-ink hover:bg-surface-soft">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <Link href="/demo" onClick={closeMenu} className="inline-flex min-h-12 items-center justify-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Открыть демо</Link>
            <Button variant="secondary" onClick={() => { closeMenu(); onPartner(); }}>Стать партнёром</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function LandingSection({ id, eyebrow, title, description, children, className, tone = "plain" }: { id: string; eyebrow?: string; title: string; description?: string; children: ReactNode; className?: string; tone?: "plain" | "soft" | "dark" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("page-section", tone === "soft" && "bg-surface-soft/55", tone === "dark" && "bg-surface-inverse text-on-surface-inverse", className)}>
      <div className="page-container">
        <div className="max-w-3xl">
          {eyebrow ? <p className={cn("text-sm font-bold uppercase tracking-[0.12em]", tone === "dark" ? "text-accent" : "text-primary")}>{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className={cn("text-balance mt-3 text-3xl font-bold leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl", tone === "dark" ? "text-on-surface-inverse" : "text-ink")}>{title}</h2>
          {description ? <p className={cn("mt-4 max-w-2xl text-base leading-7 sm:text-lg", tone === "dark" ? "text-on-surface-inverse/72" : "text-muted")}>{description}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function LandingMedia({ src, alt, className, priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={cn("landing-media relative aspect-[4/3] overflow-hidden rounded-card bg-surface-soft", className)}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-500 hover:scale-[1.02]" /></div>;
}

export function DemoCTA({ label = "Открыть демо", role, variant = "primary" }: { label?: string; role?: "user" | "volunteer" | "partner" | "admin"; variant?: "primary" | "secondary" }) {
  const href = role ? `/demo?role=${role}` : "/demo";
  return <Link href={href} className={cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-5 text-sm font-semibold transition-[background-color,border-color,box-shadow]", variant === "primary" ? "bg-primary text-white shadow-sm hover:bg-primary-strong hover:shadow-md" : "border border-border bg-surface text-ink hover:bg-surface-soft")}>{label}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>;
}

export function LandingFooter() {
  return (
    <footer id="about" className="border-t border-border bg-surface">
      <div className="page-container grid gap-8 py-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-bold text-ink">Навигатор доступности</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">Технологии должны сокращать расстояние между человеком и возможностью действовать.</p>
        </div>
        <nav aria-label="Ссылки проекта" className="min-w-0 grid gap-2 text-sm text-muted">
          <a href="#about" className="hover:text-ink">О проекте</a>
          <a href="#opportunities" className="hover:text-ink">Возможности</a>
          <Link href="/demo" className="hover:text-ink">Демо</Link>
          <a href="#partners" className="hover:text-ink">Партнёрам</a>
          <a href="#investors" className="hover:text-ink">Инвесторам</a>
          <a href="#partners" className="hover:text-ink">Контакты</a>
          <span className="break-words text-muted">Политика конфиденциальности · в подготовке</span>
        </nav>
        <div className="text-sm text-muted">
          <p>Тестовая версия продукта</p>
          <p className="mt-2">Все сценарии работают на локальных демо-данных.</p>
        </div>
      </div>
    </footer>
  );
}

export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "primary" }) {
  return <span className={cn("inline-flex min-h-7 items-center rounded-full px-2.5 text-xs font-semibold", tone === "success" && "bg-success/10 text-success", tone === "warning" && "bg-warning/10 text-warning", tone === "primary" && "bg-primary-soft text-primary", tone === "neutral" && "bg-surface-soft text-muted")}>{children}</span>;
}

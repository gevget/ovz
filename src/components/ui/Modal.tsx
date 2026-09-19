"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";

export function Modal({ open, title, children, onClose, className, align = "center" }: { open: boolean; title: string; children: ReactNode; onClose: () => void; className?: string; align?: "center" | "bottom" }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>("button, a, input, select, textarea, [tabindex='0']");
    firstFocusable?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button, a, input, select, textarea, [tabindex='0']") ?? []).filter((element) => !element.hasAttribute("disabled"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previous?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className={`fixed inset-0 z-50 flex justify-center bg-[#0e1a2b]/45 p-4 ${align === "bottom" ? "items-end" : "items-center"}`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={cn("max-h-[min(720px,calc(100dvh-32px))] w-full max-w-lg overflow-y-auto rounded-sheet border border-border bg-surface p-5 shadow-device", className)}>
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-xl font-bold text-ink">{title}</h2>
          <IconButton aria-label="Закрыть" onClick={onClose}><X aria-hidden="true" className="h-5 w-5" /></IconButton>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconButton } from "@/components/ui/IconButton";
import { AppIcon } from "@/components/ui/AppIcon";
import { cn } from "@/lib/cn";
import { useDemoPhoneOverlay } from "@/components/demo/DemoPhoneOverlayRoot";

export function Modal({ open, title, children, onClose, className, align = "center" }: { open: boolean; title: string; children: ReactNode; onClose: () => void; className?: string; align?: "center" | "bottom" }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const overlayRoot = useDemoPhoneOverlay();

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

  const overlay = (
    <div className={cn(overlayRoot ? "absolute" : "fixed", "inset-0 z-50 flex pointer-events-auto justify-center bg-surface-inverse/45 p-4 backdrop-blur-[2px]", align === "bottom" ? "items-end" : "items-center")} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={cn(overlayRoot ? "max-h-[calc(100%_-_32px)]" : "max-h-[min(720px,calc(100dvh-32px))]", "w-full max-w-lg overflow-y-auto rounded-sheet border border-border bg-surface-elevated p-5 shadow-floating", className)}>
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-xl font-bold text-ink">{title}</h2>
          <IconButton aria-label="Закрыть" onClick={onClose}><AppIcon name="X" className="h-5 w-5" /></IconButton>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );

  return overlayRoot ? createPortal(overlay, overlayRoot) : overlay;
}

"use client";

import { CheckCircle2, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { useDemoPhoneOverlay } from "@/components/demo/DemoPhoneOverlayRoot";

export function Toast({ message, onDismiss }: { message: string | null; onDismiss: () => void }) {
  const overlayRoot = useDemoPhoneOverlay();
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(onDismiss, 3200);
    return () => window.clearTimeout(timer);
  }, [message, onDismiss]);

  if (!message) return null;
  const toast = (
    <div role="status" aria-live="polite" className={`${overlayRoot ? "absolute" : "fixed"} pointer-events-auto bottom-5 left-1/2 z-[60] flex w-[calc(100%-32px)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-control bg-surface-inverse px-4 py-3 text-sm font-semibold text-on-surface-inverse shadow-device`}>
      <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-soft" />
      <span className="flex-1">{message}</span>
      <IconButton aria-label="Закрыть уведомление" className="h-8 w-8 border-0 bg-white/10 text-white hover:bg-white/20" onClick={onDismiss}><X aria-hidden="true" className="h-4 w-4" /></IconButton>
    </div>
  );
  return overlayRoot ? createPortal(toast, overlayRoot) : toast;
}

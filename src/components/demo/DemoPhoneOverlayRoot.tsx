"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const DemoPhoneOverlayContext = createContext<HTMLElement | null>(null);

/**
 * Keeps product overlays inside the simulated device on desktop while allowing
 * the same primitives to remain viewport-level on the landing page and admin.
 */
export function DemoPhoneOverlayProvider({ children }: { children: ReactNode }) {
  const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null);

  return (
    <DemoPhoneOverlayContext.Provider value={overlayRoot}>
      {children}
      <div ref={setOverlayRoot} className="pointer-events-none absolute inset-0 z-[60]" data-demo-phone-overlay-root />
    </DemoPhoneOverlayContext.Provider>
  );
}

export function useDemoPhoneOverlay() {
  return useContext(DemoPhoneOverlayContext);
}

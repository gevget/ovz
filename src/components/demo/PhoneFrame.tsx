import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";
import { DemoPhoneOverlayProvider } from "@/components/demo/DemoPhoneOverlayRoot";

type PhoneFrameProps = {
  children: ReactNode;
  title?: string;
  fullBleedMobile?: boolean;
  className?: string;
};

export function PhoneFrame({ children, title = "Демо-приложение", fullBleedMobile = true, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate flex h-[min(880px,calc(100vh-132px))] w-[min(430px,calc(100vw-32px))] min-w-0 max-w-full overflow-hidden rounded-feature border-[10px] border-device bg-device p-1.5 shadow-device supports-[height:100dvh]:h-[min(880px,calc(100dvh-132px))]",
        fullBleedMobile && "max-md:h-[calc(100vh-88px)] max-md:w-full max-md:rounded-none max-md:border-0 max-md:p-0 max-md:shadow-none max-md:supports-[height:100dvh]:h-[calc(100dvh-88px)]",
        className,
      )}
      aria-label={localizeVisibleCopy(title)}
      data-demo-phone-frame="true"
    >
      <div className="relative flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-[31px] bg-canvas max-md:rounded-none">
        <DemoPhoneOverlayProvider>
          <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-device max-md:hidden" aria-hidden="true" />
          {children}
        </DemoPhoneOverlayProvider>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { localizeVisibleCopy } from "@/lib/localizeVisibleCopy";

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
        "relative flex h-[min(880px,calc(100vh-132px))] w-[min(430px,calc(100vw-32px))] overflow-hidden rounded-feature border-[10px] border-device bg-device p-1.5 shadow-device",
        fullBleedMobile && "max-md:h-[calc(100dvh-88px)] max-md:w-full max-md:rounded-none max-md:border-0 max-md:p-0 max-md:shadow-none",
        className,
      )}
      aria-label={localizeVisibleCopy(title)}
    >
      <div className="relative flex min-h-0 flex-1 overflow-hidden rounded-[31px] bg-canvas max-md:rounded-none">
        <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-device max-md:hidden" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}

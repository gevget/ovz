import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function MapHeader({ title, backHref, backLabel = "Назад" }: { title: string; backHref: string; backLabel?: string }) {
  return <header className="flex items-center gap-3 border-b border-border bg-surface px-5 pb-3 pt-8 max-md:pt-5"><Link href={backHref} aria-label={backLabel} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control text-muted hover:bg-surface-soft"><ArrowLeft aria-hidden="true" className="h-5 w-5" /></Link><h1 className="min-w-0 flex-1 text-lg font-bold text-ink">{title}</h1></header>;
}

import { SearchX } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

export function EmptyState({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return (
    <Card tone="soft" className="border-dashed p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-muted"><SearchX aria-hidden="true" className="h-6 w-6" /></div>
      <h2 className="mt-4 text-lg font-bold text-ink">{title}</h2>
      {description ? <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">{description}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </Card>
  );
}

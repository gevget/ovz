import { AppScreenHeader } from "@/components/demo/AppScreenHeader";

export function MapHeader({ title, backHref }: { title: string; backHref: string }) {
  return <AppScreenHeader title={title} backHref={backHref} />;
}

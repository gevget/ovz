import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { HelpMain } from "@/components/help/HelpScreens";
import { Card } from "@/components/ui/Card";
import { routes } from "@/lib/routes";
import { uiCopy } from "@/lib/ui-copy";

export default function HelpEmergencyPage() {
  return <HelpRouteFrame title="Экстренная помощь"><div className="flex min-h-0 flex-1 flex-col"><HelpMain><Card className="border-danger/30 bg-danger-soft p-5"><ShieldAlert aria-hidden="true" className="h-8 w-8 text-danger" /><h1 className="mt-4 text-xl font-bold text-ink">Действуйте спокойно</h1><p className="mt-2 text-sm leading-6 text-muted">{uiCopy.demo.emergencyDisclaimer}</p></Card><Link href={routes.user.map} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-control bg-primary px-4 text-sm font-semibold text-white">Вернуться к карте</Link></HelpMain></div></HelpRouteFrame>;
}

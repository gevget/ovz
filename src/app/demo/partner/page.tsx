import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";
export default function PartnerRootPage() { redirect(routes.partner.home); }

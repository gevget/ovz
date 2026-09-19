import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

export default function VolunteerRootPage() {
  redirect(routes.volunteer.home);
}

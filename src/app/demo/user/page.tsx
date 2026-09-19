import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

export default function UserRootPage() {
  redirect(routes.user.home);
}

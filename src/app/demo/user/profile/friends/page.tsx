import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";
export default function ProfileFriendsPage() { redirect(routes.user.friends); }

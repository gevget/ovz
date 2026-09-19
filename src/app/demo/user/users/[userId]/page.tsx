import { SocialRouteFrame } from "@/components/social/SocialRouteFrame";
import { UserProfileScreen } from "@/components/social/SocialScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.userIds; }

export default async function UserProfilePage({ params }: { params: Promise<{ userId: string }> }) { const { userId } = await params; return <SocialRouteFrame title="Профиль пользователя"><UserProfileScreen userId={userId} /></SocialRouteFrame>; }

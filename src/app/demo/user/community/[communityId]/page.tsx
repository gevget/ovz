import { SocialRouteFrame } from "@/components/social/SocialRouteFrame";
import { CommunityDetailScreen } from "@/components/social/SocialScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.communityIds; }

export default async function CommunityDetailPage({ params }: { params: Promise<{ communityId: string }> }) { const { communityId } = await params; return <SocialRouteFrame title="Сообщество"><CommunityDetailScreen communityId={communityId} /></SocialRouteFrame>; }

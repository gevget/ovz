import { SocialRouteFrame } from "@/components/social/SocialRouteFrame";
import { StoryDetailScreen } from "@/components/social/SocialScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.storyIds; }

export default async function StoryPage({ params }: { params: Promise<{ storyId: string }> }) { const { storyId } = await params; return <SocialRouteFrame title="История"><StoryDetailScreen storyId={storyId} /></SocialRouteFrame>; }

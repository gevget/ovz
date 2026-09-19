import { SocialRouteFrame } from "@/components/social/SocialRouteFrame";
import { PostDetailScreen } from "@/components/social/SocialScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.postIds; }

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) { const { postId } = await params; return <SocialRouteFrame title="Публикация"><PostDetailScreen postId={postId} /></SocialRouteFrame>; }

import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { ArticleDetailScreen } from "@/components/help/HelpScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.articleIds; }

export default async function ArticlePage({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params;
  return <HelpRouteFrame title="Статья"><ArticleDetailScreen articleId={articleId} /></HelpRouteFrame>;
}

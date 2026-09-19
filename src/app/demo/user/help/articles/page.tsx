import { HelpRouteFrame } from "@/components/help/HelpRouteFrame";
import { ArticleListScreen } from "@/components/help/HelpScreens";

export default function ArticlesPage() {
  return <HelpRouteFrame title="Статьи"><ArticleListScreen /></HelpRouteFrame>;
}

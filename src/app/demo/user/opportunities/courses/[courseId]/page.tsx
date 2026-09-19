import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { CourseDetailScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.courseIds; }

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) { const { courseId } = await params; return <OpportunitiesRouteFrame title="Курс"><CourseDetailScreen courseId={courseId} /></OpportunitiesRouteFrame>; }

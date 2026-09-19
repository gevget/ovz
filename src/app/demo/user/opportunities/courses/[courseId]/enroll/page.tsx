import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { CourseEnrollScreen } from "@/components/opportunities/OpportunityScreens";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.courseIds; }

export default async function CourseEnrollPage({ params }: { params: Promise<{ courseId: string }> }) { const { courseId } = await params; return <OpportunitiesRouteFrame title="Запись на курс"><CourseEnrollScreen courseId={courseId} /></OpportunitiesRouteFrame>; }

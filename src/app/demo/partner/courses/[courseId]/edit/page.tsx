import { PartnerAppShell } from "@/components/partner/PartnerAppShell";
import { PartnerCourseFormScreen } from "@/components/partner/PartnerScreens";
import { staticParams } from "@/lib/staticParams";
export function generateStaticParams() { return staticParams.courseIds; }
export default async function PartnerCourseEditPage({ params }: { params: Promise<{ courseId: string }> }) { const { courseId } = await params; return <PartnerAppShell><PartnerCourseFormScreen courseId={courseId} /></PartnerAppShell>; }

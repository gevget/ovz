import { MapRouteFrame } from "@/components/map/MapRouteFrame";
import { ReportIssueScreen } from "@/components/map/ReportIssueScreen";
import { staticParams } from "@/lib/staticParams";

export function generateStaticParams() { return staticParams.placeIds; }

export default async function PlaceReportPage({ params }: { params: Promise<{ placeId: string }> }) {
  const { placeId } = await params;
  return <MapRouteFrame title="Сообщить об изменении"><ReportIssueScreen placeId={placeId} /></MapRouteFrame>;
}

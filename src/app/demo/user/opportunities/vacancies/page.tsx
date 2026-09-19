import { Suspense } from "react";
import { OpportunitiesRouteFrame } from "@/components/opportunities/OpportunitiesRouteFrame";
import { VacanciesScreen } from "@/components/opportunities/OpportunityScreens";

export default function VacanciesPage() { return <OpportunitiesRouteFrame title="Работа"><Suspense fallback={null}><VacanciesScreen /></Suspense></OpportunitiesRouteFrame>; }

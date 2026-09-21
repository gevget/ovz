import { ArrowUpRight, Clock3, Heart, MapPin, Route as RouteIcon, Star } from "lucide-react";
import Image from "next/image";
import type { AccessibilityMatchResult, Place } from "@/types";
import { placeCategories, placePresentationMeta } from "@/data/map";
import { AccessibilityMatch } from "@/components/demo/AccessibilityMatch";
import { StateBadge } from "@/components/ui/StateBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";

type PlaceCardProps = {
  place: Place;
  match?: AccessibilityMatchResult;
  variant?: "compact" | "map" | "list" | "featured";
  selected?: boolean;
  isFavorite?: boolean;
  onOpen?: (placeId: string) => void;
  onFavorite?: (placeId: string) => void;
  onRoute?: (placeId: string) => void;
};

const getCategoryLabel = (category: string) => placeCategories.find((item) => item.id === category)?.label ?? "Место";

const placeImageById: Record<string, string> = {
  place_clinic_12: "/assets/landing/accessible-entrance.webp",
  place_library: "/assets/landing/library-interior.webp",
  place_cafe_sever: "/assets/landing/community-cafe.webp",
  place_station_demo: "/assets/landing/tram-interior.webp",
  place_park_bereg: "/assets/landing/park-promenade.webp",
  place_supermarket_city: "/assets/landing/partner-venue.webp",
};

function FreshnessBadge({ place }: { place: Place }) {
  const state = placePresentationMeta[place.id]?.state;
  if (state === "stale") return <StateBadge variant="stale" label={place.lastConfirmedLabel} />;
  if (state === "temporary") return <StateBadge variant="warning" label="Есть новое сообщение" />;
  if (state === "unknown") return <StateBadge variant="unknown" label="Данные требуют проверки" />;
  return <StateBadge variant={place.verified ? "verified" : "pending"} label={place.lastConfirmedLabel} />;
}

export function PlaceCard({ place, match, variant = "list", selected = false, isFavorite = false, onOpen, onFavorite, onRoute }: PlaceCardProps) {
  const compact = variant === "compact";
  const imageSrc = placeImageById[place.id] ?? "/assets/landing/partner-venue.webp";
  return (
    <Card className={`overflow-hidden transition-shadow ${selected ? "border-primary ring-2 ring-primary/10" : ""}`}>
      <div className="relative h-28 overflow-hidden bg-surface-soft" role="img" aria-label={`Изображение: ${place.name}`}>
        <Image src={imageSrc} alt="" fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover transition-transform duration-500 hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink"><MapPin aria-hidden="true" className="h-3.5 w-3.5 text-primary" /> {getCategoryLabel(place.category)}</div>
        {onFavorite ? <IconButton aria-label={isFavorite ? `Убрать ${place.name} из избранного` : `Добавить ${place.name} в избранное`} className="absolute right-3 top-3 z-10 h-10 w-10 border-0 bg-white/90" onClick={() => onFavorite(place.id)}><Heart aria-hidden="true" className={`h-5 w-5 ${isFavorite ? "fill-danger text-danger" : "text-ink"}`} /></IconButton> : null}
      </div>
        <div className={compact ? "min-w-0 p-3" : "min-w-0 p-4"}>
        <div className="flex min-w-0 items-start justify-between gap-3"><div className="min-w-0"><h2 className="break-words text-lg font-bold text-ink">{place.name}</h2><p className="mt-1 flex min-w-0 items-start gap-1.5 text-sm text-muted"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" /><span className="min-w-0 break-words">{place.address}</span></p></div>{place.rating ? <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ink"><Star aria-hidden="true" className="h-4 w-4 fill-warm text-warm" />{place.rating.toFixed(1)}</span> : null}</div>
        <div className="mt-3 flex flex-wrap gap-2"><FreshnessBadge place={place} /><Badge className="gap-1"><Clock3 aria-hidden="true" className="h-3.5 w-3.5" />{place.schedule}</Badge></div>
        {match ? <div className="mt-3"><AccessibilityMatch result={match} compact /></div> : null}
        {!compact && place.description ? <p className="mt-3 text-sm leading-6 text-muted">{place.description}</p> : null}
        <div className="mt-4 grid min-w-0 gap-2 min-[380px]:grid-cols-2">
          {onRoute ? <Button size="sm" className="w-full" onClick={() => onRoute(place.id)}><RouteIcon aria-hidden="true" className="h-4 w-4" />Построить маршрут</Button> : null}
          {onOpen ? <Button size="sm" variant="secondary" className="w-full" onClick={() => onOpen(place.id)}>Открыть <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Button> : null}
        </div>
      </div>
    </Card>
  );
}

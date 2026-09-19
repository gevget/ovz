"use client";

import { LocateFixed, MapPin } from "lucide-react";
import type { Place } from "@/types";

const bounds = { minLat: 55.73, maxLat: 55.79, minLng: 37.58, maxLng: 37.66 };

function toPosition(place: Place) {
  const left = ((place.coordinates.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 88 + 6;
  const top = (1 - (place.coordinates.lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 78 + 8;
  return { left: `${Math.min(92, Math.max(5, left))}%`, top: `${Math.min(86, Math.max(7, top))}%` };
}

export function MapCanvas({ places, selectedPlaceId, onSelect, showRoute = false }: { places: Place[]; selectedPlaceId: string | null; onSelect: (placeId: string) => void; showRoute?: boolean }) {
  return (
    <div className="relative h-[330px] overflow-hidden rounded-card border border-border bg-[#eaf1ee]" aria-label="Стилизованная demo-карта с интерактивными местами">
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 400 330" preserveAspectRatio="none">
        <path d="M-10 260 C80 220 110 230 180 165 S280 75 420 90" fill="none" stroke="#b9c8c2" strokeWidth="22" strokeLinecap="round" />
        <path d="M-10 260 C80 220 110 230 180 165 S280 75 420 90" fill="none" stroke="#f8fbf9" strokeWidth="15" strokeLinecap="round" />
        <path d="M45 -10 C80 70 145 105 210 150 S295 255 350 350" fill="none" stroke="#c6d3ce" strokeWidth="12" strokeLinecap="round" />
        <path d="M45 -10 C80 70 145 105 210 150 S295 255 350 350" fill="none" stroke="#f8fbf9" strokeWidth="7" strokeLinecap="round" />
        <path d="M-10 72 L410 270 M10 330 L390 -10" stroke="#d1ddd8" strokeWidth="4" strokeDasharray="14 12" />
        {showRoute ? <path d="M90 276 C145 230 168 198 208 160 S286 115 315 82" fill="none" stroke="#296ef2" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 8" /> : null}
      </svg>
      <div className="absolute left-[44%] top-[46%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg" aria-label="Ваше примерное местоположение"><LocateFixed aria-hidden="true" className="h-5 w-5 text-white" /></div>
      {places.map((place) => {
        const position = toPosition(place);
        const selected = place.id === selectedPlaceId;
        return <button key={place.id} type="button" aria-label={`Открыть на карте: ${place.name}`} aria-pressed={selected} className={`absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white shadow-md transition-transform hover:scale-110 focus-visible:z-10 ${selected ? "z-10 bg-[#10233f]" : "bg-primary"}`} style={position} onClick={() => onSelect(place.id)}><MapPin aria-hidden="true" className="h-5 w-5 text-white" /></button>;
      })}
      <div className="absolute bottom-3 left-3 rounded-control bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-sm">Москва · demo-карта</div>
    </div>
  );
}

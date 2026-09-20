"use client";

import { useEffect, useState } from "react";
import type { AccessibilityFeatureKey } from "@/types";
import { filterFeatures, placeCategories, type MapFilterFeature } from "@/data/map";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { BottomSheet } from "@/components/ui/BottomSheet";

type FilterSheetProps = {
  open: boolean;
  initialCategory?: string;
  initialFeature?: MapFilterFeature | "";
  onClose: () => void;
  onApply: (filters: { category: string; feature: MapFilterFeature | "" }) => void;
};

export function FilterSheet({ open, initialCategory = "all", initialFeature = "", onClose, onApply }: FilterSheetProps) {
  const [category, setCategory] = useState(initialCategory);
  const [feature, setFeature] = useState<MapFilterFeature | "">(initialFeature);

  useEffect(() => {
    if (open) {
      setCategory(initialCategory);
      setFeature(initialFeature);
    }
  }, [initialCategory, initialFeature, open]);

  const reset = () => {
    setCategory("all");
    setFeature("");
  };

  return (
    <BottomSheet open={open} title="Фильтры доступности" onClose={onClose}>
      <div className="space-y-6">
        <section aria-labelledby="category-filter-title"><h3 id="category-filter-title" className="text-sm font-bold text-ink">Категория</h3><div className="app-scrollbar mt-3 flex gap-2 overflow-x-auto px-0.5 pb-1">{placeCategories.map((item) => <Chip key={item.id} selected={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</Chip>)}</div></section>
        <section aria-labelledby="feature-filter-title"><h3 id="feature-filter-title" className="text-sm font-bold text-ink">Что важно учесть</h3><div className="app-scrollbar mt-3 flex gap-2 overflow-x-auto px-0.5 pb-1">{filterFeatures.map((item) => <Chip key={item.id} selected={feature === item.id} onClick={() => setFeature(feature === item.id ? "" : item.id as AccessibilityFeatureKey)}>{item.label}</Chip>)}</div></section>
        <div className="flex flex-wrap gap-3 border-t border-border pt-4"><Button variant="secondary" onClick={reset}>Сбросить</Button><Button className="flex-1" onClick={() => onApply({ category, feature })}>Применить</Button></div>
      </div>
    </BottomSheet>
  );
}

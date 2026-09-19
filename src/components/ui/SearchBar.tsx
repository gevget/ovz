import { Search, X } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { Input } from "@/components/ui/Input";

type SearchBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export function SearchBar({ value = "", onChange, placeholder = "Поиск", label = "Поиск" }: SearchBarProps) {
  return (
    <div className="relative flex items-center">
      <Search aria-hidden="true" className="pointer-events-none absolute left-4 h-5 w-5 text-muted" />
      <Input
        aria-label={label}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="pr-14 pl-12"
      />
      {value ? (
        <IconButton
          aria-label="Очистить поиск"
          className="absolute right-1.5 h-9 w-9 border-0 bg-transparent"
          onClick={() => onChange?.("")}
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </IconButton>
      ) : null}
    </div>
  );
}

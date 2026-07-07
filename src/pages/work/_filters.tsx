import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterType = "all" | "development" | "design" | "SaaS";
export type DisplayMode = "gallery" | "list";

interface WorkFiltersProps {
  activeType?: FilterType;
  onChangeType?: (type: FilterType) => void;
  activeDisplay?: DisplayMode;
  onChangeDisplay?: (display: DisplayMode) => void;
}

const FILTER_TYPES: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Development", value: "development" },
  { label: "Design", value: "design" },
  { label: "SaaS", value: "SaaS" },
];

export default function WorkFilters({
  activeType: propActiveType,
  onChangeType,
  activeDisplay: propActiveDisplay,
  onChangeDisplay,
}: WorkFiltersProps) {
  // Local state to support uncontrolled use cases
  const [localType, setLocalType] = useState<FilterType>("all");
  const [localDisplay, setLocalDisplay] = useState<DisplayMode>("gallery");

  const activeType = propActiveType !== undefined ? propActiveType : localType;
  const activeDisplay = propActiveDisplay !== undefined ? propActiveDisplay : localDisplay;

  const handleTypeChange = (type: FilterType) => {
    if (onChangeType) {
      onChangeType(type);
    } else {
      setLocalType(type);
    }
  };

  const handleDisplayChange = (display: DisplayMode) => {
    if (onChangeDisplay) {
      onChangeDisplay(display);
    } else {
      setLocalDisplay(display);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 md:p-4 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 w-full">
      {/* Filters by Type */}
      <div className="flex flex-wrap items-center gap-2">
        {FILTER_TYPES.map((type) => {
          const isActive = activeType === type.value;
          return (
            <button
              key={type.value}
              onClick={() => handleTypeChange(type.value)}
              className={cn(
                "cursor-pointer px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 select-none",
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.25)] font-semibold scale-102"
                  : "bg-secondary/20 hover:bg-secondary/40 text-foreground/80 hover:text-foreground border border-border/20"
              )}
            >
              {type.label}
            </button>
          );
        })}
      </div>

      {/* Display Mode Switcher */}
      <div className="flex items-center gap-1.5 bg-secondary/10 p-1.5 rounded-xl border border-border/25 self-end sm:self-auto">
        <button
          onClick={() => handleDisplayChange("gallery")}
          className={cn(
            "cursor-pointer p-2 rounded-lg transition-all duration-300 flex items-center justify-center select-none",
            activeDisplay === "gallery"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-foreground/60 hover:text-foreground hover:bg-secondary/35"
          )}
          title="Gallery View"
          aria-label="Gallery View"
        >
          <LayoutGrid className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={() => handleDisplayChange("list")}
          className={cn(
            "cursor-pointer p-2 rounded-lg transition-all duration-300 flex items-center justify-center select-none",
            activeDisplay === "list"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-foreground/60 hover:text-foreground hover:bg-secondary/35"
          )}
          title="List View"
          aria-label="List View"
        >
          <List className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
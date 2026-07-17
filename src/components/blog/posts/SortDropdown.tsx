"use client";

import {
  ArrowDownAZ,
  ArrowUpAZ,
  CalendarArrowDown,
  CalendarArrowUp,
  Clock3,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { SortType } from "@/hooks/usePosts";

interface SortDropdownProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

const options = [
  {
    value: "newest",
    label: "Newest",
    icon: CalendarArrowDown,
  },
  {
    value: "oldest",
    label: "Oldest",
    icon: CalendarArrowUp,
  },
  {
    value: "a-z",
    label: "Title (A-Z)",
    icon: ArrowDownAZ,
  },
  {
    value: "z-a",
    label: "Title (Z-A)",
    icon: ArrowUpAZ,
  },
  {
    value: "reading-time",
    label: "Reading Time",
    icon: Clock3,
  },
] as const;

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const selected =
    options.find((option) => option.value === value) ?? options[0];

  const SelectedIcon = selected.icon;

  return (
    <Select
      value={value}
      onValueChange={(value) => onChange(value as SortType)}
    >
      <SelectTrigger className="w-full sm:w-56 h-12! rounded-lg">
        <div className="flex items-center gap-2">
          <SelectedIcon className="h-4 w-4" />
          <span>{selected.label}</span>
        </div>
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => {
          const Icon = option.icon;

          return (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{option.label}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

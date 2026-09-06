import type React from "react";
import MapPin from "../assets/icons/MapPin.svg?react";
import { cn } from "../utils/cn";

type ChipTagProps = React.ComponentPropsWithoutRef<"div"> & {
  icon?: React.ElementType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  chipStyle?: "fill" | "minimal";
};

function ChipTag({ className, icon: Icon = MapPin, label = "Label", chipStyle = "fill" }: ChipTagProps) {
  return (
    <div
      className={cn(
        "inline-flex h-7 items-center justify-center gap-1.5 rounded-full px-m label-small select-none",
        {
          "bg-neutral-inverse-secondary text-neutral-inverse-primary": chipStyle === "fill",
          "text-neutral-disabled": chipStyle === "minimal"
        },
        className
      )}
    >
      <Icon className="size-3" />
      {label}
    </div>
  );
}
export default ChipTag;

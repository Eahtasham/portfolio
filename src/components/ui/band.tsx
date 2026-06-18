import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A full-width horizontal band. Its top border spans the entire viewport,
 * while the inner column is centered and carries the vertical side borders —
 * together they form the page-wide grid.
 */
export function Band({
  children,
  className,
  topBorder = true,
}: {
  children?: ReactNode;
  className?: string;
  topBorder?: boolean;
}) {
  return (
    <div className={cn("w-full", topBorder && "border-t border-border")}>
      <div
        className={cn(
          "mx-auto w-full max-w-2xl border-x border-border",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

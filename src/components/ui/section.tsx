import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Band } from "@/components/ui/band";

export function Section({
  id,
  title,
  action,
  flush = false,
  children,
  className,
}: {
  id: string;
  title: string;
  action?: ReactNode;
  /** render children as their own full-width bands (e.g. grid rows) */
  flush?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <Band className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl">{title}</h2>
        {action}
      </Band>
      {flush ? (
        <Band className={className}>{children}</Band>
      ) : (
        <Band className={cn("px-5 py-6 sm:px-7", className)}>{children}</Band>
      )}
    </section>
  );
}

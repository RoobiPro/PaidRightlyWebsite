import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  alternate?: boolean;
}

export function Section({ className, alternate, children, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 px-4",
        alternate && "bg-[var(--muted)]",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

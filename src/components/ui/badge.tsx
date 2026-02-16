import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/cn";

export default function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-700/70 bg-ink-900/40 px-3 py-1 text-xs font-medium text-ink-100",
        className
      )}
    >
      {children}
    </span>
  );
}

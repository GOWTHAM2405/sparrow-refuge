
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center justify-center my-16", className)}>
      <div className="h-px bg-sparrow-light-brown w-24"></div>
      <div className="mx-4 text-sparrow-brown">•</div>
      <div className="h-px bg-sparrow-light-brown w-24"></div>
    </div>
  );
}

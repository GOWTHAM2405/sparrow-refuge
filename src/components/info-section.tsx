
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export function InfoSection({
  title,
  subtitle,
  className,
  children,
  centered = false,
}: InfoSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "max-w-3xl",
          centered ? "mx-auto text-center" : "mb-12"
        )}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-700">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}

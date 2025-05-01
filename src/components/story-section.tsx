
import { cn } from "@/lib/utils";

interface StorySectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  reversed?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function StorySection({
  title,
  content,
  imageUrl,
  imageAlt,
  reversed = false,
  className,
  children,
}: StorySectionProps) {
  return (
    <div className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
          reversed ? "md:grid-flow-dense" : ""
        )}>
          <div className={cn(
            "flex flex-col justify-center",
            reversed ? "md:col-start-2" : ""
          )}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              {title}
            </h2>
            <div className="prose max-w-none">
              <p className="text-base md:text-lg text-gray-700 mb-6">
                {content}
              </p>
              {children}
            </div>
          </div>
          
          {imageUrl && (
            <div className={cn(
              "relative h-64 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg",
              reversed ? "md:col-start-1" : ""
            )}>
              <img
                src={imageUrl}
                alt={imageAlt || title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

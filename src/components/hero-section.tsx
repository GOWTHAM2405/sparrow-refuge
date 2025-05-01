
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  overlayColor?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl,
  imageAlt,
  className,
  overlayColor = "bg-black/30",
}: HeroSectionProps) {
  return (
    <div className={cn("relative h-[80vh] min-h-[600px] w-full overflow-hidden", className)}>
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className={cn("absolute inset-0", overlayColor)}></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-slow-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

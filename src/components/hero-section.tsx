
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  backgroundClass?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  className,
  backgroundClass = "bg-gradient-to-br from-sparrow-light-brown/30 to-sparrow-brown/40",
}: HeroSectionProps) {
  return (
    <div className={cn("relative min-h-[80vh] flex items-center justify-center w-full", backgroundClass, className)}>
      <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-sparrow-brown opacity-80 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 17c.9 0 1.7-.5 2-1.5.1-.6-.4-1.2-1-1.2h-2M12 17c.9 0 1.7-.5 2-1.5.1-.6-.4-1.2-1-1.2h-2" />
            <path d="M13 8c0-1 2-1 2-1 2 0 3 1.1 3 3 0 0 0 1-.5 2-1 2-3 3-3 3M3 8c0-1 2-1 2-1 2 0 3 1.1 3 3 0 0 0 1-.5 2-1 2-3 3-3 3" />
            <path d="M12 8v4M8 10v.01M16 10v.01" />
            <path d="m10 19-2 3h8l-2-3" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="bg-sparrow-brown hover:bg-sparrow-brown/90 text-white">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-4 h-4 rounded-full bg-sparrow-brown/20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/6 w-8 h-8 rounded-full bg-sparrow-brown/30 animate-pulse [animation-delay:1s]"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-sparrow-brown/20 animate-pulse [animation-delay:1.5s]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-sparrow-brown/10 animate-pulse [animation-delay:0.5s]"></div>
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function HeroSection({
  title = "Promoting Urban Sparrow Conservation",
  subtitle = "Dedicated to safeguarding house sparrows in cities.",
  ctaText = "Learn More",
  ctaLink = "#mission",
  className,
  imageUrl = "public/lovable-uploads/e3333151-69e8-4069-b686-69f334fa73d7.png",
  imageAlt = "Sparrow on a nest box",
}: HeroSectionProps) {
  return (
    <div className={cn("w-full flex flex-col md:flex-row min-h-[90vh]", className)}>
      {/* Left content area */}
      <div className="w-full md:w-1/2 bg-[#F8F5D6] flex items-center justify-center">
        <div className="max-w-xl px-8 md:px-16 py-16 md:py-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#4A4A35] leading-tight mb-6">
            {title}
          </h1>
          
          <p className="text-lg text-[#5A5A45] mb-8">
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <Button 
              asChild 
              size="lg" 
              className="bg-[#4A4A35] hover:bg-[#3A3A25] text-white px-8 py-6 h-auto text-base font-normal rounded-none"
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Right image area */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

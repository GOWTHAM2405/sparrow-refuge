
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  backgroundClass?: string;
  overlayColor?: string;
}

export function HeroSection({
  title = "Promoting Urban Sparrow Conservation",
  subtitle = "Dedicated to safeguarding house sparrows in cities.",
  ctaText = "Shop Now",
  ctaLink = "/shop",
  className,
  imageUrl = "/lovable-uploads/e3333151-69e8-4069-b686-69f334fa73d7.png",
  imageAlt = "Sparrow on a nest box",
  backgroundClass,
  overlayColor,
}: HeroSectionProps) {
  return (
    <div className={cn("w-full flex flex-col md:flex-row min-h-[90vh]", backgroundClass, className)}>
      {/* Left content area */}
      <div className="w-full md:w-1/2 bg-[#FEFAE0] flex items-center justify-center">
        <div className="max-w-xl px-8 md:px-16 py-16 md:py-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-[#283618] leading-tight mb-6 font-serif">
            {title}
          </h1>
          
          <p className="text-lg text-[#606C38] mb-8 font-serif">
            {subtitle}
          </p>
          
          {ctaText && ctaLink && (
            <Button 
              asChild 
              size="lg" 
              className="bg-[#606C38] hover:bg-[#283618] text-white px-8 py-6 h-auto text-base font-normal rounded-md"
            >
              <a href={ctaLink}><ShoppingBag className="mr-2" size={18} />{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Right image area */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <div className={cn("absolute inset-0", overlayColor)}></div>
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

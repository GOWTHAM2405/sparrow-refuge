
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductHighlightProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export function ProductHighlight({
  title,
  description,
  features,
  imageUrl,
  imageAlt,
  ctaText = "Adopt Sparrows",
  ctaLink,
  className,
}: ProductHighlightProps) {
  return (
    <div className={cn("bg-sparrow-gray py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {description}
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-sparrow-brown">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            {ctaText && ctaLink && (
              <Button asChild className="bg-sparrow-brown hover:bg-sparrow-brown/90 text-white">
                <a href={ctaLink}><ShoppingBag className="mr-2" size={18} />{ctaText}</a>
              </Button>
            )}
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

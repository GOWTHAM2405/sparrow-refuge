
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bird, Leaf, Cloud, Wind } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  backgroundClass?: string;
  imageUrl?: string;
  imageAlt?: string;
  overlayColor?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  className,
  backgroundClass = "bg-gradient-to-br from-amber-50 to-amber-100",
  imageUrl,
  imageAlt,
  overlayColor,
}: HeroSectionProps) {
  // If imageUrl is provided, use it as background image
  const backgroundStyle = imageUrl 
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};
  
  const [animateIcons, setAnimateIcons] = useState(false);
  
  // Start animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIcons(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <div 
      className={cn(
        "relative min-h-[85vh] flex items-center justify-center w-full overflow-hidden", 
        backgroundClass, 
        className
      )}
      style={backgroundStyle}
    >
      {/* Overlay if overlayColor is provided */}
      {overlayColor && (
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      )}
      
      {/* Animated Nature Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Leaves */}
        <Leaf 
          className={`absolute text-green-500/40 transition-all duration-[3000ms] ${animateIcons ? 'translate-y-[-20vh]' : 'opacity-0'}`} 
          size={28} 
          style={{ left: '15%', top: '110%' }} 
        />
        <Leaf 
          className={`absolute text-green-600/30 transition-all duration-[5000ms] delay-500 ${animateIcons ? 'translate-y-[-30vh]' : 'opacity-0'}`} 
          size={20} 
          style={{ left: '25%', top: '110%' }} 
        />
        <Leaf 
          className={`absolute text-green-400/40 transition-all duration-[7000ms] delay-1000 ${animateIcons ? 'translate-y-[-25vh]' : 'opacity-0'}`} 
          size={24} 
          style={{ left: '75%', top: '110%' }} 
        />
        
        {/* Floating Birds */}
        <Bird 
          className={`absolute text-amber-700/50 transition-all duration-[15000ms] ${animateIcons ? 'translate-x-[40vw]' : 'opacity-0'}`} 
          size={18} 
          style={{ left: '-5%', top: '30%' }} 
        />
        <Bird 
          className={`absolute text-amber-800/40 transition-all duration-[25000ms] delay-2000 ${animateIcons ? 'translate-x-[50vw]' : 'opacity-0'}`} 
          size={14} 
          style={{ left: '-5%', top: '20%' }} 
        />
        <Bird 
          className={`absolute text-amber-900/30 transition-all duration-[20000ms] delay-3000 ${animateIcons ? 'translate-x-[60vw]' : 'opacity-0'}`} 
          size={16} 
          style={{ left: '-5%', top: '25%' }} 
        />
        
        {/* Clouds */}
        <Cloud 
          className={`absolute text-gray-100/60 transition-all duration-[40000ms] ${animateIcons ? 'translate-x-[90vw]' : 'opacity-0'}`} 
          size={80} 
          style={{ left: '-10%', top: '15%' }} 
        />
        <Cloud 
          className={`absolute text-white/50 transition-all duration-[50000ms] delay-2000 ${animateIcons ? 'translate-x-[80vw]' : 'opacity-0'}`} 
          size={120} 
          style={{ left: '-15%', top: '10%' }} 
        />
        
        {/* Wind */}
        <Wind 
          className="absolute text-blue-100/30 right-[5%] top-[40%]"
          size={60} 
        />
        <Wind 
          className="absolute text-blue-100/20 right-[10%] bottom-[30%]"
          size={40} 
        />
      </div>
      
      {/* Content */}
      <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fade-in relative z-10">
        <div className="mb-6">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-sparrow-brown mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 17c.9 0 1.7-.5 2-1.5.1-.6-.4-1.2-1-1.2h-2M12 17c.9 0 1.7-.5 2-1.5.1-.6-.4-1.2-1-1.2h-2" />
              <path d="M13 8c0-1 2-1 2-1 2 0 3 1.1 3 3 0 0 0 1-.5 2-1 2-3 3-3 3M3 8c0-1 2-1 2-1 2 0 3 1.1 3 3 0 0 0 1-.5 2-1 2-3 3-3 3" />
              <path d="M12 8v4M8 10v.01M16 10v.01" />
              <path d="m10 19-2 3h8l-2-3" />
            </svg>
            <div className="absolute w-40 h-40 bg-amber-200/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6 drop-shadow-sm">
          {title}
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="bg-sparrow-brown hover:bg-sparrow-brown/90 text-white shadow-md transition-all duration-300 hover:scale-105">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        )}
      </div>
      
      {/* Nature-inspired decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-[-10px] left-[10%] w-20 h-20 bg-green-800/10 rounded-full filter blur-xl"></div>
      <div className="absolute bottom-[-5px] right-[15%] w-16 h-16 bg-amber-700/10 rounded-full filter blur-xl"></div>
      <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-blue-300/10 rounded-full filter blur-xl"></div>
      <div className="absolute top-[30%] left-[5%] w-32 h-32 bg-amber-200/10 rounded-full filter blur-xl"></div>
    </div>
  );
}

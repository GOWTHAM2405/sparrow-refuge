
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bird, Leaf, Cloud, Wind, TreeDeciduous } from "lucide-react";
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
  // Default calming forest background if no custom imageUrl is provided
  const defaultForestImage = "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";
  
  // If imageUrl is provided, use it as background image, otherwise use the default forest image
  const backgroundStyle = { 
    backgroundImage: `url(${imageUrl || defaultForestImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' 
  };
  
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
        "relative min-h-[90vh] flex items-center justify-center w-full overflow-hidden", 
        className
      )}
      style={backgroundStyle}
    >
      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 ${overlayColor || 'bg-black/30'}`}></div>
      
      {/* Animated Nature Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Leaves */}
        <Leaf 
          className={`absolute text-green-500/60 transition-all duration-[3000ms] ${animateIcons ? 'translate-y-[-20vh]' : 'opacity-0'}`} 
          size={28} 
          style={{ left: '15%', top: '110%' }} 
        />
        <Leaf 
          className={`absolute text-green-600/50 transition-all duration-[5000ms] delay-500 ${animateIcons ? 'translate-y-[-30vh]' : 'opacity-0'}`} 
          size={20} 
          style={{ left: '25%', top: '110%' }} 
        />
        <Leaf 
          className={`absolute text-green-400/60 transition-all duration-[7000ms] delay-1000 ${animateIcons ? 'translate-y-[-25vh]' : 'opacity-0'}`} 
          size={24} 
          style={{ left: '75%', top: '110%' }} 
        />
        
        {/* Trees in background */}
        <TreeDeciduous
          className="absolute text-green-800/30 left-[5%] bottom-[5%]"
          size={120}
        />
        <TreeDeciduous
          className="absolute text-green-700/20 right-[8%] bottom-[3%]"
          size={90}
        />
        
        {/* Floating Birds */}
        <Bird 
          className={`absolute text-white/70 transition-all duration-[15000ms] ${animateIcons ? 'translate-x-[40vw]' : 'opacity-0'}`} 
          size={18} 
          style={{ left: '-5%', top: '30%' }} 
        />
        <Bird 
          className={`absolute text-white/60 transition-all duration-[25000ms] delay-2000 ${animateIcons ? 'translate-x-[50vw]' : 'opacity-0'}`} 
          size={14} 
          style={{ left: '-5%', top: '20%' }} 
        />
        <Bird 
          className={`absolute text-white/50 transition-all duration-[20000ms] delay-3000 ${animateIcons ? 'translate-x-[60vw]' : 'opacity-0'}`} 
          size={16} 
          style={{ left: '-5%', top: '25%' }} 
        />
        
        {/* Clouds */}
        <Cloud 
          className={`absolute text-white/50 transition-all duration-[40000ms] ${animateIcons ? 'translate-x-[90vw]' : 'opacity-0'}`} 
          size={80} 
          style={{ left: '-10%', top: '15%' }} 
        />
        <Cloud 
          className={`absolute text-white/40 transition-all duration-[50000ms] delay-2000 ${animateIcons ? 'translate-x-[80vw]' : 'opacity-0'}`} 
          size={120} 
          style={{ left: '-15%', top: '10%' }} 
        />
        
        {/* Wind */}
        <Wind 
          className="absolute text-white/30 right-[5%] top-[40%]"
          size={60} 
        />
        <Wind 
          className="absolute text-white/20 right-[10%] bottom-[30%]"
          size={40} 
        />
      </div>
      
      {/* Content */}
      <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fade-in relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 drop-shadow-md">
          {title}
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="bg-sparrow-brown hover:bg-sparrow-brown/90 text-white shadow-md transition-all duration-300 hover:scale-105">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        )}
      </div>
      
      {/* Nature-inspired decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-[-10px] left-[10%] w-20 h-20 bg-green-800/30 rounded-full filter blur-xl"></div>
      <div className="absolute bottom-[-5px] right-[15%] w-16 h-16 bg-amber-700/20 rounded-full filter blur-xl"></div>
      <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-blue-300/20 rounded-full filter blur-xl"></div>
      <div className="absolute top-[30%] left-[5%] w-32 h-32 bg-amber-200/20 rounded-full filter blur-xl"></div>
    </div>
  );
}

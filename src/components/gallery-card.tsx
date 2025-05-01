
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  imageUrl: string;
  caption: string;
  className?: string;
  onClick?: () => void;
}

export function GalleryCard({
  imageUrl,
  caption,
  className,
  onClick,
}: GalleryCardProps) {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-lg cursor-pointer group relative", 
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white font-sans text-sm font-medium">{caption}</p>
      </div>
    </div>
  );
}

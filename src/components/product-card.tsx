import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  className?: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  description,
  imageUrl,
  className,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-orange-500 font-semibold">Coming Soon</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 font-serif">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-sparrow-brown/50 cursor-not-allowed"
          disabled
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

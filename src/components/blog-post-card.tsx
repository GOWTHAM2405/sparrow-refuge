
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { formatDistanceToNow } from "date-fns";

interface BlogPostCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  className?: string;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  imageUrl,
  className,
}: BlogPostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 font-serif line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-sparrow-brown text-sparrow-brown hover:bg-sparrow-brown/10">
          <Link to={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

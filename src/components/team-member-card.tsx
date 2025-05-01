
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  imageUrl,
  className,
}: TeamMemberCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-sparrow-brown font-medium">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 font-serif">{bio}</p>
      </CardContent>
    </Card>
  );
}

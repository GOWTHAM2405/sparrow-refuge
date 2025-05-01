
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 transition-all duration-300 border border-gray-100 hover:shadow-md",
      className
    )}>
      {icon && (
        <div className="mb-4 text-sparrow-brown">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

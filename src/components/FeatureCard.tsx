import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  isPremium?: boolean;
}

export const FeatureCard = ({ title, description, icon: Icon, onClick, isPremium = false }: FeatureCardProps) => {
  return (
    <Card 
      className={`
        relative p-6 cursor-pointer transition-all duration-300
        hover:shadow-card hover:-translate-y-1 
        bg-gradient-card backdrop-blur-sm border-border/50
        ${isPremium ? 'opacity-60' : ''}
      `}
      onClick={onClick}
    >
      {isPremium && (
        <div className="absolute top-3 right-3 bg-gradient-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
          Premium
        </div>
      )}
      
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};
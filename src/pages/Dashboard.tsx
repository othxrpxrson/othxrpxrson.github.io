import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { Header } from "@/components/Header";
import { 
  BookOpen, 
  MapPin, 
  GraduationCap, 
  Star, 
  MessageCircle, 
  Calendar,
  Brain,
  Gift
} from "lucide-react";

export const Dashboard = () => {
  const [userPoints] = useState(125);

  const features = [
    {
      title: "Material & Kit Lending",
      description: "Borrow calculators, lab equipment, cables, and study materials from the university library",
      icon: BookOpen,
      isPremium: false,
      action: () => console.log("Navigate to lending")
    },
    {
      title: "Campus Resources",
      description: "Find libraries, labs, writing centers, and other campus facilities with hours and locations",
      icon: MapPin,
      isPremium: false,
      action: () => console.log("Navigate to resources")
    },
    {
      title: "Scholarship Directory",
      description: "Browse available scholarships and funding opportunities with application links",
      icon: GraduationCap,
      isPremium: false,
      action: () => console.log("Navigate to scholarships")
    },
    {
      title: "Points & Rewards",
      description: "Track your points earned from app activities and see available rewards",
      icon: Star,
      isPremium: false,
      action: () => console.log("Navigate to points")
    },
    {
      title: "Campus Assistant",
      description: "Get answers to common questions about campus services and resources",
      icon: MessageCircle,
      isPremium: false,
      action: () => console.log("Navigate to chatbot")
    },
    {
      title: "AI Study Planner",
      description: "Smart scheduling and time management with AI-powered suggestions",
      icon: Calendar,
      isPremium: true,
      action: () => console.log("Premium feature")
    },
    {
      title: "Subject Tutors",
      description: "AI-powered tutoring chatbots for personalized academic support",
      icon: Brain,
      isPremium: true,
      action: () => console.log("Premium feature")
    },
    {
      title: "Premium Rewards",
      description: "Redeem points for coffee discounts, university merchandise, and more",
      icon: Gift,
      isPremium: true,
      action: () => console.log("Premium feature")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={userPoints} />
      
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex!</h2>
          <p className="text-muted-foreground">What would you like to do today?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              onClick={feature.action}
              isPremium={feature.isPremium}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-primary rounded-2xl text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ready for more?</h3>
              <p className="text-primary-foreground/80">
                Upgrade to Premium for AI tutoring, advanced planning, and exclusive rewards
              </p>
            </div>
            <div className="animate-float">
              <GraduationCap className="h-16 w-16 text-primary-foreground/30" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Star, Trophy, Gift, CheckCircle, Lock } from "lucide-react";

interface Activity {
  id: string;
  name: string;
  points: number;
  completed: boolean;
  description: string;
}

interface Reward {
  id: string;
  name: string;
  cost: number;
  description: string;
  available: boolean;
  isPremium: boolean;
}

export const Points = () => {
  const currentPoints = 125;
  const nextMilestone = 200;
  
  const activities: Activity[] = [
    {
      id: "1",
      name: "Complete Profile",
      points: 25,
      completed: true,
      description: "Fill out your complete student profile"
    },
    {
      id: "2",
      name: "First Resource Booking",
      points: 15,
      completed: true,
      description: "Successfully book your first library resource"
    },
    {
      id: "3",
      name: "Browse Scholarships",
      points: 10,
      completed: true,
      description: "View at least 3 scholarship opportunities"
    },
    {
      id: "4",
      name: "Use Campus Assistant",
      points: 10,
      completed: false,
      description: "Ask a question to the campus chatbot"
    },
    {
      id: "5",
      name: "Weekly Active User",
      points: 20,
      completed: false,
      description: "Use the app for 5 consecutive days"
    },
    {
      id: "6",
      name: "Refer a Friend",
      points: 50,
      completed: false,
      description: "Invite a friend to join EduHub Connect"
    }
  ];

  const rewards: Reward[] = [
    {
      id: "1",
      name: "Digital Badge",
      cost: 50,
      description: "Show off your EduHub achievements",
      available: true,
      isPremium: false
    },
    {
      id: "2",
      name: "Priority Booking",
      cost: 100,
      description: "Get priority access to popular resources",
      available: true,
      isPremium: false
    },
    {
      id: "3",
      name: "Coffee Discount",
      cost: 150,
      description: "10% off at campus coffee shops",
      available: false,
      isPremium: true
    },
    {
      id: "4",
      name: "University Merch",
      cost: 300,
      description: "Official university branded items",
      available: false,
      isPremium: true
    },
    {
      id: "5",
      name: "Study Room Credits",
      cost: 200,
      description: "Extended study room reservations",
      available: false,
      isPremium: true
    }
  ];

  const progressPercentage = (currentPoints / nextMilestone) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={currentPoints} />
      
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Points & Rewards</h2>
            <p className="text-muted-foreground">Earn points and unlock exciting rewards</p>
          </div>
        </div>

        {/* Points Overview */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-xl mr-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">{currentPoints} Points</h3>
                <p className="text-muted-foreground">Your current balance</p>
              </div>
            </div>
            <Trophy className="h-12 w-12 text-primary/30 animate-pulse-slow" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to next milestone</span>
              <span>{currentPoints}/{nextMilestone} points</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Earn Points */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Earn More Points</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {activity.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <div>
                        <h4 className="font-medium text-card-foreground">{activity.name}</h4>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                    <Badge variant={activity.completed ? "default" : "secondary"}>
                      +{activity.points} pts
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Redeem Rewards */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Available Rewards</h3>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <Card key={reward.id} className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {reward.isPremium ? (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Gift className="h-5 w-5 text-primary" />
                      )}
                      <div>
                        <h4 className="font-medium text-card-foreground flex items-center">
                          {reward.name}
                          {reward.isPremium && (
                            <Badge variant="outline" className="ml-2 text-xs">Premium</Badge>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">{reward.cost} pts</div>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full"
                    disabled={!reward.available || currentPoints < reward.cost}
                    variant={reward.available && currentPoints >= reward.cost ? "default" : "secondary"}
                  >
                    {!reward.available && reward.isPremium ? "Premium Only" : 
                     currentPoints < reward.cost ? "Not Enough Points" : "Redeem"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Rewards Upgrade */}
        <div className="mt-12 p-6 bg-gradient-primary rounded-2xl text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Unlock Premium Rewards</h3>
              <p className="text-primary-foreground/80">
                Upgrade to access exclusive rewards like coffee discounts and university merchandise
              </p>
            </div>
            <div className="animate-float">
              <Gift className="h-16 w-16 text-primary-foreground/30" />
            </div>
          </div>
          <Button className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Upgrade to Premium
          </Button>
        </div>
      </main>
    </div>
  );
};
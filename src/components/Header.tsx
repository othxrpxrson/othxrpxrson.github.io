import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  userName?: string;
  points?: number;
}

export const Header = ({ userName = "Student", points = 0 }: HeaderProps) => {
  return (
    <header className="w-full bg-gradient-primary text-primary-foreground px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold">EduHub Connect</h1>
          <p className="text-primary-foreground/80 text-sm">Your university hub</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium">{points} Points</p>
            <p className="text-xs text-primary-foreground/70">Available</p>
          </div>
          
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Avatar className="h-8 w-8 border-2 border-primary-foreground/20">
            <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
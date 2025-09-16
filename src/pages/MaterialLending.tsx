import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, Calendar, CheckCircle } from "lucide-react";

interface LendingItem {
  id: string;
  name: string;
  category: string;
  available: boolean;
  location: string;
  description: string;
}

export const MaterialLending = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const items: LendingItem[] = [
    {
      id: "1",
      name: "Scientific Calculator (TI-84)",
      category: "Calculator",
      available: true,
      location: "Main Library - Tech Desk",
      description: "Graphing calculator perfect for advanced math and science courses"
    },
    {
      id: "2", 
      name: "USB-C to HDMI Cable",
      category: "Cable",
      available: true,
      location: "Engineering Library",
      description: "4K compatible cable for presentations and external displays"
    },
    {
      id: "3",
      name: "Chemistry Lab Kit",
      category: "Lab Equipment",
      available: false,
      location: "Science Building",
      description: "Complete kit with beakers, test tubes, and safety equipment"
    },
    {
      id: "4",
      name: "Laptop Charger (MacBook)",
      category: "Charger",
      available: true,
      location: "Main Library - Tech Desk", 
      description: "60W USB-C charger compatible with MacBook Air and Pro"
    },
    {
      id: "5",
      name: "Microscope Slides Set",
      category: "Lab Equipment",
      available: true,
      location: "Biology Lab",
      description: "Pre-prepared slides for biology and life science studies"
    }
  ];

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={125} />
      
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Material & Kit Lending</h2>
            <p className="text-muted-foreground">Borrow equipment and materials for your studies</p>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for calculators, cables, lab equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant={item.available ? "default" : "secondary"} className="mb-2">
                  {item.category}
                </Badge>
                {item.available ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full bg-red-100 border-2 border-red-300" />
                )}
              </div>
              
              <h3 className="font-semibold text-card-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <span className="font-medium">Location:</span> {item.location}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Status:</span>{" "}
                  <span className={item.available ? "text-green-600" : "text-red-600"}>
                    {item.available ? "Available" : "On Loan"}
                  </span>
                </p>
              </div>
              
              <Button 
                className="w-full"
                disabled={!item.available}
                variant={item.available ? "default" : "secondary"}
              >
                {item.available ? (
                  <>
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Item
                  </>
                ) : (
                  "Currently Unavailable"
                )}
              </Button>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            <p className="text-muted-foreground">Try searching for calculators, cables, or lab equipment.</p>
          </div>
        )}
      </main>
    </div>
  );
};
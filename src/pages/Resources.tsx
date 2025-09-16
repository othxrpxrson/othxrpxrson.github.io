import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, ExternalLink } from "lucide-react";

interface Resource {
  id: string;
  name: string;
  category: string;
  location: string;
  hours: string;
  phone?: string;
  description: string;
  services: string[];
}

export const Resources = () => {
  const navigate = useNavigate();
  const resources: Resource[] = [
    {
      id: "1",
      name: "Main Library",
      category: "Library",
      location: "Central Campus, Building A",
      hours: "Mon-Thu: 7AM-11PM, Fri: 7AM-9PM, Sat-Sun: 9AM-9PM",
      phone: "(555) 123-4567",
      description: "Primary library with extensive collections, study spaces, and research support",
      services: ["Books & Journals", "Study Rooms", "Computer Lab", "Research Help", "Printing"]
    },
    {
      id: "2",
      name: "Writing Center",
      category: "Academic Support",
      location: "Student Success Center, Room 205",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      phone: "(555) 123-4568",
      description: "Free tutoring and support for all writing assignments and projects",
      services: ["Writing Tutoring", "Citation Help", "Grammar Review", "Essay Planning"]
    },
    {
      id: "3",
      name: "Engineering Lab",
      category: "Laboratory",
      location: "Engineering Building, Floor 2",
      hours: "Mon-Fri: 8AM-8PM, Weekends: Closed",
      phone: "(555) 123-4569",
      description: "State-of-the-art engineering facilities for hands-on learning",
      services: ["3D Printing", "Electronics Lab", "CAD Computers", "Project Workspace"]
    },
    {
      id: "4",
      name: "Student Health Center",
      category: "Health & Wellness",
      location: "Campus Center, Ground Floor",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
      phone: "(555) 123-4570",
      description: "Comprehensive healthcare services for students",
      services: ["Medical Care", "Mental Health", "Pharmacy", "Health Education"]
    },
    {
      id: "5",
      name: "Career Services",
      category: "Career Support",
      location: "Administration Building, Room 150",
      hours: "Mon-Fri: 9AM-5PM",
      phone: "(555) 123-4571",
      description: "Career guidance, internship placement, and job search support",
      services: ["Resume Review", "Interview Prep", "Job Board", "Career Counseling"]
    },
    {
      id: "6",
      name: "IT Help Desk",
      category: "Technology",
      location: "Library, Ground Floor",
      hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 12PM-6PM",
      phone: "(555) 123-4572",
      description: "Technical support for students and university systems",
      services: ["Computer Repair", "Software Help", "Network Access", "Account Support"]
    }
  ];

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={125} />
      
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-3" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Campus Resources</h2>
            <p className="text-muted-foreground">Find essential campus services and facilities</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary">{resource.category}</Badge>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              
              <h3 className="font-semibold text-card-foreground mb-2 text-lg">{resource.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{resource.location}</span>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{resource.hours}</span>
                </div>
                
                {resource.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{resource.phone}</span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Services:</h4>
                <div className="flex flex-wrap gap-1">
                  {resource.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};
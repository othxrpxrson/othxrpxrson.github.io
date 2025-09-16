import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, DollarSign, Calendar, Users } from "lucide-react";

interface Scholarship {
  id: string;
  name: string;
  amount: string;
  deadline: string;
  eligibility: string;
  description: string;
  provider: string;
  link: string;
  category: string;
}

export const Scholarships = () => {
  const navigate = useNavigate();
  const scholarships: Scholarship[] = [
    {
      id: "1",
      name: "Academic Excellence Scholarship",
      amount: "$2,500",
      deadline: "March 15, 2024",
      eligibility: "GPA 3.5+, Full-time students",
      description: "Merit-based scholarship for students demonstrating outstanding academic performance",
      provider: "University Foundation",
      link: "https://university.edu/scholarships/academic-excellence",
      category: "Academic"
    },
    {
      id: "2",
      name: "STEM Research Grant",
      amount: "$5,000",
      deadline: "April 1, 2024",
      eligibility: "STEM majors, Research project required",
      description: "Funding for undergraduate research projects in science, technology, engineering, and mathematics",
      provider: "National Science Foundation",
      link: "https://nsf.gov/undergraduate-research",
      category: "Research"
    },
    {
      id: "3",
      name: "Community Service Award",
      amount: "$1,000",
      deadline: "February 28, 2024",
      eligibility: "50+ volunteer hours, Any major",
      description: "Recognizes students who have made significant contributions to their community",
      provider: "Student Affairs Office",
      link: "https://university.edu/student-life/community-service-award",
      category: "Service"
    },
    {
      id: "4",
      name: "First-Generation College Grant",
      amount: "$3,000",
      deadline: "May 15, 2024",
      eligibility: "First-generation college students",
      description: "Support for students whose parents did not complete a four-year college degree",
      provider: "Educational Opportunity Fund",
      link: "https://eof.university.edu/first-gen-grant",
      category: "Need-Based"
    },
    {
      id: "5",
      name: "International Student Scholarship",
      amount: "$2,000",
      deadline: "March 30, 2024",
      eligibility: "International students, F-1 visa",
      description: "Financial assistance for international students pursuing undergraduate degrees",
      provider: "International Student Services",
      link: "https://university.edu/international/scholarships",
      category: "International"
    },
    {
      id: "6",
      name: "Engineering Innovation Prize",
      amount: "$4,000",
      deadline: "April 15, 2024",
      eligibility: "Engineering majors, Project submission",
      description: "Awards innovative engineering projects that address real-world problems",
      provider: "College of Engineering",
      link: "https://engineering.university.edu/innovation-prize",
      category: "Academic"
    }
  ];

  const categories = [...new Set(scholarships.map(s => s.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={125} />
      
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-3" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Scholarship Directory</h2>
            <p className="text-muted-foreground">Discover funding opportunities for your education</p>
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
          {scholarships.map((scholarship) => (
            <Card key={scholarship.id} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary">{scholarship.category}</Badge>
                <div className="flex items-center text-green-600 font-semibold">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {scholarship.amount}
                </div>
              </div>
              
              <h3 className="font-semibold text-card-foreground mb-2 text-lg">{scholarship.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">Deadline: </span>
                    <span className="text-sm">{scholarship.deadline}</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">Eligibility: </span>
                    <span className="text-sm">{scholarship.eligibility}</span>
                  </div>
                </div>
                
                <div className="text-sm">
                  <span className="font-medium">Provider: </span>
                  <span className="text-muted-foreground">{scholarship.provider}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => window.open(scholarship.link, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-primary rounded-2xl text-primary-foreground">
          <h3 className="text-xl font-semibold mb-2">Need help with applications?</h3>
          <p className="text-primary-foreground/80 mb-4">
            Visit the Financial Aid Office for personalized guidance on scholarship applications and deadlines.
          </p>
          <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Contact Financial Aid
          </Button>
        </div>
      </main>
    </div>
  );
};
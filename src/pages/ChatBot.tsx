import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, MessageCircle, Clock, MapPin, Phone } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Campus Assistant. I can help you with information about campus resources, hours, locations, and frequently asked questions. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    "Where is the library?",
    "What are the writing center hours?",
    "How do I contact IT support?",
    "Where can I find scholarships?",
    "How do I book study rooms?",
    "What resources are available for tutoring?"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("library") && msg.includes("where")) {
      return "📍 The Main Library is located in Central Campus, Building A. It's open Monday-Thursday: 7AM-11PM, Friday: 7AM-9PM, and weekends: 9AM-9PM. You can reach them at (555) 123-4567.";
    }
    
    if (msg.includes("writing center") && msg.includes("hours")) {
      return "🕒 The Writing Center is open Monday-Friday: 9AM-6PM and Saturday: 10AM-4PM. It's located in the Student Success Center, Room 205. They offer free tutoring for all writing assignments!";
    }
    
    if (msg.includes("it support") || msg.includes("computer")) {
      return "💻 The IT Help Desk is located on the ground floor of the library. Hours: Monday-Friday 8AM-8PM, weekends 12PM-6PM. Call (555) 123-4572 for immediate support.";
    }
    
    if (msg.includes("scholarship")) {
      return "💰 You can find scholarships in the EduHub Connect app under 'Scholarship Directory'! We have listings for academic, research, service-based, and need-based scholarships with application links.";
    }
    
    if (msg.includes("study room")) {
      return "📚 Study rooms can be booked through the library's website or by visiting the main desk. Private rooms are available for 2-hour blocks, and group rooms accommodate 4-8 people.";
    }
    
    if (msg.includes("tutoring")) {
      return "🎓 Free tutoring is available at the Writing Center and Math Help Center. For subject-specific tutoring, check with your department office or consider upgrading to EduHub Connect Premium for AI-powered tutors!";
    }
    
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! I'm here to help you navigate campus resources. You can ask me about locations, hours, contact information, or services. What would you like to know?";
    }
    
    return "I'm not sure about that specific question, but I can help you with information about campus resources, hours, locations, and services. Try asking about the library, writing center, IT support, scholarships, or tutoring services!";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Alex" points={125} />
      
      <main className="px-6 py-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" className="mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Campus Assistant</h2>
            <p className="text-muted-foreground">Get answers to your campus questions</p>
          </div>
        </div>

        {/* Quick Questions */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold text-card-foreground mb-3">Quick Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </Card>

        {/* Chat Messages */}
        <Card className="h-96 mb-4 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center mb-1">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium">Campus Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1 opacity-60" />
                    <span className="text-xs opacity-60">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about campus resources, hours, locations..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(inputMessage);
                  }
                }}
                className="flex-1"
              />
              <Button 
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Help Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Locations</h4>
            <p className="text-sm text-muted-foreground">Find campus buildings and services</p>
          </Card>
          
          <Card className="p-4 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Hours</h4>
            <p className="text-sm text-muted-foreground">Check operating hours for services</p>
          </Card>
          
          <Card className="p-4 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Contact Info</h4>
            <p className="text-sm text-muted-foreground">Get phone numbers and emails</p>
          </Card>
        </div>

        {/* Premium Upgrade */}
        <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-primary-foreground">
          <h3 className="text-xl font-semibold mb-2">Want personalized help?</h3>
          <p className="text-primary-foreground/80 mb-4">
            Upgrade to Premium for AI-powered subject tutors and personalized academic assistance
          </p>
          <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Upgrade to Premium
          </Button>
        </div>
      </main>
    </div>
  );
};
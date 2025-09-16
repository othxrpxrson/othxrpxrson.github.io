import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { MaterialLending } from "./pages/MaterialLending";
import { Resources } from "./pages/Resources";
import { Scholarships } from "./pages/Scholarships";
import { Points } from "./pages/Points";
import { ChatBot } from "./pages/ChatBot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lending" element={<MaterialLending />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/points" element={<Points />} />
          <Route path="/assistant" element={<ChatBot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

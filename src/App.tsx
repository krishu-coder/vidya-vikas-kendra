
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseView from "./pages/CourseView";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

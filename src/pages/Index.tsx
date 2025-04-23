
import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import FeaturesSection from '../components/FeaturesSection';
import CourseSection from '../components/CourseSection';
import DashboardPreview from '../components/DashboardPreview';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroBanner />
          <FeaturesSection />
          <CourseSection />
          <DashboardPreview />
          <TestimonialSection />
          <CallToActionSection />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;


import React from 'react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gujarat-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Skill Development Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of Gujarati citizens who are enhancing their skills, improving their employability, 
            and contributing to the development of our state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gujarat-blue hover:bg-gray-100 text-lg px-8 py-6">
              Register Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

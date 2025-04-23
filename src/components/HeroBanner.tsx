
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, BarChart3 } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="hero-pattern py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-gujarat-saffron/10 px-4 py-2 rounded-full">
              <span className="text-gujarat-blue font-medium">Gujarat Government Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gujarat-navy leading-tight">
              Empower Your Future with <span className="text-gujarat-blue">Skill-Based Learning</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Enhance your employability, access modern education, and track your progress with Gujarat's premier learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gujarat-blue hover:bg-gujarat-lightBlue text-white text-lg px-8 py-6">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-gujarat-blue">200+</p>
                <p className="text-sm text-gray-600 text-center">Skill Courses</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-gujarat-blue">50k+</p>
                <p className="text-sm text-gray-600 text-center">Students</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-gujarat-blue">95%</p>
                <p className="text-sm text-gray-600 text-center">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden border-8 border-white">
              <img 
                src="/assets/student-learning.jpg" 
                alt="Students learning on digital platform"
                className="w-full h-auto rounded-lg" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";
                }}
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="bg-gujarat-blue/10 p-2 rounded-full">
                  <Award className="h-6 w-6 text-gujarat-blue" />
                </div>
                <div>
                  <p className="font-semibold text-gujarat-navy">Certified</p>
                  <p className="text-sm text-gray-600">Government Recognized</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-float animation-delay-200">
              <div className="flex items-center space-x-2">
                <div className="bg-gujarat-saffron/10 p-2 rounded-full">
                  <BarChart3 className="h-6 w-6 text-gujarat-saffron" />
                </div>
                <div>
                  <p className="font-semibold text-gujarat-navy">Track Progress</p>
                  <p className="text-sm text-gray-600">Detailed Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gujarat-blue/5 rounded-full"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gujarat-saffron/5 rounded-full"></div>
    </div>
  );
};

export default HeroBanner;

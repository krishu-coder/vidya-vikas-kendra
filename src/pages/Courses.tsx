import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import CourseFilters from '../components/courses/CourseFilters';
import CourseGrid from '../components/courses/CourseGrid';
import CoursePagination from '../components/courses/CoursePagination';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build responsive websites",
      duration: "8 weeks",
      level: "Beginner",
      students: 1240,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Financial Accounting",
      description: "Master the fundamentals of accounting and financial statements",
      duration: "10 weeks",
      level: "Intermediate",
      students: 950,
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Digital Marketing Essentials",
      description: "Learn SEO, social media marketing, and content strategy",
      duration: "6 weeks",
      level: "Beginner",
      students: 1540,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Machine Learning for Beginners",
      description: "Introduction to machine learning algorithms and applications",
      duration: "12 weeks",
      level: "Advanced",
      students: 780,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1535378273068-9bb67d5bb299?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Entrepreneurship Basics",
      description: "Learn to build a business plan and launch your startup",
      duration: "8 weeks",
      level: "Intermediate",
      students: 1120,
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Gujarati Language for Beginners",
      description: "Learn to speak, read, and write in Gujarati",
      duration: "12 weeks",
      level: "Beginner",
      students: 850,
      category: "Language",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All Categories", "Technology", "Finance", "Marketing", "Business", "Language"];
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <div className="bg-gujarat-blue py-16">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Discover a wide range of skill development courses designed to enhance your career prospects and knowledge
              </p>
              <div className="max-w-2xl mx-auto flex items-center bg-white rounded-lg overflow-hidden">
                <Input 
                  type="text" 
                  placeholder="Search for courses..." 
                  className="flex-grow border-0 focus-visible:ring-0"
                />
                <Button className="rounded-l-none bg-gujarat-saffron hover:bg-gujarat-orange">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 shrink-0">
                <CourseFilters categories={categories} levels={levels} />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">Showing {courses.length} results</p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Highest Rated</option>
                      <option>Duration: Short to Long</option>
                      <option>Duration: Long to Short</option>
                    </select>
                  </div>
                </div>
                
                <CourseGrid courses={courses} />
                <CoursePagination />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Courses;

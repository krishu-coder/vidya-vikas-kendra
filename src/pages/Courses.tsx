import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Clock, Users, BookOpen, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <div className="bg-white p-5 rounded-lg shadow-sm sticky top-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-medium text-lg">Filters</h3>
                    <Filter className="h-4 w-4 text-gray-500" />
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3 text-gray-700">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category, i) => (
                        <div key={i} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`category-${i}`} 
                            name="category"
                            defaultChecked={i === 0}
                            className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
                          />
                          <label htmlFor={`category-${i}`} className="ml-2 text-sm text-gray-600">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3 text-gray-700">Difficulty Level</h4>
                    <div className="space-y-2">
                      {levels.map((level, i) => (
                        <div key={i} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`level-${i}`} 
                            name="level"
                            defaultChecked={i === 0}
                            className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
                          />
                          <label htmlFor={`level-${i}`} className="ml-2 text-sm text-gray-600">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-gray-700">Duration</h4>
                    <div className="space-y-2">
                      {["Any Duration", "1-4 weeks", "5-8 weeks", "9-12 weeks", "12+ weeks"].map((duration, i) => (
                        <div key={i} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`duration-${i}`} 
                            name="duration"
                            defaultChecked={i === 0}
                            className="h-4 w-4 text-gujarat-blue focus:ring-gujarat-blue" 
                          />
                          <label htmlFor={`duration-${i}`} className="ml-2 text-sm text-gray-600">
                            {duration}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gujarat-blue hover:bg-blue-700">
                    Apply Filters
                  </Button>
                </div>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge className="bg-blue-100 text-gujarat-blue hover:bg-blue-200">{course.category}</Badge>
                          <Badge variant="outline" className="border-amber-500 text-amber-500">{course.level}</Badge>
                        </div>
                        <CardTitle className="mt-2 text-xl">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to={`/courses/${course.id}`} className="w-full">
                          <Button className="w-full bg-gujarat-blue hover:bg-blue-700">
                            View Course <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled className="text-gray-400">Previous</Button>
                    {[1, 2, 3].map((page) => (
                      <Button 
                        key={page} 
                        variant={page === 1 ? "default" : "outline"} 
                        size="sm"
                        className={page === 1 ? "bg-gujarat-blue hover:bg-blue-700" : ""}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" size="sm" className="hover:bg-gray-100 hover:text-gray-900">Next</Button>
                  </nav>
                </div>
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

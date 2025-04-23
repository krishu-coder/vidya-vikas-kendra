
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const featuredCourses = [
  {
    id: 1,
    title: "Digital Marketing Fundamentals",
    description: "Learn the basics of digital marketing including SEO, social media, and email campaigns.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3",
    category: "Digital",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8
  },
  {
    id: 2,
    title: "Advanced Manufacturing Techniques",
    description: "Master modern manufacturing processes including automation, IoT, and quality control.",
    image: "https://images.unsplash.com/photo-1637169797848-12431f1d355c?ixlib=rb-4.0.3",
    category: "Manufacturing",
    duration: "12 weeks",
    students: 945,
    rating: 4.7
  },
  {
    id: 3,
    title: "Financial Literacy & Management",
    description: "Develop essential financial skills for personal and business growth in today's economy.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
    category: "Finance",
    duration: "6 weeks",
    students: 1875,
    rating: 4.9
  },
  {
    id: 4,
    title: "Sustainable Agriculture Practices",
    description: "Learn eco-friendly farming techniques to increase yield while preserving resources.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3",
    category: "Agriculture",
    duration: "10 weeks",
    students: 2240,
    rating: 4.6
  }
];

const CourseCard = ({ course }: { course: typeof featuredCourses[0] }) => {
  return (
    <Card className="overflow-hidden group course-card h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-gujarat-saffron hover:bg-gujarat-orange">
            {course.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity course-overlay flex items-end p-4">
          <Button className="w-full bg-white text-gujarat-blue hover:bg-gujarat-blue hover:text-white">
            View Course
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold line-clamp-1">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 line-clamp-2 mb-4">
          {course.description}
        </CardDescription>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 mr-1 fill-current" />
            <span>{course.rating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CourseSection = () => {
  return (
    <section className="py-16 bg-gujarat-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gujarat-navy mb-4">Featured Skill Courses</h2>
            <p className="text-lg text-gray-600 max-w-xl">Explore our most popular courses designed to enhance your skills and career prospects.</p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue hover:text-white"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;

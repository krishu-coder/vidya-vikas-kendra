
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, Users, BookOpen } from 'lucide-react';
import { getAuthUser } from '@/utils/auth';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper function to check if a course is enrolled
const isUserEnrolledInCourse = (courseId: number) => {
  const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
  return enrolledCourses.includes(courseId);
};

// Helper function to enroll a user in a course
const enrollUserInCourse = (courseId: number) => {
  const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
  if (!enrolledCourses.includes(courseId)) {
    enrolledCourses.push(courseId);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    return true;
  }
  return false;
};

const CourseView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getAuthUser();
  const { t } = useLanguage();
  const courseId = parseInt(id || '1');
  
  const [isEnrolled, setIsEnrolled] = useState(() => isUserEnrolledInCourse(courseId));
  
  // Mock course data - in a real app, this would come from an API
  const course = {
    id: courseId,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to build responsive websites. This comprehensive course covers everything you need to know to start your journey as a web developer. You'll learn through practical examples and hands-on projects.",
    duration: "8 weeks",
    level: "Beginner",
    students: 1240,
    category: "Technology",
    instructor: "Dr. Patel",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Introduction to HTML and CSS",
      "JavaScript Fundamentals",
      "Responsive Design Principles",
      "Modern Web Development Tools",
      "Building Real-world Projects"
    ]
  };

  const handleEnrollment = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to enroll in courses",
        variant: "destructive"
      });
      navigate('/signin');
      return;
    }

    if (enrollUserInCourse(courseId)) {
      setIsEnrolled(true);
      toast({
        title: "Enrollment Successful",
        description: `You have successfully enrolled in ${course.title}`,
      });
    } else {
      toast({
        title: "Already Enrolled",
        description: "You are already enrolled in this course",
      });
    }
  };

  const handleContinueLearning = () => {
    navigate('/student-profile');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Course Hero Section */}
        <div className="bg-gujarat-blue text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="bg-gujarat-saffron mb-4">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-blue-100 mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{course.level}</span>
                  </div>
                </div>
                {isEnrolled ? (
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleContinueLearning}>
                    {t('course.continue')}
                  </Button>
                ) : (
                  <Button className="bg-gujarat-saffron hover:bg-gujarat-orange" onClick={handleEnrollment}>
                    {t('course.enroll')}
                  </Button>
                )}
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Course Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="space-y-4">
                    {course.topics.map((topic, index) => (
                      <div 
                        key={index}
                        className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <p className="flex items-center">
                          <span className="mr-3 text-gujarat-blue">{index + 1}.</span>
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Instructor</h4>
                      <p>{course.instructor}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Duration</h4>
                      <p>{course.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Level</h4>
                      <p>{course.level}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Enrolled</h4>
                      <p>{course.students} students</p>
                    </div>
                    {isEnrolled ? (
                      <div className="bg-green-100 text-green-800 text-center py-2 rounded-md font-medium">
                        {t('course.enrolled')}
                      </div>
                    ) : (
                      <Button 
                        className="w-full bg-gujarat-blue hover:bg-blue-700" 
                        onClick={handleEnrollment}
                      >
                        {t('course.enroll')}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseView;


import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { getAuthUser } from '@/utils/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// All available courses
const allCourses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Learn the fundamentals of computer science and programming",
    progress: 75,
    lastAccessed: "2023-04-20",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Explore advanced mathematical concepts and applications",
    progress: 45,
    lastAccessed: "2023-04-22",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Environmental Science",
    description: "Study the environment and related issues",
    progress: 20,
    lastAccessed: "2023-04-18",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to build responsive websites",
    progress: 0,
    lastAccessed: "N/A",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Digital Marketing Essentials",
    description: "Learn SEO, social media marketing, and content strategy",
    progress: 0,
    lastAccessed: "N/A",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Gujarati Language for Beginners",
    description: "Learn to speak, read, and write in Gujarati",
    progress: 0,
    lastAccessed: "N/A",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];

const StudentProfile = () => {
  const user = getAuthUser();
  const { t } = useLanguage();
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Get enrolled courses from localStorage
    const enrolledCourseIds = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    
    // Filter all courses to get only enrolled ones
    const userCourses = allCourses.filter(course => 
      enrolledCourseIds.includes(course.id)
    );
    
    // If there are no enrolled courses yet, use the default mock data for demo purposes
    setEnrolledCourses(userCourses.length > 0 ? userCourses : allCourses.slice(0, 3));
  }, []);

  if (!user || user.role !== 'student') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Student Profile Information */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>{t('nav.profile')}</CardTitle>
              <CardDescription>Your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="font-medium text-gray-700">Email:</label>
                <p>{user.email}</p>
              </div>
              <div>
                <label className="font-medium text-gray-700">Role:</label>
                <p className="capitalize">{user.role}</p>
              </div>
              <div>
                <label className="font-medium text-gray-700">Enrolled Courses:</label>
                <p>{enrolledCourses.length}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>

          {/* Enrolled Courses */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Book className="mr-2 h-6 w-6" />
              My Enrolled Courses
            </h2>
            
            {enrolledCourses.length === 0 ? (
              <Card className="p-6 text-center">
                <p className="text-gray-500">You haven't enrolled in any courses yet.</p>
                <Button className="mt-4" asChild>
                  <Link to="/courses">Browse Courses</Link>
                </Button>
              </Card>
            ) : (
              enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription className="mt-2">{course.description}</CardDescription>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{t('course.progress')}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex items-center justify-between mt-6">
                        <p className="text-sm text-gray-500">
                          Last accessed on {course.lastAccessed}
                        </p>
                        <Button asChild>
                          <Link to={`/courses/${course.id}`}>{t('course.continue')}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentProfile;


import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: string;
    students: number;
    category: string;
    image: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
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
  );
};

export default CourseCard;

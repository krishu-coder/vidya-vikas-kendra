
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  SearchIcon, 
  ChevronDown
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const CoursesManagement = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockCourses = [
    { id: 1, name: "React Basics", students: 45, status: "Active", category: "Technology" },
    { id: 2, name: "Advanced JavaScript", students: 32, status: "Active", category: "Technology" },
    { id: 3, name: "TypeScript Fundamentals", students: 28, status: "Draft", category: "Technology" },
    { id: 4, name: "Digital Marketing Essentials", students: 67, status: "Active", category: "Marketing" },
    { id: 5, name: "Gujarati Language for Beginners", students: 53, status: "Active", category: "Language" },
    { id: 6, name: "Hindi Language Course", students: 41, status: "Draft", category: "Language" },
    { id: 7, name: "Financial Accounting", students: 38, status: "Active", category: "Finance" },
  ];

  const filteredCourses = mockCourses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCourse = (id: number) => {
    toast({
      title: "Edit Course",
      description: `Editing course with ID: ${id}`,
    });
  };

  const handleDeleteCourse = (id: number) => {
    toast({
      title: "Delete Course",
      description: `Deleting course with ID: ${id}`,
      variant: "destructive",
    });
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    toast({
      title: "Status Changed",
      description: `Course ${id} status changed to ${newStatus}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t('admin.courses')}</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t('actions.add')} {t('admin.courses')}
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
            <h2 className="text-xl font-semibold">All Courses</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search"
                  placeholder="Search courses..." 
                  className="pl-9 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    Filter
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSearchTerm('')}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchTerm('active')}>
                    Active
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchTerm('draft')}>
                    Draft
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchTerm('technology')}>
                    Technology
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchTerm('language')}>
                    Language
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Enrolled Students</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.name}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2 items-center">
                      <span className={`h-2.5 w-2.5 rounded-full ${
                        course.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'
                      }`}></span>
                      {course.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditCourse(course.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteCourse(course.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Status
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleStatusChange(course.id, 'Active')} 
                            className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Active
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(course.id, 'Draft')}
                            className="flex items-center">
                            <X className="mr-2 h-4 w-4 text-amber-500" />
                            Draft
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoursesManagement;

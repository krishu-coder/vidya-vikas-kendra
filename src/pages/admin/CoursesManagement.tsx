
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CoursesManagement = () => {
  const mockCourses = [
    { id: 1, name: "React Basics", students: 45, status: "Active" },
    { id: 2, name: "Advanced JavaScript", students: 32, status: "Active" },
    { id: 3, name: "TypeScript Fundamentals", students: 28, status: "Draft" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Courses Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">All Courses</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Name</TableHead>
                <TableHead>Enrolled Students</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>{course.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
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


import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Edit, 
  Trash2, 
  Search, 
  ChevronDown, 
  Shield, 
  User 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const UsersManagement = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student", courses: 3, lastLogin: "2023-05-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Student", courses: 2, lastLogin: "2023-05-18" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin", courses: 0, lastLogin: "2023-05-20" },
    { id: 4, name: "Raj Patel", email: "raj@example.com", role: "Student", courses: 4, lastLogin: "2023-05-17" },
    { id: 5, name: "Priya Shah", email: "priya@example.com", role: "Student", courses: 1, lastLogin: "2023-05-19" },
    { id: 6, name: "Manager User", email: "manager@example.com", role: "Admin", courses: 0, lastLogin: "2023-05-16" },
  ];

  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditUser = (id: number) => {
    toast({
      title: "Edit User",
      description: `Editing user with ID: ${id}`,
    });
  };

  const handleDeleteUser = (id: number) => {
    toast({
      title: "Delete User",
      description: `Deleting user with ID: ${id}`,
      variant: "destructive",
    });
  };

  const handleRoleChange = (id: number, newRole: string) => {
    toast({
      title: "Role Changed",
      description: `User ${id} role changed to ${newRole}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t('admin.users')}</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          {t('actions.add')} User
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
            <h2 className="text-xl font-semibold">All Users</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search"
                  placeholder="Search users..." 
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
                  <DropdownMenuItem onClick={() => setSearchTerm('admin')}>
                    Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSearchTerm('student')}>
                    Student
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
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Enrolled Courses</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'Admin' ? 'default' : 'outline'}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.courses}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditUser(user.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Role
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'Admin')}
                            className="flex items-center">
                            <Shield className="mr-2 h-4 w-4" />
                            Admin
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'Student')}
                            className="flex items-center">
                            <User className="mr-2 h-4 w-4" />
                            Student
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

export default UsersManagement;

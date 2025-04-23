
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  Settings 
} from 'lucide-react';

// TODO: Replace with actual auth check
const isAdmin = true;

const AdminLayout = () => {
  if (!isAdmin) {
    return <Navigate to="/signin" replace />;
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: GraduationCap, label: 'Courses', path: '/admin/courses' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold">Admin Panel</h2>
          </SidebarHeader>
          <SidebarContent>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <SidebarGroup>
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton asChild>
                          <a href={item.path} className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </ScrollArea>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;


import React from 'react';
import { Link } from 'react-router-dom';
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
} from "@/components/ui/sidebar";
import { adminMenuItems } from './config/menuItems';

export const AdminSidebar = () => {
  return (
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
                {adminMenuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <Link to={item.path} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
};

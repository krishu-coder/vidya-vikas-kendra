
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from './AdminSidebar';

// TODO: Replace with actual auth check
const isAdmin = true;

const AdminLayout = () => {
  if (!isAdmin) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;


import React from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3">
              <GraduationCap className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Courses</p>
              <h3 className="text-2xl font-bold">25</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <Users className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">150</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

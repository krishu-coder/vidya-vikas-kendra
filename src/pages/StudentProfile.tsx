
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthUser } from '@/utils/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';

const StudentProfile = () => {
  const user = getAuthUser();

  if (!user || user.role !== 'student') {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <Card className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
          <div className="space-y-4">
            <div>
              <label className="font-medium text-gray-700">Email:</label>
              <p>{user.email}</p>
            </div>
            <div>
              <label className="font-medium text-gray-700">Role:</label>
              <p className="capitalize">{user.role}</p>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default StudentProfile;


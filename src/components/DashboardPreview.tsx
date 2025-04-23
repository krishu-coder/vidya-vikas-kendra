
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { TrendingUp, BookOpen, Award, Clock } from 'lucide-react';

const progressData = [
  { name: 'Digital Marketing', progress: 75, hours: 18, total: 24 },
  { name: 'Data Analysis', progress: 45, hours: 9, total: 20 },
  { name: 'Web Development', progress: 90, hours: 27, total: 30 },
];

const skillProgressData = [
  {
    name: 'Week 1',
    'Problem Solving': 20,
    'Communication': 30,
    'Technical': 10,
  },
  {
    name: 'Week 2',
    'Problem Solving': 35,
    'Communication': 40,
    'Technical': 25,
  },
  {
    name: 'Week 3',
    'Problem Solving': 50,
    'Communication': 45,
    'Technical': 40,
  },
  {
    name: 'Week 4',
    'Problem Solving': 65,
    'Communication': 60,
    'Technical': 55,
  },
  {
    name: 'Week 5',
    'Problem Solving': 75,
    'Communication': 65,
    'Technical': 70,
  },
  {
    name: 'Week 6',
    'Problem Solving': 85,
    'Communication': 75,
    'Technical': 82,
  },
];

const weeklyActivityData = [
  { name: 'Mon', hours: 2.5 },
  { name: 'Tue', hours: 3.1 },
  { name: 'Wed', hours: 4.2 },
  { name: 'Thu', hours: 2.8 },
  { name: 'Fri', hours: 3.5 },
  { name: 'Sat', hours: 5.0 },
  { name: 'Sun', hours: 1.2 },
];

const DashboardPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gujarat-navy mb-4">Track Your Learning Journey</h2>
          <p className="text-lg text-gray-600">
            Monitor your progress, track skill development, and stay motivated with our comprehensive learning dashboard.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-gujarat-blue" />
                Course Progress
              </CardTitle>
              <CardDescription>Track completion of your active courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {progressData.map((course, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{course.name}</span>
                      <span className="text-sm text-gray-500">
                        {course.hours}/{course.total} hours
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="text-right text-sm text-gray-500">
                      {course.progress}% complete
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-gujarat-blue" />
                Skill Progress Over Time
              </CardTitle>
              <CardDescription>Track how your skills are improving week by week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={skillProgressData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Proficiency %', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Problem Solving" stroke="#0A4D9C" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Communication" stroke="#F9A826" />
                    <Line type="monotone" dataKey="Technical" stroke="#FF6B35" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Award className="mr-2 h-5 w-5 text-gujarat-blue" />
                Achievements
              </CardTitle>
              <CardDescription>Your recent certification milestones</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gujarat-blue/5 rounded-lg">
                  <div className="bg-gujarat-blue/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-gujarat-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Digital Marketing Basics</p>
                    <p className="text-sm text-gray-500">Completed on April 12, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gujarat-saffron/5 rounded-lg">
                  <div className="bg-gujarat-saffron/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-gujarat-saffron" />
                  </div>
                  <div>
                    <p className="font-medium">Microsoft Excel Advanced</p>
                    <p className="text-sm text-gray-500">Completed on March 22, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gujarat-blue/5 rounded-lg">
                  <div className="bg-gujarat-blue/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-gujarat-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Communication Skills</p>
                    <p className="text-sm text-gray-500">Completed on February 15, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gujarat-blue" />
                Weekly Activity
              </CardTitle>
              <CardDescription>Hours spent learning each day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#0A4D9C" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-gujarat-blue hover:bg-gujarat-lightBlue text-white px-8 py-6 text-lg">
            Access Your Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;

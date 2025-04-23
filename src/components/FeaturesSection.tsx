
import React from 'react';
import { BookOpen, Award, BarChart3, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-gujarat-blue" />,
    title: "Enhanced Employability",
    description: "Gain industry-relevant skills and certifications that significantly improve your job prospects across various sectors."
  },
  {
    icon: <Award className="h-10 w-10 text-gujarat-blue" />,
    title: "Education Modernization",
    description: "Access cutting-edge curriculum developed in partnership with industry leaders, tailored to current market demands."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-gujarat-blue" />,
    title: "Improved Monitoring",
    description: "Track your learning progress with advanced analytics and get personalized recommendations for skill enhancement."
  },
  {
    icon: <Users className="h-10 w-10 text-gujarat-blue" />,
    title: "Community Learning",
    description: "Connect with peers and mentors across Gujarat to enhance your learning experience through collaboration."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gujarat-navy mb-4">Transforming Education in Gujarat</h2>
          <p className="text-lg text-gray-600">Our platform focuses on key areas that drive personal growth and economic development in the state.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-gujarat-blue hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

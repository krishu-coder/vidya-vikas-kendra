
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthUser } from '@/utils/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, BookOpen, Video, Download, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const learningResources = {
  ebooks: [
    { id: 1, title: "Fundamentals of Web Development", description: "A comprehensive guide to HTML, CSS, and JS", size: "12.5 MB", category: "Technology" },
    { id: 2, title: "Gujarati Language: A Beginner's Guide", description: "Start learning Gujarati from scratch", size: "8.2 MB", category: "Language" },
    { id: 3, title: "Advanced Mathematics for Engineers", description: "Mathematical concepts for technical fields", size: "15.3 MB", category: "Science" },
    { id: 4, title: "Digital Marketing Strategies", description: "Modern marketing techniques for online businesses", size: "10.1 MB", category: "Business" }
  ],
  videos: [
    { id: 1, title: "Web Development Tutorial Series", description: "Step-by-step guide to building websites", duration: "4h 25m", category: "Technology" },
    { id: 2, title: "Spoken Gujarati Lessons", description: "Learn conversational Gujarati", duration: "2h 40m", category: "Language" },
    { id: 3, title: "Calculus Problem Solving", description: "Solving complex mathematical problems", duration: "3h 10m", category: "Science" },
    { id: 4, title: "Social Media Marketing Masterclass", description: "Leverage social platforms for business growth", duration: "5h 15m", category: "Business" }
  ],
  practiceTests: [
    { id: 1, title: "HTML & CSS Assessment", description: "Test your web development skills", questions: 40, category: "Technology" },
    { id: 2, title: "Gujarati Vocabulary Quiz", description: "Test your knowledge of common Gujarati words", questions: 50, category: "Language" },
    { id: 3, title: "Mathematics Aptitude Test", description: "Challenging math problems for practice", questions: 30, category: "Science" },
    { id: 4, title: "Marketing Strategy Case Study", description: "Apply marketing concepts to real scenarios", questions: 25, category: "Business" }
  ]
};

const LearningCenter = () => {
  const user = getAuthUser();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  if (!user || user.role !== 'student') {
    return <Navigate to="/signin" replace />;
  }

  const filterResources = (resources: any[], term: string, category: string) => {
    return resources.filter(resource => 
      (resource.title.toLowerCase().includes(term.toLowerCase()) || 
       resource.description.toLowerCase().includes(term.toLowerCase())) &&
      (category === 'all' || resource.category === category)
    );
  };
  
  const filteredEbooks = filterResources(learningResources.ebooks, searchTerm, selectedCategory);
  const filteredVideos = filterResources(learningResources.videos, searchTerm, selectedCategory);
  const filteredTests = filterResources(learningResources.practiceTests, searchTerm, selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gujarat-blue mb-2">Learning Center</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access a wide range of educational resources to enhance your learning experience.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="border rounded-md p-2 min-w-[200px]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Language">Language</option>
            <option value="Science">Science</option>
            <option value="Business">Business</option>
          </select>
        </div>
        
        <Tabs defaultValue="ebooks" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="ebooks" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              E-Books
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Tutorial Videos
            </TabsTrigger>
            <TabsTrigger value="tests" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Practice Tests
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ebooks">
            {filteredEbooks.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No e-books match your search criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredEbooks.map(book => (
                  <Card key={book.id}>
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <FileText className="h-5 w-5 mr-2 text-gujarat-blue flex-shrink-0 mt-1" />
                        <span>{book.title}</span>
                      </CardTitle>
                      <CardDescription>{book.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            Size: {book.size}
                          </p>
                          <Badge className="mt-2">{book.category}</Badge>
                        </div>
                        <Button className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="videos">
            {filteredVideos.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No videos match your search criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredVideos.map(video => (
                  <Card key={video.id}>
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <Video className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-1" />
                        <span>{video.title}</span>
                      </CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            Duration: {video.duration}
                          </p>
                          <Badge className="mt-2">{video.category}</Badge>
                        </div>
                        <Button className="flex items-center gap-1">
                          Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="tests">
            {filteredTests.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No practice tests match your search criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredTests.map(test => (
                  <Card key={test.id}>
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <BookOpen className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                        <span>{test.title}</span>
                      </CardTitle>
                      <CardDescription>{test.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            Questions: {test.questions}
                          </p>
                          <Badge className="mt-2">{test.category}</Badge>
                        </div>
                        <Button className="flex items-center gap-1">
                          Start Test
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default LearningCenter;

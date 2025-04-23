
import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gujarat-blue mb-6">About Vidya Vikas Kendra</h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Empowering Gujarat's future through education and skill development
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-semibold text-gujarat-blue mb-4">Our Mission</h2>
                  <p className="text-gray-700 mb-6">
                    Vidya Vikas Kendra is a flagship initiative by the Government of Gujarat aimed at transforming the educational landscape across the state. Our mission is to bridge the gap between education and employability by providing accessible, high-quality skill development programs that prepare students for the jobs of tomorrow.
                  </p>
                  <p className="text-gray-700">
                    We are committed to modernizing education through digital learning tools, practical training, and industry partnerships that create pathways to successful careers for all Gujarat citizens.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                    alt="Students learning" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <Separator className="my-16" />
              
              <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold text-gujarat-blue mb-6">Our Vision</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  To create a workforce ready for the challenges of the 21st century by developing a comprehensive ecosystem that integrates education, skills, and employment opportunities. We envision Gujarat as a hub of skilled professionals who drive innovation and economic growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gujarat-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-3 text-gujarat-blue">Enhanced Employability</h3>
                  <p className="text-gray-600 text-center">
                    Equipping students with industry-relevant skills and certifications to improve employment opportunities and career growth.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gujarat-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-3 text-gujarat-blue">Education Modernization</h3>
                  <p className="text-gray-600 text-center">
                    Implementing digital learning platforms and innovative teaching methods to enhance educational outcomes across the state.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gujarat-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-3 text-gujarat-blue">Monitoring and Evaluation</h3>
                  <p className="text-gray-600 text-center">
                    Implementing robust systems to track student progress, measure impact, and continuously improve educational offerings.
                  </p>
                </div>
              </div>
              
              <Separator className="my-16" />
              
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-center text-gujarat-blue mb-8">Leadership Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                      <img
                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 70}.jpg`}
                        alt="Team Member"
                        className="w-full h-48 object-cover object-center"
                      />
                      <div className="p-4">
                        <h3 className="font-medium text-lg">Dr. Patel Sharma</h3>
                        <p className="text-sm text-gray-500 mb-2">Education Director</p>
                        <p className="text-sm text-gray-600">
                          20+ years experience in educational reform and implementation
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default About;

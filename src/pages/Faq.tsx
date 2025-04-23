
import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Faq = () => {
  const faqs = [
    {
      id: 1,
      category: "General Questions",
      questions: [
        {
          question: "What is Vidya Vikas Kendra?",
          answer: "Vidya Vikas Kendra is a skill development initiative by the Government of Gujarat aimed at enhancing employability, modernizing education, and improving monitoring and evaluation systems for education across the state."
        },
        {
          question: "Who can enroll in courses offered by Vidya Vikas Kendra?",
          answer: "All residents of Gujarat above the age of 16 are eligible to enroll in our courses. Some specialized courses may have specific prerequisites, which will be clearly mentioned in the course description."
        },
        {
          question: "Are the courses free of cost?",
          answer: "Many of our basic courses are offered free of cost to Gujarat residents. Premium courses and specialized certification programs may have nominal fees, with scholarships available for economically disadvantaged students."
        },
        {
          question: "How do I register for a course?",
          answer: "You can register by creating an account on our portal using your Aadhaar number or other government ID. Once registered, you can browse and enroll in available courses through the online platform."
        }
      ]
    },
    {
      id: 2,
      category: "Course Information",
      questions: [
        {
          question: "What types of courses are offered?",
          answer: "We offer a wide range of courses including technical skills (IT, programming, data science), vocational training (manufacturing, hospitality, healthcare), soft skills (communication, leadership), and subject-specific academic courses."
        },
        {
          question: "How long do courses typically last?",
          answer: "Course duration varies based on content and complexity. Short courses may be completed in 2-4 weeks, while comprehensive programs might span 8-12 weeks. Each course description provides specific duration information."
        },
        {
          question: "Are courses available in Gujarati?",
          answer: "Yes, most courses are available in both Gujarati and English to ensure accessibility for all citizens of Gujarat. Some specialized technical courses may be primarily in English with Gujarati subtitles or supplementary materials."
        },
        {
          question: "Can I take multiple courses simultaneously?",
          answer: "Yes, you can enroll in multiple courses based on your capacity and schedule. However, we recommend balancing your course load to ensure you can dedicate sufficient time to each program."
        }
      ]
    },
    {
      id: 3,
      category: "Certifications & Recognition",
      questions: [
        {
          question: "Are the certifications recognized by employers?",
          answer: "Yes, our certifications are recognized by the Government of Gujarat and many industry partners across the state and country. We have collaboration agreements with major employers to ensure our training meets industry standards."
        },
        {
          question: "How do I receive my certificate after course completion?",
          answer: "Once you successfully complete all course requirements including assessments, a digital certificate will be issued to your registered account. You can download and print this certificate, which includes a QR code for verification."
        },
        {
          question: "Can I get a job placement after completing a course?",
          answer: "While we don't guarantee job placements, we have strong industry partnerships and organize regular job fairs. Our career services team also provides guidance on job applications, interview preparation, and connects qualified candidates with relevant opportunities."
        }
      ]
    },
    {
      id: 4,
      category: "Technical Support",
      questions: [
        {
          question: "What if I face technical issues during a course?",
          answer: "Our technical support team is available from 8 AM to 10 PM daily. You can reach them via the help desk on our portal, by email at support@vidyavikaskendra.gujarat.gov.in, or by calling our toll-free helpline at 1800-XXX-XXXX."
        },
        {
          question: "Do I need high-speed internet to access courses?",
          answer: "Most courses are designed to work with moderate internet speeds. Videos can be downloaded for offline viewing, and course materials are optimized for accessibility. For those without reliable internet access, we have learning centers across districts with computer facilities."
        },
        {
          question: "Which devices can I use to access the courses?",
          answer: "Our platform is compatible with smartphones, tablets, laptops, and desktop computers. We have dedicated mobile apps available on both Android and iOS platforms for convenience."
        }
      ]
    }
  ];
  
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gujarat-blue py-16">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Find answers to common questions about our courses, certifications, and the learning experience at Vidya Vikas Kendra.
              </p>
              <div className="max-w-xl mx-auto flex items-center bg-white rounded-lg overflow-hidden">
                <Input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="flex-grow border-0 focus-visible:ring-0"
                />
                <Button className="rounded-l-none bg-gujarat-saffron hover:bg-gujarat-orange">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* FAQ Categories Sidebar */}
              <div className="hidden md:block">
                <div className="sticky top-6">
                  <h3 className="font-medium text-lg mb-4 text-gujarat-blue">Categories</h3>
                  <ul className="space-y-2">
                    {faqs.map((category) => (
                      <li key={category.id}>
                        <a 
                          href={`#category-${category.id}`} 
                          className="block px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-gujarat-blue transition-colors"
                        >
                          {category.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h3 className="font-medium text-gujarat-blue mb-2">Still have questions?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      If you cannot find the answer to your question, please contact our support team.
                    </p>
                    <Button className="w-full bg-gujarat-blue hover:bg-blue-700">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* FAQ Accordion */}
              <div className="md:col-span-3">
                {faqs.map((category) => (
                  <div key={category.id} id={`category-${category.id}`} className="mb-10">
                    <h2 className="text-2xl font-semibold text-gujarat-blue mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${category.id}-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
                  <p className="text-gray-600 mb-6">Our support team is ready to answer any additional questions you may have.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gujarat-blue hover:bg-blue-700">
                      Contact Support
                    </Button>
                    <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-blue-50">
                      Submit a Question
                    </Button>
                  </div>
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

export default Faq;

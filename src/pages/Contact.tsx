
import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gujarat-blue mb-6">Contact Us</h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Have questions or need assistance? Reach out to our team at Vidya Vikas Kendra. We're here to help you navigate your educational journey.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gujarat-blue mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input id="subject" placeholder="Enter subject" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea id="message" placeholder="Enter your message here" className="h-32" required />
                    </div>
                    <Button type="submit" className="bg-gujarat-blue hover:bg-blue-700 text-white w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-gujarat-blue mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-gujarat-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600 mt-1">Education Department, Block No. 5, Sachivalaya, Gandhinagar, Gujarat 382010</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-gujarat-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600 mt-1">+91 79 2325 0781</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-gujarat-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600 mt-1">contact@vidyavikaskendra.gujarat.gov.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-gujarat-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Working Hours</h3>
                        <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 5:30 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white shadow-md rounded-lg p-2 h-80">
                <iframe
                  title="Gujarat Sachivalaya Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6978371903353!2d72.6594929!3d23.1834441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c277d421a1913%3A0x8424786fb5b15d91!2sGandhinagar%2C%20Gujarat%20Sachivalaya!5e0!3m2!1sen!2sin!4v1713967470669!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Contact;

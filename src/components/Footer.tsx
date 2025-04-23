
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/assets/gujarat-emblem.svg" 
                alt="Gujarat Government"
                className="h-10 w-10"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Gujarat_State_Emblem.svg";
                }}
              />
              <div>
                <h3 className="text-gujarat-blue text-xl font-bold">Vidya Vikas Kendra</h3>
                <p className="text-xs text-gray-600">Government of Gujarat</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              An initiative by the Government of Gujarat to enhance employability, modernize education, and improve monitoring and evaluation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gujarat-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gujarat-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gujarat-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gujarat-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gujarat-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gujarat-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-gujarat-blue transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gujarat-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gujarat-blue transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gujarat-blue transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gujarat-blue transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gujarat-blue transition-colors">Career Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gujarat-blue transition-colors">Skill Assessment</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gujarat-blue transition-colors">Industry Partners</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gujarat-blue transition-colors">Certifications</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gujarat-blue shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Education Department, Block No. 5, Sachivalaya, Gandhinagar, Gujarat 382010
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gujarat-blue" />
                <a href="tel:+917923250781" className="text-gray-600 hover:text-gujarat-blue transition-colors">
                  +91 79 2325 0781
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gujarat-blue" />
                <a href="mailto:contact@vidyavikaskendra.gujarat.gov.in" className="text-gray-600 hover:text-gujarat-blue transition-colors">
                  contact@vidyavikaskendra.gujarat.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vidya Vikas Kendra, Government of Gujarat. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gujarat-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gujarat-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gujarat-blue transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

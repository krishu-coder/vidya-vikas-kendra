
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/gujarat-emblem.svg" 
              alt="Gujarat Government"
              className="h-10 w-10"
              onError={(e) => {
                e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Gujarat_State_Emblem.svg";
              }}
            />
            <div>
              <h1 className="text-gujarat-blue text-xl font-bold">Vidya Vikas Kendra</h1>
              <p className="text-xs text-gray-600">Government of Gujarat</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">Home</Link>
            <Link to="/courses" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">Courses</Link>
            <Link to="/about" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">About</Link>
            <Link to="/contact" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">Contact</Link>
            <Link to="/signin">
              <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gujarat-saffron text-white hover:bg-gujarat-orange">
                Register
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden flex flex-col space-y-4 pb-4">
            <Link to="/" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/signin">
                <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue hover:text-white w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gujarat-saffron text-white hover:bg-gujarat-orange w-full">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { getAuthUser, setAuthUser } from '@/utils/auth';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { toast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = getAuthUser();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleLogout = () => {
    setAuthUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };

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
            <Link to="/" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">{t('nav.home')}</Link>
            <Link to="/courses" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">{t('nav.courses')}</Link>
            <Link to="/about" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">{t('nav.about')}</Link>
            <Link to="/contact" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">{t('nav.contact')}</Link>
            
            <LanguageSelector />
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={user.role === 'admin' ? '/admin' : '/student-profile'}>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{t('nav.profile')}</span>
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  <span>{t('nav.logout')}</span>
                </Button>
              </div>
            ) : (
              <>
                <Link to="/signin">
                  <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue hover:text-white">
                    {t('nav.signin')}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gujarat-saffron text-white hover:bg-gujarat-orange">
                    {t('nav.register')}
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="ml-2"
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
              {t('nav.home')}
            </Link>
            <Link to="/courses" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              {t('nav.courses')}
            </Link>
            <Link to="/about" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-gujarat-navy hover:text-gujarat-blue transition-colors">
              {t('nav.contact')}
            </Link>
            
            {user ? (
              <div className="flex flex-col space-y-2 pt-2">
                <Link to={user.role === 'admin' ? '/admin' : '/student-profile'}>
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{t('nav.profile')}</span>
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 text-red-500 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  <span>{t('nav.logout')}</span>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/signin">
                  <Button variant="outline" className="border-gujarat-blue text-gujarat-blue hover:bg-gujarat-blue hover:text-white w-full">
                    {t('nav.signin')}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gujarat-saffron text-white hover:bg-gujarat-orange w-full">
                    {t('nav.register')}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

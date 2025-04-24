
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'gujarati' | 'hindi';

type Translations = {
  [key: string]: {
    english: string;
    gujarati: string;
    hindi: string;
  };
};

const translations: Translations = {
  // Navigation
  'nav.home': {
    english: 'Home',
    gujarati: 'હોમ',
    hindi: 'होम',
  },
  'nav.courses': {
    english: 'Courses',
    gujarati: 'અભ્યાસક્રમો',
    hindi: 'पाठ्यक्रम',
  },
  'nav.about': {
    english: 'About',
    gujarati: 'વિશે',
    hindi: 'हमारे बारे में',
  },
  'nav.contact': {
    english: 'Contact',
    gujarati: 'સંપર્ક',
    hindi: 'संपर्क',
  },
  'nav.profile': {
    english: 'My Profile',
    gujarati: 'મારી પ્રોફાઇલ',
    hindi: 'मेरी प्रोफाइल',
  },
  'nav.logout': {
    english: 'Logout',
    gujarati: 'લૉગ આઉટ',
    hindi: 'लॉगआउट',
  },
  'nav.signin': {
    english: 'Sign In',
    gujarati: 'સાઇન ઇન',
    hindi: 'साइन इन',
  },
  'nav.register': {
    english: 'Register',
    gujarati: 'નોંધણી',
    hindi: 'रजिस्टर',
  },
  // Course related
  'course.enroll': {
    english: 'Enroll Now',
    gujarati: 'અભ્યાસક્રમ નોંધાવો',
    hindi: 'अभी दाखिला लें',
  },
  'course.continue': {
    english: 'Continue Learning',
    gujarati: 'શીખવાનું ચાલુ રાખો',
    hindi: 'सीखना जारी रखें',
  },
  'course.enrolled': {
    english: 'Enrolled',
    gujarati: 'નોંધાયેલ',
    hindi: 'दाखिला लिया',
  },
  'course.progress': {
    english: 'Progress',
    gujarati: 'પ્રગતિ',
    hindi: 'प्रगति',
  },
  // Admin panel
  'admin.dashboard': {
    english: 'Dashboard',
    gujarati: 'ડેશબોર્ડ',
    hindi: 'डैशबोर्ड',
  },
  'admin.courses': {
    english: 'Courses',
    gujarati: 'અભ્યાસક્રમો',
    hindi: 'पाठ्यक्रम',
  },
  'admin.users': {
    english: 'Users',
    gujarati: 'વપરાશકર્તાઓ',
    hindi: 'उपयोगकर्ता',
  },
  'admin.settings': {
    english: 'Settings',
    gujarati: 'સેટિંગ્સ',
    hindi: 'सेटिंग्स',
  },
  // Language settings
  'language.english': {
    english: 'English',
    gujarati: 'અંગ્રેજી',
    hindi: 'अंग्रेजी',
  },
  'language.gujarati': {
    english: 'Gujarati',
    gujarati: 'ગુજરાતી',
    hindi: 'गुजराती',
  },
  'language.hindi': {
    english: 'Hindi',
    gujarati: 'હિન્દી',
    hindi: 'हिंदी',
  },
  // Actions
  'actions.add': {
    english: 'Add',
    gujarati: 'ઉમેરો',
    hindi: 'जोड़ें',
  },
  'actions.edit': {
    english: 'Edit',
    gujarati: 'સંપાદિત કરો',
    hindi: 'संपादित करें',
  },
  'actions.delete': {
    english: 'Delete',
    gujarati: 'કાઢી નાખો',
    hindi: 'हटाएं',
  },
  'actions.manage': {
    english: 'Manage',
    gujarati: 'સંચાલિત કરો',
    hindi: 'प्रबंधित करें',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'english';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    
    // Fallback to English if translation not found
    if (translations[key] && translations[key].english) {
      return translations[key].english;
    }
    
    // Return the key if no translation is found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};


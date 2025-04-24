
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'english' | 'gujarati' | 'hindi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  english: {
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.profile': 'My Profile',
    'nav.signin': 'Sign In',
    'nav.register': 'Register',
    'nav.logout': 'Logout',
    'nav.admin': 'Admin Dashboard',
    'nav.learningCenter': 'Learning Center',

    'language.english': 'English',
    'language.gujarati': 'Gujarati',
    'language.hindi': 'Hindi',

    'footer.rights': 'All Rights Reserved',

    'course.enroll': 'Enroll Now',
    'course.enrolled': 'Enrolled',
    'course.continue': 'Continue Learning',
    'course.progress': 'Progress',

    'admin.dashboard': 'Dashboard',
    'admin.courses': 'Courses',
    'admin.users': 'Users',
    'admin.settings': 'Settings',

    'payment.title': 'Complete Payment',
    'payment.method': 'Payment Method',
    'payment.creditCard': 'Credit/Debit Card',
    'payment.upi': 'UPI',
    'payment.netBanking': 'Net Banking',
    'payment.cardNumber': 'Card Number',
    'payment.expiry': 'Expiry Date',
    'payment.cvc': 'CVC',
    'payment.upiId': 'UPI ID',
    'payment.selectBank': 'Select Bank',
    'payment.payNow': 'Pay Now',
    'payment.processing': 'Processing...',
    'payment.cancel': 'Cancel',
    'payment.success': 'Payment Successful',
    'payment.successMessage': 'Your payment has been processed successfully',
  },
  gujarati: {
    'nav.home': 'હોમ',
    'nav.courses': 'અભ્યાસક્રમો',
    'nav.about': 'અમારા વિશે',
    'nav.contact': 'સંપર્ક',
    'nav.faq': 'પ્રશ્નો',
    'nav.profile': 'મારી પ્રોફાઇલ',
    'nav.signin': 'સાઇન ઇન',
    'nav.register': 'નોંધણી',
    'nav.logout': 'લૉગઆઉટ',
    'nav.admin': 'એડમિન ડેશબોર્ડ',
    'nav.learningCenter': 'શીખવાનું કેન્દ્ર',
    
    'language.english': 'અંગ્રેજી',
    'language.gujarati': 'ગુજરાતી',
    'language.hindi': 'હિન્દી',

    'footer.rights': 'બધા હકો અમારી પાસે રાખેલા છે',

    'course.enroll': 'નોંધણી કરો',
    'course.enrolled': 'નોંધાયેલ',
    'course.continue': 'અભ્યાસ ચાલુ રાખો',
    'course.progress': 'પ્રગતિ',

    'admin.dashboard': 'ડેશબોર્ડ',
    'admin.courses': 'અભ્યાસક્રમો',
    'admin.users': 'વપરાશકર્તાઓ',
    'admin.settings': 'સેટિંગ્સ',

    'payment.title': 'ચુકવણી પૂર્ણ કરો',
    'payment.method': 'ચુકવણી પદ્ધતિ',
    'payment.creditCard': 'ક્રેડિટ/ડેબિટ કાર્ડ',
    'payment.upi': 'યુપીઆઈ',
    'payment.netBanking': 'નેટ બેંકિંગ',
    'payment.cardNumber': 'કાર્ડ નંબર',
    'payment.expiry': 'સમાપ્તિ તારીખ',
    'payment.cvc': 'સીવીસી',
    'payment.upiId': 'યુપીઆઈ આઈડી',
    'payment.selectBank': 'બેંક પસંદ કરો',
    'payment.payNow': 'હવે ચૂકવો',
    'payment.processing': 'પ્રક્રિયા કરી રહ્યું છે...',
    'payment.cancel': 'રદ કરો',
    'payment.success': 'ચુકવણી સફળ',
    'payment.successMessage': 'તમારી ચુકવણી સફળતાપૂર્વક પ્રક્રિયા કરવામાં આવી છે',
  },
  hindi: {
    'nav.home': 'होम',
    'nav.courses': 'पाठ्यक्रम',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.faq': 'सवाल',
    'nav.profile': 'मेरा प्रोफाइल',
    'nav.signin': 'साइन इन',
    'nav.register': 'रजिस्टर',
    'nav.logout': 'लॉगआउट',
    'nav.admin': 'एडमिन डैशबोर्ड',
    'nav.learningCenter': 'शिक्षा केंद्र',
    
    'language.english': 'अंग्रेज़ी',
    'language.gujarati': 'गुजराती',
    'language.hindi': 'हिंदी',

    'footer.rights': 'सभी अधिकार सुरक्षित',

    'course.enroll': 'नामांकन करें',
    'course.enrolled': 'नामांकित',
    'course.continue': 'सीखना जारी रखें',
    'course.progress': 'प्रगति',

    'admin.dashboard': 'डैशबोर्ड',
    'admin.courses': 'पाठ्यक्रम',
    'admin.users': 'उपयोगकर्ता',
    'admin.settings': 'सेटिंग्स',

    'payment.title': 'भुगतान पूरा करें',
    'payment.method': 'भुगतान का तरीका',
    'payment.creditCard': 'क्रेडिट/डेबिट कार्ड',
    'payment.upi': 'यूपीआई',
    'payment.netBanking': 'नेट बैंकिंग',
    'payment.cardNumber': 'कार्ड नंबर',
    'payment.expiry': 'समाप्ति तिथि',
    'payment.cvc': 'सीवीसी',
    'payment.upiId': 'यूपीआई आईडी',
    'payment.selectBank': 'बैंक चुनें',
    'payment.payNow': 'अभी भुगतान करें',
    'payment.processing': 'प्रक्रिया हो रही है...',
    'payment.cancel': 'रद्द करें',
    'payment.success': 'भुगतान सफल',
    'payment.successMessage': 'आपका भुगतान सफलतापूर्वक प्रोसेस किया गया है',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

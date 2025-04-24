
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('english')} className={language === 'english' ? 'bg-accent' : ''}>
          {t('language.english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('gujarati')} className={language === 'gujarati' ? 'bg-accent' : ''}>
          {t('language.gujarati')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('hindi')} className={language === 'hindi' ? 'bg-accent' : ''}>
          {t('language.hindi')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

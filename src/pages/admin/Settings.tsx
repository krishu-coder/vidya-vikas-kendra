
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Bell, Shield, Mail, Globe } from "lucide-react";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const Settings = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const settingsSections = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure email and system notifications",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Manage security settings and permissions",
    },
    {
      icon: Mail,
      title: "Email Settings",
      description: "Configure email templates and settings",
    },
  ];

  const handleSaveLanguage = () => {
    toast({
      title: "Language Setting Saved",
      description: `Default language set to ${language}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <SettingsIcon className="h-8 w-8" />
        <h1 className="text-3xl font-bold">{t('admin.settings')}</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Language Settings</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Default Language</h3>
            <RadioGroup 
              defaultValue={language} 
              onValueChange={(value) => setLanguage(value as 'english' | 'gujarati' | 'hindi')}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="english" id="english" />
                <Label htmlFor="english">{t('language.english')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gujarati" id="gujarati" />
                <Label htmlFor="gujarati">{t('language.gujarati')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hindi" id="hindi" />
                <Label htmlFor="hindi">{t('language.hindi')}</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button onClick={handleSaveLanguage}>Save Language Settings</Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {settingsSections.map((section) => (
          <Card key={section.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <section.icon className="h-5 w-5" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <Button variant="outline" size="sm">Configure</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Settings;


import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Bell, Shield, Mail } from "lucide-react";

const Settings = () => {
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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <SettingsIcon className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Admin Settings</h1>
      </div>

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

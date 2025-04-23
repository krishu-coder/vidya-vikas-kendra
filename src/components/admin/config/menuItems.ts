
import { LayoutDashboard, GraduationCap, Users, Settings } from 'lucide-react';

export const adminMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: GraduationCap, label: 'Courses', path: '/admin/courses' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];


type UserRole = 'student' | 'admin' | null;

interface User {
  email: string;
  role: UserRole;
}

// This is a mock authentication - in a real app, use Supabase or Clerk
const MOCK_USERS = {
  'student@test.com': {
    password: 'student123',
    role: 'student' as const,
  },
  'admin@test.com': {
    password: 'admin123',
    role: 'admin' as const,
  },
};

export const authenticateUser = (email: string, password: string): User | null => {
  const user = MOCK_USERS[email as keyof typeof MOCK_USERS];
  
  if (user && user.password === password) {
    return {
      email,
      role: user.role,
    };
  }
  
  return null;
};

export const setAuthUser = (user: User | null) => {
  if (user) {
    localStorage.setItem('authUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('authUser');
  }
};

export const getAuthUser = (): User | null => {
  const user = localStorage.getItem('authUser');
  return user ? JSON.parse(user) : null;
};

export const isAdmin = (): boolean => {
  const user = getAuthUser();
  return user?.role === 'admin';
};


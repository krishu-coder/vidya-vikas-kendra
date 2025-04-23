
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign in logic here when ready
    console.log('Sign in submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center text-gujarat-blue">Sign in to your account</h1>
            <p className="text-center text-gray-600 mt-2">
              Welcome back to Vidya Vikas Kendra
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                  placeholder="Enter your password"
                />
              </div>
              <Button type="submit" className="w-full bg-gujarat-blue hover:bg-blue-700">
                Sign in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <Link to="/forgot-password" className="text-gujarat-blue hover:text-blue-700">
                Forgot your password?
              </Link>
            </div>
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-gujarat-blue hover:text-blue-700">
                Register here
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;

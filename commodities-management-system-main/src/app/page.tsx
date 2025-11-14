"use client";

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Shield, Users, TrendingUp, Sparkles, Zap, Lock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.role === 'Manager') {
        router.push('/dashboard');
      } else {
        router.push('/products');
      }
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  const features = [
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Secure authentication with Manager and Store Keeper roles',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Package,
      title: 'Product Management',
      description: 'Add, edit, and track all your commodity inventory',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Analytics',
      description: 'View insights, trends, and statistics at a glance',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Collaborate with your team with controlled permissions',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                <Package className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Modern Inventory Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Commodities Management System
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline your inventory management with powerful role-based access control,
            real-time analytics, and intuitive product tracking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/login">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 hover:bg-accent">
              <Link href="/products">
                View Demo
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-3 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
          <CardContent className="p-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-2">
                  <Lock className="h-3 w-3" />
                  <span>Demo Credentials</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
                <p className="text-white/90 text-lg">
                  Sign in with demo credentials to explore the full functionality
                  of the Commodities Management System.
                </p>
                <div className="space-y-3 text-sm bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">👤</span>
                    <div>
                      <p className="font-semibold">Manager</p>
                      <p className="text-white/80">manager@example.com / manager123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">👤</span>
                    <div>
                      <p className="font-semibold">Store Keeper</p>
                      <p className="text-white/80">keeper@example.com / keeper123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button asChild size="lg" variant="secondary" className="w-full md:w-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-white text-purple-600 hover:bg-white/90">
                  <Link href="/login">
                    <Zap className="mr-2 h-5 w-5" />
                    Sign In Now
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
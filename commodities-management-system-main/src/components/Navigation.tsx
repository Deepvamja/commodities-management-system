"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeProvider';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Package, 
  LogOut, 
  Moon, 
  Sun,
  Menu,
  Sparkles
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export default function Navigation() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      roles: ['Manager'],
    },
    {
      name: 'Products',
      href: '/products',
      icon: Package,
      roles: ['Manager', 'Store Keeper'],
    },
  ];

  const filteredNavItems = navigationItems.filter((item) =>
    item.roles.includes(user.role)
  );

  const NavLinks = () => (
    <>
      {filteredNavItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'hover:bg-accent'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{item.name}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="border-b bg-white/50 dark:bg-gray-950/50 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Package className="h-5 w-5 text-white" />
              </div>
              <span className="hidden sm:inline">Commodities</span>
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  {user.name}
                </span>
                <span className="text-xs text-blue-700 dark:text-blue-300 bg-blue-200 dark:bg-blue-900 px-2 py-0.5 rounded-full">
                  {user.role}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="hover:bg-accent rounded-lg"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button variant="outline" onClick={logout} className="rounded-lg">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-lg">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="pb-4 border-b">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <p className="font-semibold">{user.name}</p>
                    </div>
                    <p className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary inline-block">
                      {user.role}
                    </p>
                  </div>
                  <NavLinks />
                  <Button
                    variant="outline"
                    className="justify-start rounded-lg"
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="h-4 w-4 mr-2" /> Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="h-4 w-4 mr-2" /> Light Mode
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={logout} className="justify-start rounded-lg">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
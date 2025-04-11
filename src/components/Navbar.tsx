
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Building, Users, Calendar, Clock, FileText, DollarSign } from 'lucide-react';
import AuthNavItems from "./AuthNavItems";
import { useAuth } from "@/hooks/useAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const isOnDashboard = location.pathname.startsWith('/dashboard');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderPublicLinks = () => (
    <>
      <Link to="/" className="text-sm hover:text-gray-500">Home</Link>
      <Link to="/about" className="text-sm hover:text-gray-500">About</Link>
      <Link to="/services" className="text-sm hover:text-gray-500">Services</Link>
      <Link to="/contact" className="text-sm hover:text-gray-500">Contact</Link>
    </>
  );

  const renderAdminLinks = () => (
    <>
      <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
        Dashboard
      </Link>
      <Link to="/schedule" className="text-sm font-medium hover:text-primary flex items-center gap-1">
        <Calendar className="h-4 w-4" /> Schedule
      </Link>
      <Link to="/timesheet" className="text-sm font-medium hover:text-primary flex items-center gap-1">
        <Clock className="h-4 w-4" /> Timesheet
      </Link>
      <Link to="/invoices" className="text-sm font-medium hover:text-primary flex items-center gap-1">
        <FileText className="h-4 w-4" /> Invoices
      </Link>
      <Link to="/wages" className="text-sm font-medium hover:text-primary flex items-center gap-1">
        <DollarSign className="h-4 w-4" /> Wages
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-auto py-1.5 px-2 text-sm font-medium">
              <Building className="h-4 w-4 mr-1" /> Organization
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[200px] gap-2 p-2 md:w-[220px]">
                <Link to="/customers" className="block p-2 text-sm hover:bg-gray-100 rounded-md">
                  <Users className="h-4 w-4 inline mr-2" /> Customers
                </Link>
                <Link to="/sites" className="block p-2 text-sm hover:bg-gray-100 rounded-md">
                  <Building className="h-4 w-4 inline mr-2" /> Sites
                </Link>
                <Link to="/staff" className="block p-2 text-sm hover:bg-gray-100 rounded-md">
                  <Users className="h-4 w-4 inline mr-2" /> Staff
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
  
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/9ae772d2-cd83-4490-95d9-a8814b3a930f.png" alt="Fortis Security Logo" className="h-10 mr-2" />
          </Link>

          <div className="flex items-center space-x-4">
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-6 justify-end">
              {user && isAdmin() && isOnDashboard ? renderAdminLinks() : renderPublicLinks()}
            </div>

            {/* Auth Navigation Items */}
            <div className="hidden md:block">
              <AuthNavItems />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {user && isAdmin() && isOnDashboard ? (
            <>
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Dashboard</Link>
              <Link to="/schedule" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <Calendar className="h-4 w-4 inline mr-2" /> Schedule
              </Link>
              <Link to="/timesheet" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <Clock className="h-4 w-4 inline mr-2" /> Timesheet
              </Link>
              <Link to="/invoices" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <FileText className="h-4 w-4 inline mr-2" /> Invoices
              </Link>
              <Link to="/wages" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <DollarSign className="h-4 w-4 inline mr-2" /> Wages
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full px-3 py-2 text-sm font-medium text-gray-700 text-left hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center">
                  <Building className="h-4 w-4 mr-2" /> Organization
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/customers" className="flex items-center">
                      <Users className="h-4 w-4 mr-2" /> Customers
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/sites" className="flex items-center">
                      <Building className="h-4 w-4 mr-2" /> Sites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/staff" className="flex items-center">
                      <Users className="h-4 w-4 mr-2" /> Staff
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
              <Link to="/services" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
            </>
          )}
          
          {/* Mobile Auth Navigation */}
          <div className="pt-2 pb-2 border-t border-gray-200">
            <AuthNavItems />
          </div>
        </div>
      </div>
    </nav>;
};

export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import AuthNavItems from "./AuthNavItems";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/9ae772d2-cd83-4490-95d9-a8814b3a930f.png" 
              alt="Fortis Security Logo" 
              className="h-10 mr-2" 
            />
            <span className="font-semibold text-lg text-fortis-dark-blue">Fortis Security</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            <Link to="/services" className="hover:text-gray-500">Services</Link>
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
            <Link to="/faq" className="hover:text-gray-500">FAQ</Link>
          </div>

          {/* Auth Navigation Items */}
          <div className="hidden md:block">
            <AuthNavItems />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
          <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">FAQ</Link>
          
          {/* Mobile Auth Navigation */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <AuthNavItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

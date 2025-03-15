import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return <header className="w-full bg-black text-white">
      <div className="container mx-auto px-4 flex justify-end items-center py-3 bg-gray-900">
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition-colors ml-4">
            Log in
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-black w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gray-300 py-2 transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 py-2 transition-colors" onClick={closeMenu}>
              About
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 py-2 transition-colors" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 py-2 transition-colors" onClick={closeMenu}>
              Contact
            </Link>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors" onClick={closeMenu}>
              Log in
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;
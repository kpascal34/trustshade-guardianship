
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="/lovable-uploads/afe08786-8e54-4ea0-b2ed-edd00df60c9e.png" 
            alt="Fortis Security Logo"
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-fortis-light-blue font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-fortis-light-blue font-medium transition-colors">
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-gray-700 hover:text-fortis-light-blue font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/services" className="w-full">All Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/door-supervision" className="w-full">Door Supervision</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/manned-guarding" className="w-full">Manned Guarding</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/event-security" className="w-full">Event Security</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/risk-assessments" className="w-full">Risk Assessments</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/contact" className="text-gray-700 hover:text-fortis-light-blue font-medium transition-colors">
            Contact
          </Link>

          <Button asChild className="bg-fortis-light-blue hover:bg-fortis-dark-blue">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 p-2" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-fortis-light-blue font-medium py-2 transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-fortis-light-blue font-medium py-2 transition-colors" onClick={closeMenu}>
              About
            </Link>
            
            <div className="py-2">
              <p className="text-gray-700 font-medium mb-2">Services</p>
              <div className="ml-4 flex flex-col space-y-2">
                <Link to="/services" className="text-gray-600 hover:text-fortis-light-blue transition-colors" onClick={closeMenu}>
                  All Services
                </Link>
                <Link to="/services/door-supervision" className="text-gray-600 hover:text-fortis-light-blue transition-colors" onClick={closeMenu}>
                  Door Supervision
                </Link>
                <Link to="/services/manned-guarding" className="text-gray-600 hover:text-fortis-light-blue transition-colors" onClick={closeMenu}>
                  Manned Guarding
                </Link>
                <Link to="/services/event-security" className="text-gray-600 hover:text-fortis-light-blue transition-colors" onClick={closeMenu}>
                  Event Security
                </Link>
                <Link to="/services/risk-assessments" className="text-gray-600 hover:text-fortis-light-blue transition-colors" onClick={closeMenu}>
                  Risk Assessments
                </Link>
              </div>
            </div>
            
            <Link to="/contact" className="text-gray-700 hover:text-fortis-light-blue font-medium py-2 transition-colors" onClick={closeMenu}>
              Contact
            </Link>
            
            <Button asChild className="bg-fortis-light-blue hover:bg-fortis-dark-blue w-full mt-2" onClick={closeMenu}>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

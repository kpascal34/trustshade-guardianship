
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  height?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Contact Us",
  ctaLink = "/contact",
  backgroundImage = "/hero-bg.jpg",
  height = "h-screen",
}: HeroSectionProps) => {
  return (
    <div
      className={`w-full ${height} bg-cover bg-center flex items-center justify-center relative`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-fortis-dark-blue opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}
        
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/Fortissecured/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-8 w-8 text-white hover:text-fortis-light-blue transition-colors" />
          </a>
          <a href="https://www.instagram.com/fortis_security_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-8 w-8 text-white hover:text-fortis-light-blue transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/fortis-security-group/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8 text-white hover:text-fortis-light-blue transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

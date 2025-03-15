
import { useState } from "react";
import { Phone, Mail, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {isOpen && (
        <div className="flex flex-col space-y-3 items-end">
          <a
            href="https://wa.me/447762853255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-green-500 text-white p-3 shadow-lg hover:bg-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare className="h-6 w-6" />
          </a>
          <a
            href="tel:+447762853255"
            className="flex items-center justify-center rounded-full bg-blue-500 text-white p-3 shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Call"
          >
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="mailto:info@fortissecured.co.uk"
            className="flex items-center justify-center rounded-full bg-red-500 text-white p-3 shadow-lg hover:bg-red-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      )}
      <Button
        onClick={toggleMenu}
        className={`rounded-full w-14 h-14 shadow-lg ${
          isOpen ? "bg-gray-700" : "bg-fortis-dark-blue"
        }`}
        aria-label={isOpen ? "Close menu" : "Open contact menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingCTA;

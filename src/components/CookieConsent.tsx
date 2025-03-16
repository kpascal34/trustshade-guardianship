
import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-6 w-6 text-slate-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Cookie Policy</h3>
              <p className="text-sm text-gray-700 max-w-3xl">
                We use cookies to enhance your experience on our website. By continuing to browse, you agree to our{' '}
                <Link to="/cookies-policy" className="text-blue-600 hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 md:flex-initial" 
              onClick={declineCookies}
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              className="flex-1 md:flex-initial bg-slate-700 hover:bg-slate-800" 
              onClick={acceptCookies}
            >
              Accept All
            </Button>
          </div>
          <button
            className="absolute top-2 right-2 md:relative md:top-0 md:right-0"
            onClick={declineCookies}
            aria-label="Close cookie banner"
          >
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

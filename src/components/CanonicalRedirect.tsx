
import { useEffect } from 'react';

const CanonicalRedirect = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    const currentHost = window.location.host;
    const currentProtocol = window.location.protocol;
    
    // Check if we need to redirect to canonical URL
    let shouldRedirect = false;
    let newUrl = '';
    
    // Force HTTPS
    if (currentProtocol === 'http:') {
      shouldRedirect = true;
      newUrl = currentUrl.replace('http:', 'https:');
    }
    
    // Force www subdomain
    if (currentHost === 'fortissecured.co.uk') {
      shouldRedirect = true;
      if (newUrl) {
        newUrl = newUrl.replace('fortissecured.co.uk', 'www.fortissecured.co.uk');
      } else {
        newUrl = currentUrl.replace('fortissecured.co.uk', 'www.fortissecured.co.uk');
      }
    }
    
    // Perform redirect if needed
    if (shouldRedirect && newUrl !== currentUrl) {
      window.location.replace(newUrl);
    }
  }, []);

  return null;
};

export default CanonicalRedirect;

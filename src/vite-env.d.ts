
/// <reference types="vite/client" />

// Define reCAPTCHA global types
interface Window {
  grecaptcha: {
    reset: () => void;
    // Add other grecaptcha methods if needed
  };
  // Add reCAPTCHA Enterprise
  grecaptchaEnterprise?: {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    enterprise: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  };
}

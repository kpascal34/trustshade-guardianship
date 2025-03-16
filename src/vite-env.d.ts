
/// <reference types="vite/client" />

// Define reCAPTCHA global types
interface Window {
  grecaptcha: {
    reset: () => void;
    // Add other grecaptcha methods if needed
  };
}

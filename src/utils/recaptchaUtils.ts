
/**
 * Utility functions for Google reCAPTCHA Enterprise integration
 */

export const executeRecaptchaEnterprise = async (): Promise<string> => {
  if (window.grecaptchaEnterprise) {
    return new Promise<string>((resolve) => {
      window.grecaptchaEnterprise.ready(async () => {
        const token = await window.grecaptchaEnterprise.execute(
          '6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo', 
          { action: 'REGISTER' }
        );
        resolve(token);
      });
    });
  } else {
    throw new Error("reCAPTCHA Enterprise not loaded");
  }
};

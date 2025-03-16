
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ContactFormFields from "./contact/ContactFormFields";
import { submitContactForm } from "@/services/contactSubmissionService";
import { executeRecaptchaEnterprise } from "@/utils/recaptchaUtils";
import type { FormData } from "./contact/ContactFormFields";

const ContactForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    // Load reCAPTCHA Enterprise script if not already loaded
    if (!document.querySelector('script[src*="recaptcha/enterprise.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.google.com/recaptcha/enterprise.js?render=6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA Enterprise and get token
      const recaptchaToken = await executeRecaptchaEnterprise();
      console.log("reCAPTCHA Enterprise token:", recaptchaToken);
      
      // Submit form with reCAPTCHA token
      await submitContactForm(formData, recaptchaToken, user?.id);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after successful submission
      resetForm();
      
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ContactFormFields
        formData={formData}
        handleChange={handleChange}
        handleServiceChange={handleServiceChange}
      />

      <div className="mt-4 text-sm text-gray-500">
        <p>This site is protected by reCAPTCHA Enterprise and the Google 
        <a href="https://policies.google.com/privacy" className="text-primary hover:underline"> Privacy Policy</a> and 
        <a href="https://policies.google.com/terms" className="text-primary hover:underline"> Terms of Service</a> apply.</p>
      </div>

      <Button
        type="submit"
        className="w-full bg-fortis-light-blue hover:bg-fortis-dark-blue"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;

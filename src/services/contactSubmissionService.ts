
import { supabase } from "@/integrations/supabase/client";
import emailjs from "emailjs-com";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}

export const submitContactForm = async (
  formData: ContactFormData,
  recaptchaValue: string,
  userId?: string | null
) => {
  // Store submission in Supabase
  const { error: supabaseError } = await supabase
    .from('contact_submissions')
    .insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      service: formData.service,
      user_id: userId || null, // Associate with user if logged in
    });

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }

  // Prepare template params for EmailJS
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    service_interest: formData.service,
    subject: formData.subject,
    message: formData.message,
    'g-recaptcha-response': recaptchaValue,
  };

  // Send email using EmailJS
  await emailjs.send(
    "service_s40muhp", // Service ID
    "template_pyx1via", // Template ID
    templateParams
  );

  return { success: true };
};

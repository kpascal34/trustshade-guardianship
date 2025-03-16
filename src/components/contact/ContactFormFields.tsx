
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReCAPTCHA from "react-google-recaptcha";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleServiceChange: (value: string) => void;
  recaptchaValue: string | null;
  handleRecaptchaChange: (value: string | null) => void;
}

const ContactFormFields = ({
  formData,
  handleChange,
  handleServiceChange,
  recaptchaValue,
  handleRecaptchaChange,
}: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 123 456 7890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In</Label>
          <Select value={formData.service} onValueChange={handleServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="door-supervision">Door Supervision</SelectItem>
              <SelectItem value="manned-guarding">Manned Guarding</SelectItem>
              <SelectItem value="event-security">Event Security</SelectItem>
              <SelectItem value="risk-assessments">Risk Assessments</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide details about your inquiry..."
          rows={5}
          required
        />
      </div>
      
      <div className="flex justify-center my-4">
        <ReCAPTCHA
          sitekey="6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo"
          onChange={handleRecaptchaChange}
        />
      </div>
    </>
  );
};

export default ContactFormFields;

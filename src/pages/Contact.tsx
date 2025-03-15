
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for all your security needs"
        backgroundImage="/contact-hero.jpg"
        height="h-[60vh]"
        ctaText=""
        ctaLink=""
      />

      {/* Contact Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-fortis-dark-blue mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have a question about our services, need a quote, or want to discuss your security requirements, our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-fortis-light-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-fortis-dark-blue mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Security Street<br />
                    London, SW1A 1AA<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-fortis-light-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-fortis-dark-blue mb-1">Phone</h3>
                  <p className="text-gray-600">+44 123 456 7890</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-fortis-light-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-fortis-dark-blue mb-1">Email</h3>
                  <p className="text-gray-600">info@fortissecurity.com</p>
                  <p className="text-gray-500 text-sm">We'll respond as soon as possible</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-fortis-light-blue mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-fortis-dark-blue mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Emergency services available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-fortis-dark-blue mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.658239812323!2d-0.13442279187443754!3d51.50334226138969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sWestminster%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1653891065456!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fortis Security Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

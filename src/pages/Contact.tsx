
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Get in touch with us for any inquiries about our security services. Our
              team is ready to assist you 24/7.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-600 p-3 rounded-md mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p>077762 853255</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-600 p-3 rounded-md mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>info@fortissecured.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-slate-600 p-3 rounded-md mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p>Yorkshire & Greater Manchester</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

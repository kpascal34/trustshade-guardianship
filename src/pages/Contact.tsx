
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init("L_WED7EtdpQ51lFN2");
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Fortis Security | Yorkshire & Manchester Security Services</title>
        <meta name="description" content="Contact Fortis Security for professional security services in Yorkshire and Manchester. Get in touch for door supervision, manned guarding, and event security needs." />
        <meta name="keywords" content="contact security company, Yorkshire security contact, Manchester security contact, professional security services" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/contact" />
        <meta property="og:title" content="Contact Fortis Security | Yorkshire & Manchester Security Services" />
        <meta property="og:description" content="Contact Fortis Security for professional security services in Yorkshire and Manchester." />
        <meta property="og:url" content="https://www.fortissecured.co.uk/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Fortis Security | Yorkshire & Manchester Security Services" />
        <meta name="twitter:description" content="Contact Fortis Security for professional security services in Yorkshire and Manchester." />
      </Helmet>
      
      <section className="container mx-auto px-4 py-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl font-bold mb-6">Contact Fortis Security</h1>
        <p className="text-lg mb-8 max-w-3xl">
          Get in touch with Yorkshire's trusted security provider for professional security services across Yorkshire and Greater Manchester.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Contact Information</h2>
            <p className="text-lg mb-8">
              Get in touch with us for any inquiries about our security services in Yorkshire and Manchester. Our
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
                  <h3 className="font-semibold text-lg">Service Areas</h3>
                  <p>Yorkshire & Greater Manchester</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-700">
                    <p>Leeds, Sheffield, York, Bradford (Yorkshire)</p>
                    <p>Manchester, Salford, Bolton, Stockport (Greater Manchester)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import { Link } from "react-router-dom";
import { Shield, Users, BadgeCheck, Clock } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Michael is the best bouncer he really looked after me and my friends when we were drunk and made sure we didn't get any trouble.",
    author: "Poppy",
  },
  {
    quote: "Love everything about the night, but mainly the staff, best staff I've ever had, big shout out to Kingsley for looking after me, most caring staff in Leeds!",
    author: "Paul",
  },
  {
    quote: "This company staff are always really great about handling things without being overly aggressive. They're really supportive when you need help.",
    author: "Morgan",
  },
  {
    quote: "Professional and reliable service. The team is always practical and handles situations with expertise. Creating a relaxing environment for our customers.",
    author: "Ryan",
  }
];

const services = [
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    icon: <Shield className="h-8 w-8" />,
    description: "Professional security personnel providing 24/7 protection for your premises.",
  },
  {
    id: "door-supervision",
    title: "Door Supervision",
    icon: <Users className="h-8 w-8" />,
    description: "Licensed door supervisors for venues and events management.",
  },
  {
    id: "event-security",
    title: "Event Security",
    icon: <BadgeCheck className="h-8 w-8" />,
    description: "Comprehensive security solutions for events of all sizes.",
  },
  {
    id: "security-consultation",
    title: "Security Consultation",
    icon: <Clock className="h-8 w-8" />,
    description: "Expert security risk assessment and consultation services.",
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/lovable-uploads/752946cd-c6fd-4a3b-bb77-81c318aa8f5d.png" 
            alt="Security professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Trusted Partner in Security Solutions
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              At Fortis Security, we specialize in bespoke security services 
              tailored to your needs. Operating across Yorkshire and 
              Manchester, we ensure a safe environment for businesses and 
              events.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-black py-3 px-8 rounded font-medium hover:bg-gray-200 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of security services designed to meet your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our highly-trained professionals are committed to providing exceptional security services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/b7c3164f-b1af-4276-8bd5-89aa2cac72c9.png" 
                alt="Security Professional" 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Door Supervision</h3>
                <p className="text-gray-600">Our professional door supervisors maintain a safe environment at venues across Yorkshire and Manchester.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/6ef64e34-56f1-43e7-8113-743151f38524.png" 
                alt="Event Security" 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Event Security</h3>
                <p className="text-gray-600">We provide comprehensive security solutions for events of all types and sizes.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/48449466-0403-4059-8440-4f66d4ab41c8.png" 
                alt="Venue Security" 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Venue Security</h3>
                <p className="text-gray-600">Our team ensures safety and security at venues and special events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss your security needs and find out how we can help protect your business, events, or premises.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-black py-3 px-8 rounded font-medium hover:bg-gray-200 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

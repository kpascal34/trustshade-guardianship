
import { Shield, UserCheck, Clock, FileSearch } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";

const Services = () => {
  const services = [
    {
      id: "door-supervision",
      title: "Door Supervision",
      icon: <div className="w-full flex items-center justify-center"><UserCheck className="h-6 w-6 text-blue-500" /></div>,
      description: "Licensed door supervisors for venues and events management.",
      imageSrc: "/Door-Sup.jpg"
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <div className="bg-blue-600 w-full h-32 flex items-center justify-center rounded"><Shield className="h-6 w-6 text-white" /></div>,
      description: "Professional security personnel providing 24/7 protection for your premises.",
      imageSrc: "/venue-security.jpg"
    },
    {
      id: "event-security",
      title: "Event Security",
      icon: <div className="w-full flex items-center justify-center"><Clock className="h-6 w-6 text-blue-500" /></div>,
      description: "Comprehensive security solutions for events of all sizes.",
      imageSrc: "/patrol-service.jpg"
    },
    {
      id: "risk-assessments",
      title: "Risk Assessment",
      icon: <div className="w-full flex items-center justify-center"><FileSearch className="h-6 w-6 text-blue-500" /></div>,
      description: "Expert security risk assessment and consultation services.",
      imageSrc: "/event-crowd-control.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Services Hero Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At Fortis Security, we provide tailored security services to meet your needs. 
          Our experienced team ensures that each solution offers the best security and 
          peace of mind.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

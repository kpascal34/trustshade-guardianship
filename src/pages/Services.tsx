
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
      imageSrc: "/lovable-uploads/614d7012-2040-428a-a012-309202dbbcf7.png",
      imagePosition: "object-bottom" // Adjust focus to bottom of image
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <div className="bg-blue-600 w-full h-32 flex items-center justify-center rounded"><Shield className="h-6 w-6 text-white" /></div>,
      description: "Professional security personnel providing 24/7 protection for your premises.",
      imageSrc: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
    },
    {
      id: "event-security",
      title: "Event Security",
      icon: <div className="w-full flex items-center justify-center"><Clock className="h-6 w-6 text-blue-500" /></div>,
      description: "Comprehensive security solutions for events of all sizes.",
      imageSrc: "/lovable-uploads/0e4c5c11-900c-415f-8342-77dc862a8dec.png"
    },
    {
      id: "risk-assessments",
      title: "Risk Assessment",
      icon: <div className="w-full flex items-center justify-center"><FileSearch className="h-6 w-6 text-blue-500" /></div>,
      description: "Expert security risk assessment and consultation services.",
      imageSrc: "/lovable-uploads/767234e9-6d8c-4d52-8d7a-f128af3e8eee.png"
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

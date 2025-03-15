
import { Shield, UserCheck, Clock } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      id: "door-supervision",
      title: "Door Supervision",
      icon: <UserCheck className="h-6 w-6 text-fortis-light-blue" />,
      description: "Licensed door supervisors for venues and events management.",
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <Shield className="h-6 w-6 text-fortis-light-blue" />,
      description: "Professional security personnel providing 24/7 protection for your premises.",
    },
    {
      id: "event-security",
      title: "Event Security",
      icon: <Clock className="h-6 w-6 text-fortis-light-blue" />,
      description: "Comprehensive security solutions for events of all sizes.",
    },
    {
      id: "risk-assessments",
      title: "Risk Assessments",
      icon: <Shield className="h-6 w-6 text-fortis-light-blue" />,
      description: "Expert security risk assessment and consultation services.",
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
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        {/* Image Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-fortis-dark-blue">Security in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/lovable-uploads/457f36e7-fea8-4df2-a62e-94d21299dea8.png"
              alt="Door Supervisor"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/lovable-uploads/8934e195-3312-49ed-9487-119bfc7dcbeb.png"
              alt="Event Security"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/lovable-uploads/d7b85158-9d60-42f3-a963-1d17bf3181a4.png"
              alt="Security Guard"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/lovable-uploads/0b42914c-24e4-41cd-92c2-a3d785dfcb78.png"
              alt="Stadium Security"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/lovable-uploads/1dc5798f-b3e5-425d-a6d0-3b9ac43c0e2a.png"
              alt="Event Security Staff"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="/lovable-uploads/7b1b9b72-4b5c-4a7f-881a-e5bf1bf0d970.png"
              alt="Venue Security"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

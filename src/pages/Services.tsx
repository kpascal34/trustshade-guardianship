
import { Shield, Users, BadgeCheck, FileText } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
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
      id: "risk-assessments",
      title: "Risk Assessment",
      icon: <FileText className="h-8 w-8" />,
      description: "Expert security risk assessment and consultation services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Services Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/lovable-uploads/be2753cb-1294-454f-9be4-216b820ed783.png" 
            alt="Security services background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            At Fortis Security, we provide tailored security services to meet your needs. 
            Our experienced team ensures that each solution offers the best security and 
            peace of mind.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
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
      </section>

      {/* Security Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Security Team in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/752946cd-c6fd-4a3b-bb77-81c318aa8f5d.png" 
                alt="Security staff at venue entrance" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/e4fd4279-f53c-4eb0-bfad-bde25d58e674.png" 
                alt="Security at sporting event" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/98d920b2-ea60-4f71-b3a4-38044b6ec27b.png" 
                alt="Event security" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/1582ea12-b03c-410b-99d5-04935df19b04.png" 
                alt="Security guard at venue" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/a87178e9-5eed-4417-a55f-dc58f00ccfd7.png" 
                alt="Stadium security" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/b7c3164f-b1af-4276-8bd5-89aa2cac72c9.png" 
                alt="Door supervisor" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Fortis Security</h2>
            <p className="text-gray-600 mb-12">
              We pride ourselves on providing exceptional security services with a focus on professionalism, 
              reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Licensed</h3>
              <p className="text-gray-600">All our security personnel are fully licensed and trained to the highest standards.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600">We offer a wide range of security services tailored to your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our team consists of experienced security professionals with expertise in various areas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import { Shield, Users, CalendarClock, FileSearch } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: "door-supervision",
    title: "Door Supervision",
    description: "Professional door supervisors for venues, clubs, and events. We ensure orderly entry and maintain a safe environment.",
    icon: <Shield className="h-8 w-8 text-fortis-light-blue" />,
    fullDescription: "Our SIA licensed door supervisors are trained to provide a professional, friendly yet firm approach to door security. They maintain safety at venues through access control, conflict management, and ensuring compliance with licensing regulations.",
  },
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    description: "Reliable security personnel protecting your property, assets, and people around the clock with vigilance and professionalism.",
    icon: <Users className="h-8 w-8 text-fortis-light-blue" />,
    fullDescription: "Our manned guarding services provide a visible security presence to deter criminal activity and protect your premises. All security officers are SIA licensed and trained to handle various situations while maintaining a professional appearance.",
  },
  {
    id: "event-security",
    title: "Event Security",
    description: "Comprehensive security solutions for events of all sizes, ensuring attendees enjoy a safe and secure experience.",
    icon: <CalendarClock className="h-8 w-8 text-fortis-light-blue" />,
    fullDescription: "From small corporate functions to large festivals, our event security team ensures the safety of attendees and staff. Services include crowd management, access control, emergency response planning, and VIP protection.",
  },
  {
    id: "risk-assessments",
    title: "Risk Assessments",
    description: "Detailed evaluation of potential security threats and vulnerabilities, with tailored recommendations to mitigate risks.",
    icon: <FileSearch className="h-8 w-8 text-fortis-light-blue" />,
    fullDescription: "Our experienced security consultants conduct thorough evaluations of your premises to identify potential vulnerabilities. Following the assessment, we provide detailed recommendations to enhance your security infrastructure and protocols.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Security Services"
        subtitle="Comprehensive security solutions tailored to your specific needs"
        backgroundImage="/services-hero.jpg"
        height="h-[60vh]"
      />

      {/* Services Overview */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Security Solutions We Offer</h2>
          <p className="section-subtitle">
            Fortis Security provides a range of professional security services to protect your people, property, and assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-start mb-4">
                <div className="bg-fortis-light-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-fortis-dark-blue">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 flex-grow">{service.fullDescription}</p>
              <a 
                href={`/services/${service.id}`} 
                className="mt-4 inline-block text-fortis-light-blue hover:text-fortis-dark-blue font-medium"
              >
                Learn more about {service.title} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-fortis-dark-blue mb-6 text-center">Our Approach to Security</h2>
            <p className="text-gray-600 mb-8 text-center">
              At Fortis Security, we believe that effective security is about more than just having a physical presence. It's about understanding your specific needs and creating tailored solutions that address them.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fortis-dark-blue mb-3">1. Consultation</h3>
                <p className="text-gray-600">
                  We begin by thoroughly understanding your security concerns, requirements, and objectives through detailed consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fortis-dark-blue mb-3">2. Assessment</h3>
                <p className="text-gray-600">
                  Our security experts conduct a comprehensive assessment of your premises, identifying potential vulnerabilities and risks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fortis-dark-blue mb-3">3. Custom Solution</h3>
                <p className="text-gray-600">
                  Based on our findings, we develop a tailored security solution that addresses your specific needs and challenges.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fortis-dark-blue mb-3">4. Implementation</h3>
                <p className="text-gray-600">
                  We deploy our trained security personnel and implement the agreed security measures with minimal disruption to your operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fortis-dark-blue mb-3">5. Ongoing Evaluation</h3>
                <p className="text-gray-600">
                  We continuously monitor and evaluate the effectiveness of our security services, making adjustments as necessary to ensure optimal protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fortis-dark-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom security solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of security experts is ready to help you develop a comprehensive security strategy tailored to your specific requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-fortis-light-blue hover:bg-white hover:text-fortis-dark-blue text-white font-semibold rounded-md transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

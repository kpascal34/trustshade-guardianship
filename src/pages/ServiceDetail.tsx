import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, Users, CalendarClock, FileSearch, CheckCircle } from "lucide-react";
import HeroSection from "../components/HeroSection";
import { Button } from "@/components/ui/button";

interface ServiceInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  benefits: string[];
  icon: JSX.Element;
  heroImage: string;
}

const serviceData: Record<string, ServiceInfo> = {
  "door-supervision": {
    id: "door-supervision",
    title: "Door Supervisors",
    subtitle: "Professional door supervisors for venues and events",
    description: [
      "At Fortis Security, we take pride in providing exceptional door supervision services. We distinguish ourselves through our commitment to excellence, reliability, and ongoing improvement.",
      "Customised Security Planning: We develop tailored security strategies for each client, considering venue requirements, peak times, and potential risks. This customised approach ensures adequate security while maintaining a welcoming atmosphere.",
      "Venue Integration: Our door supervisors work seamlessly with your staff and systems, enhancing operations while maintaining professional boundaries and clear communication.",
      "Professional Image: All our door supervisors are professionally uniform and maintain a neat appearance, enhancing your establishment's image while providing authoritative security."
    ],
    benefits: [
      "Enhanced Patron Safety and Confidence",
      "Enhanced Security",
      "Improved Professional Reputation",
      "Cost-Effective Risk Management",
      "Increased Operational Efficiency",
      "Greater Peace of Mind",
      "Compliance with Licensing Requirements",
      "Professional and Courteous Customer Service"
    ],
    icon: <Shield className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/lovable-uploads/0a2b4052-f010-4350-b1cf-61d025b85f38.png"
  },
  "manned-guarding": {
    id: "manned-guarding",
    title: "Manned and Static Guarding Services",
    subtitle: "Reliable security personnel protecting your property and assets",
    description: [
      "At Fortis Security, we set a high standard for manned and static guarding services. We focus on professionalism, training, and reliability to provide excellent security solutions.",
      "Comprehensive Coverage: Our static guards stay alert by working from strategically positioned posts and performing regular patrols. We use advanced monitoring systems and keep detailed logs of all activities and incidents to ensure no security breach goes unnoticed.",
      "Professional Personnel: All security officers go through thorough vetting and receive extensive training that exceeds industry standards. Our guards wear professional uniforms and maintain high presentation standards, reflecting the quality of our service.",
      "Flexible Deployment: We provide security solutions that can adjust to your needs, whether you need 24/7 coverage or security for specific hours. Our team can work with your existing security setup or create new protocols.",
      "Advanced Communication Systems: Our guards use modern communication devices to respond quickly to any security situation. Regular check-ins and real-time reports keep everyone informed about the security status and any incidents.",
      "Custom Security Protocols: After careful site assessments, we create security procedures that fit your specific needs. These include managing access control, screening visitors, responding to emergencies, and conducting regular security audits."
    ],
    benefits: [
      "Enhanced Security Presence",
      "Risk Mitigation",
      "Operational Support",
      "Cost Effectiveness",
      "Customised Reporting",
      "Peace of Mind"
    ],
    icon: <Users className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
  },
  "event-security": {
    id: "event-security",
    title: "Event Security",
    subtitle: "Comprehensive security solutions for events of all sizes",
    description: [
      "From corporate functions to large festivals, our event security team ensures the safety and security of attendees, staff, and performers. We provide comprehensive security planning and implementation for events of all sizes.",
      "Our event security services include crowd management, access control, bag searches, emergency response planning, and VIP protection. We work closely with event organizers to develop a tailored security plan that meets the specific requirements of each event.",
      "All our event security staff are SIA licensed and experienced in handling large crowds, managing queues, and responding to incidents quickly and effectively while maintaining a friendly and professional approach."
    ],
    benefits: [
      "Comprehensive event risk assessment",
      "Crowd management and crowd control",
      "Controlled entry and exit points",
      "Emergency response coordination",
      "VIP and asset protection",
      "Reduction in theft and property damage",
      "Enhanced attendee experience and safety"
    ],
    icon: <CalendarClock className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/event-security.jpg"
  },
  "risk-assessments": {
    id: "risk-assessments",
    title: "Risk Assessments",
    subtitle: "Detailed evaluation of security threats and vulnerabilities",
    description: [
      "Our security consultants conduct thorough risk assessments to identify potential vulnerabilities in your premises, operations, and existing security measures. This proactive approach helps prevent security breaches before they occur.",
      "Following the assessment, we provide detailed recommendations to enhance your security infrastructure and protocols. These might include improvements to physical security, procedural changes, or staff training requirements.",
      "Our risk assessment reports are comprehensive yet practical, prioritizing recommendations based on risk level and implementation cost. We can also assist with implementing the recommended security enhancements."
    ],
    benefits: [
      "Identification of security vulnerabilities",
      "Prioritized security recommendations",
      "Cost-effective security planning",
      "Compliance with insurance requirements",
      "Reduced likelihood of security incidents",
      "Enhanced protection of assets and people",
      "Expert security advice from industry professionals"
    ],
    icon: <FileSearch className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/risk-assessment.jpg"
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId as string];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild className="bg-fortis-light-blue hover:bg-fortis-dark-blue">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.heroImage}
        height="h-[60vh]"
      />

      {/* Service Details */}
      <section className="section-container">
        <div className="mb-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-fortis-light-blue hover:text-fortis-dark-blue transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-fortis-light-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-fortis-dark-blue">{service.title}</h2>
            </div>

            <div className="space-y-6">
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600">{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-fortis-dark-blue mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fortis-light-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button 
                  asChild 
                  className="w-full bg-fortis-light-blue hover:bg-fortis-dark-blue"
                >
                  <Link to="/contact">Enquire About This Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-fortis-dark-blue mb-8 text-center">
            Our Other Security Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(serviceData)
              .filter(s => s.id !== service.id)
              .map((relatedService) => (
                <Link 
                  key={relatedService.id} 
                  to={`/services/${relatedService.id}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-fortis-light-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-lg font-bold text-fortis-dark-blue">{relatedService.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{relatedService.subtitle}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fortis-dark-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your security?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our {service.title.toLowerCase()} services can benefit your organization.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-fortis-light-blue hover:bg-white hover:text-fortis-dark-blue"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

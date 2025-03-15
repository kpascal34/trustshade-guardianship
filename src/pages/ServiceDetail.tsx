
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
    title: "Door Supervision",
    subtitle: "Professional door supervisors for venues and events",
    description: [
      "Our SIA licensed door supervisors are highly trained professionals who ensure the safety and security of venues, their staff, and patrons. They provide a friendly yet authoritative presence, controlling access and maintaining order.",
      "Door supervisors are a legal requirement for many licensed premises. Our team ensures full compliance with licensing regulations while providing exceptional customer service.",
      "All our door supervisors undergo extensive training in conflict management, first aid, and customer service to handle various situations effectively and professionally."
    ],
    benefits: [
      "Controlled access to your venue",
      "Prevention of underage entry",
      "Conflict management and de-escalation",
      "Reduced incidents and liability",
      "Enhanced customer experience",
      "Regulatory compliance",
      "Professional appearance and conduct"
    ],
    icon: <Shield className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/door-supervision.jpg"
  },
  "manned-guarding": {
    id: "manned-guarding",
    title: "Manned Guarding",
    subtitle: "Reliable security personnel protecting your property and assets",
    description: [
      "Our manned guarding services provide a visible security presence that deters criminal activity and protects your premises around the clock. All of our security officers are SIA licensed and professionally trained.",
      "We offer static guarding, mobile patrols, and reception security services tailored to your specific needs. Our guards can monitor access, conduct regular patrols, respond to alarms, and maintain detailed logs of all activities and incidents.",
      "Our security officers are trained to handle various situations, from minor incidents to serious emergencies, while always maintaining a professional demeanor and appearance."
    ],
    benefits: [
      "Visible deterrent to potential intruders",
      "Immediate response to security incidents",
      "Regular patrols of premises",
      "Access control management",
      "Detailed incident reporting",
      "Reduced insurance premiums",
      "Peace of mind for business owners and staff"
    ],
    icon: <Users className="h-12 w-12 text-fortis-light-blue" />,
    heroImage: "/manned-guarding.jpg"
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

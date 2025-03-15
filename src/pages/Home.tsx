
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  CalendarClock, 
  FileSearch,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const services = [
  {
    id: "door-supervision",
    title: "Door Supervision",
    description: "Professional door supervisors for venues, clubs, and events. We ensure orderly entry and maintain a safe environment.",
    icon: <Shield className="h-8 w-8 text-fortis-light-blue" />,
  },
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    description: "Reliable security personnel protecting your property, assets, and people around the clock with vigilance and professionalism.",
    icon: <Users className="h-8 w-8 text-fortis-light-blue" />,
  },
  {
    id: "event-security",
    title: "Event Security",
    description: "Comprehensive security solutions for events of all sizes, ensuring attendees enjoy a safe and secure experience.",
    icon: <CalendarClock className="h-8 w-8 text-fortis-light-blue" />,
  },
  {
    id: "risk-assessments",
    title: "Risk Assessments",
    description: "Detailed evaluation of potential security threats and vulnerabilities, with tailored recommendations to mitigate risks.",
    icon: <FileSearch className="h-8 w-8 text-fortis-light-blue" />,
  },
];

const testimonials = [
  {
    quote: "Fortis Security provided exceptional service for our annual corporate event. Their team was professional, courteous, and highly attentive to our security needs.",
    author: "Jane Smith",
    position: "Event Manager",
    company: "Global Enterprises",
  },
  {
    quote: "We've been using Fortis for our venue security for the past three years. Their door supervisors are always punctual, well-presented, and handle difficult situations with impressive professionalism.",
    author: "Michael Johnson",
    position: "Operations Director",
    company: "Nightlife Venues Ltd",
  },
  {
    quote: "The risk assessment conducted by Fortis Security was comprehensive and provided valuable insights. They identified security vulnerabilities we hadn't considered and implemented effective solutions.",
    author: "Sarah Williams",
    position: "Facilities Manager",
    company: "Tech Innovations Inc",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Your Security is Our Priority"
        subtitle="Professional security services delivered with trust and integrity"
        ctaText="Get a Free Quote"
      />

      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Fortis Security offers comprehensive security solutions tailored to your specific needs.
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

        <div className="text-center mt-10">
          <Button 
            asChild 
            variant="outline" 
            className="border-fortis-light-blue text-fortis-dark-blue hover:bg-fortis-light-blue hover:text-white group"
          >
            <Link to="/services" className="flex items-center">
              View All Services
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">Why Choose Fortis Security</h2>
            <p className="section-subtitle">
              We are committed to providing superior security services with a foundation built on trust and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-fortis-light-blue mr-2" />
                <h3 className="text-xl font-bold text-fortis-dark-blue">Highly Trained Staff</h3>
              </div>
              <p className="text-gray-600">
                Our security professionals undergo extensive training and maintain all required certifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-fortis-light-blue mr-2" />
                <h3 className="text-xl font-bold text-fortis-dark-blue">24/7 Availability</h3>
              </div>
              <p className="text-gray-600">
                Round-the-clock service ensures your security needs are met at any time of day or night.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-fortis-light-blue mr-2" />
                <h3 className="text-xl font-bold text-fortis-dark-blue">Customized Solutions</h3>
              </div>
              <p className="text-gray-600">
                We develop tailored security strategies to address your specific requirements and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fortis-dark-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your security?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how Fortis Security can provide tailored security solutions for your needs.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-fortis-light-blue hover:bg-white hover:text-fortis-dark-blue"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

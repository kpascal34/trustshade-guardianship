
import { Link } from "react-router-dom";
import { Shield, Clock, UserCheck, FileSearch, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const testimonials = [
  {
    quote: "Michael is the best bouncer he really looked after me and my friends when we were drunk and made sure we didn't get any trouble.",
    author: "Poppy"
  },
  {
    quote: "Love everything about the night, but mainly the staff, best staff I've ever had, big shout out to Kingsley for looking after me, most caring staff in Leeds!",
    author: "Paul"
  },
  {
    quote: "This company staff are always really great about handling things without being overly aggressive. They're really supportive when you need help.",
    author: "Morgan"
  },
  {
    quote: "Professional and reliable service. The team is always practical and handles situations with expertise. Creating a relaxing environment for our customers.",
    author: "Ryan"
  }
];

const services = [
  {
    id: "door-supervision",
    title: "Door Supervision",
    description: "Licensed SIA door supervisors for venues and events in Yorkshire and Manchester.",
    imageSrc: "/lovable-uploads/0a2b4052-f010-4350-b1cf-61d025b85f38.png"
  },
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    description: "Professional security personnel providing 24/7 protection for Yorkshire businesses.",
    imageSrc: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
  },
  {
    id: "event-security",
    title: "Event Security",
    description: "Comprehensive security solutions for events in Yorkshire and Greater Manchester.",
    imageSrc: "/lovable-uploads/0e4c5c11-900c-415f-8342-77dc862a8dec.png"
  },
  {
    id: "risk-assessments",
    title: "Risk Assessment",
    description: "Expert security risk assessment and consultation for Yorkshire businesses.",
    imageSrc: "/lovable-uploads/767234e9-6d8c-4d52-8d7a-f128af3e8eee.png"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-center">
          <div className="flex justify-center mb-6 w-full max-w-[240px]">
            <img
              src="/lovable-uploads/85e55acd-e80c-4729-9c4e-2ab194a18f37.png"
              alt="Fortis Security Logo - Professional Security Services in Yorkshire"
              className="h-auto w-full"
              width="240"
              height="180"
              loading="eager"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-center md:text-center">
            Professional Security Services in Yorkshire & Manchester
          </h1>
          <p className="text-lg mb-8 text-gray-700 text-center md:text-center">
            At Fortis Security, we specialise in bespoke security services tailored to your needs. 
            Operating across Yorkshire and Manchester, we ensure a safe environment for businesses and events.
          </p>
          <div className="flex justify-center w-full">
            <Link
              to="/contact"
              className="inline-block bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors px-[37px]"
              aria-label="Contact Fortis Security for professional security services"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {[
            {
              src: "/lovable-uploads/90157812-0db3-45cb-bf57-132c99a51ae1.jpg",
              alt: "Door supervisor at Yorkshire venue entry - Fortis Security"
            },
            {
              src: "/lovable-uploads/9af25a0f-05e0-4ecc-9585-7c8f91490297.png",
              alt: "Security guard at gated Manchester venue - Fortis Security"
            },
            {
              src: "/lovable-uploads/10e86f82-63d2-409b-a59b-e8fd392779e5.png",
              alt: "Professional security personnel at Yorkshire venue entrance"
            },
            {
              src: "/lovable-uploads/35720d8f-0822-49a9-85e5-cc304a038298.png",
              alt: "Event security staff in Manchester - Fortis Security"
            },
            {
              src: "/lovable-uploads/53d91845-5bd0-443b-b4df-262e7d65185b.png",
              alt: "Professional security personnel at boxing event in Yorkshire"
            },
            {
              src: "/lovable-uploads/96449b0d-cc0b-4f46-9807-52a3de0fecef.png",
              alt: "Licensed security guard at Yorkshire venue perimeter"
            }
          ].map((image, index) => (
            <div key={index} className="w-full h-48">
              <AspectRatio ratio={4/3} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full rounded-lg shadow-md object-cover"
                  width="300"
                  height="225"
                  loading={index <= 1 ? "eager" : "lazy"}
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Security Services in Yorkshire & Manchester</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Discover our comprehensive range of professional security services tailored for businesses and events across Yorkshire and Greater Manchester.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={<></>}
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-fortis-dark-blue hover:bg-fortis-light-blue">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-center">
            <img
              src="/lovable-uploads/4588449b-9ad4-4bf5-a62f-aeaf3f168c55.png"
              alt="Fortis Security Logo - Trusted Security Provider in Yorkshire"
              className="max-w-xs mx-auto"
              width="320"
              height="240"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Fortis Security</h2>
            <p className="mb-4">
              At Fortis, we have extensive experience as a leading security company in
              Yorkshire and Greater Manchester. Our commitment to excellence
              distinguishes us in a competitive market and allows us to provide outstanding
              service.
            </p>
            <p>
              We aim to positively change the security sector by prioritising fair remuneration and better working 
              conditions for our staff. Our investment in training and ongoing support fosters a positive workplace 
              culture, attracting and retaining top talent to benefit our clients and communities.
            </p>
            <div className="mt-6">
              <Link to="/about" className="text-fortis-dark-blue font-semibold hover:underline">
                Learn more about our security expertise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">What Our Clients Say</h2>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Read testimonials from clients who have experienced our professional security services in Yorkshire and Manchester.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Fortis Security</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss your security needs in Yorkshire and Greater Manchester.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-neutral-50">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-fortis-dark-blue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">077762 853255</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-fortis-dark-blue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700">info@fortissecured.co.uk</p>
              </div>
              
              <div className="p-6 rounded-lg shadow-md text-center my-0 py-[20px] bg-slate-100">
                <div className="mx-auto bg-fortis-dark-blue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-700">Yorkshire & Greater Manchester</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild className="bg-fortis-dark-blue hover:bg-fortis-light-blue">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

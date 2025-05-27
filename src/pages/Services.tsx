
import { Shield, UserCheck, Clock, FileSearch, MapPin } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Services = () => {
  const services = [
    {
      id: "door-supervision",
      title: "Door Supervision",
      icon: <div className="w-full flex items-center justify-center"><UserCheck className="h-6 w-6 text-blue-500" /></div>,
      description: "Licensed SIA door supervisors for venues and events in Yorkshire and Manchester.",
      imageSrc: "/lovable-uploads/0a2b4052-f010-4350-b1cf-61d025b85f38.png",
      imagePosition: "object-center" // Default to center for this new image
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <div className="bg-blue-600 w-full h-32 flex items-center justify-center rounded"><Shield className="h-6 w-6 text-white" /></div>,
      description: "Professional security personnel providing 24/7 protection for Yorkshire businesses.",
      imageSrc: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
    },
    {
      id: "event-security",
      title: "Event Security",
      icon: <div className="w-full flex items-center justify-center"><Clock className="h-6 w-6 text-blue-500" /></div>,
      description: "Comprehensive security solutions for events of all sizes across Yorkshire and Manchester.",
      imageSrc: "/lovable-uploads/0e4c5c11-900c-415f-8342-77dc862a8dec.png"
    },
    {
      id: "risk-assessments",
      title: "Risk Assessment",
      icon: <div className="w-full flex items-center justify-center"><FileSearch className="h-6 w-6 text-blue-500" /></div>,
      description: "Expert security risk assessment and consultation services for Yorkshire businesses.",
      imageSrc: "/lovable-uploads/767234e9-6d8c-4d52-8d7a-f128af3e8eee.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Professional Security Services in Yorkshire & Manchester | Fortis Security</title>
        <meta name="description" content="Professional security services across Yorkshire and Greater Manchester. Offering door supervision, manned guarding, event security, and risk assessments." />
        <meta name="keywords" content="security services Yorkshire, security services Manchester, door supervision, manned guarding, event security, risk assessment" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/services" />
        <meta property="og:title" content="Professional Security Services in Yorkshire & Manchester | Fortis Security" />
        <meta property="og:description" content="Professional security services across Yorkshire and Greater Manchester. Offering door supervision, manned guarding, event security, and risk assessments." />
        <meta property="og:url" content="https://www.fortissecured.co.uk/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Security Services in Yorkshire & Manchester | Fortis Security" />
        <meta name="twitter:description" content="Professional security services across Yorkshire and Greater Manchester." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Services Hero Section */}
      <section className="py-12 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Security Services in Yorkshire & Manchester</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At Fortis Security, we provide tailored security services to meet your needs across Yorkshire and Greater Manchester. 
          Our experienced team ensures that each solution offers the best security and 
          peace of mind.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Our Professional Security Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Yorkshire</h3>
              <p className="mb-4">We provide comprehensive security services throughout Yorkshire, including Leeds, Sheffield, York, Bradford, and Huddersfield.</p>
              <p className="mb-4">From door supervision to manned guarding, our professional security personnel ensure safety and peace of mind for businesses and venues across the region.</p>
              <div className="text-center mt-4">
                <Link to="/locations/yorkshire" className="inline-block bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700 transition-colors">
                  Yorkshire Security Services
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Greater Manchester</h3>
              <p className="mb-4">Our security services extend to Greater Manchester, covering Manchester city centre, Salford, Bolton, Rochdale, Oldham, and surrounding areas.</p>
              <p className="mb-4">We offer tailored security solutions for events, venues, and businesses throughout the Greater Manchester region.</p>
              <div className="text-center mt-4">
                <Link to="/locations/manchester" className="inline-block bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700 transition-colors">
                  Manchester Security Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us About Our Security Services</h2>
            <p className="text-lg mb-8 text-center">
              Get in touch to discuss your security needs in Yorkshire and Manchester
            </p>
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

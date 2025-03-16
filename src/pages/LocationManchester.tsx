
import { Link } from "react-router-dom";
import { Shield, UserCheck, Clock, FileSearch, MapPin } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const LocationManchester = () => {
  const services = [
    {
      id: "door-supervision",
      title: "Door Supervision in Manchester",
      description: "Professional SIA licensed door supervisors for venues throughout Greater Manchester, including city centre, Salford, and Stockport.",
      imageSrc: "/lovable-uploads/0a2b4052-f010-4350-b1cf-61d025b85f38.png"
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding in Manchester",
      description: "Expert security personnel providing 24/7 protection for businesses across Greater Manchester.",
      imageSrc: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
    },
    {
      id: "event-security",
      title: "Event Security in Manchester",
      description: "Comprehensive security solutions for events of all sizes throughout Greater Manchester.",
      imageSrc: "/lovable-uploads/0e4c5c11-900c-415f-8342-77dc862a8dec.png"
    },
    {
      id: "risk-assessments",
      title: "Risk Assessment in Manchester",
      description: "Thorough security risk assessments for businesses in Manchester city centre and surrounding areas.",
      imageSrc: "/lovable-uploads/767234e9-6d8c-4d52-8d7a-f128af3e8eee.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Security Services in Manchester | Fortis Security</title>
        <meta name="description" content="Professional security services in Greater Manchester including Manchester city centre, Salford, Bolton and Stockport. Trusted local security guards, door supervision and event security." />
        <meta name="keywords" content="security Manchester, security guards Manchester, door security Salford, event security Bolton, security services Stockport, Manchester security company" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/locations/manchester" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Manchester</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Location Hero Section */}
      <section className="py-12 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Security Services in Manchester</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Fortis Security provides professional security services throughout Greater Manchester, including Manchester city centre, 
          Salford, Bolton, Stockport, and Oldham. Our local security experts understand the unique security 
          challenges of Manchester businesses and venues.
        </p>
        
        <div className="bg-slate-100 p-6 rounded-lg mb-12">
          <div className="flex items-start mb-4">
            <MapPin className="h-6 w-6 text-slate-700 mr-2 mt-1" />
            <h2 className="text-2xl font-bold">Areas We Serve in Manchester</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Manchester City Centre</h3>
              <p>Comprehensive security for venues and businesses in central Manchester.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Salford</h3>
              <p>Professional security services throughout Salford and MediaCity.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Bolton</h3>
              <p>Full security coverage for businesses and events in Bolton.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Stockport</h3>
              <p>Tailored security solutions for Stockport venues and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Our Security Services in Manchester</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={<></>}
              imageSrc={service.imageSrc}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* About Manchester Security */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Fortis Security in Manchester</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Local Manchester Expertise</h3>
              <p className="mb-6">
                Our security personnel are familiar with Manchester and understand the specific security challenges of the city and surrounding areas. 
                We have extensive experience providing security for local businesses, venues, and events across Manchester city centre, 
                Salford, Bolton, and throughout Greater Manchester.
              </p>
              <h3 className="text-xl font-bold mb-4">Tailored to Manchester Businesses</h3>
              <p>
                Whether you need door supervision for a Northern Quarter venue, event security for a concert at Manchester Arena, 
                or manned guarding for a Trafford Centre retail store, our security solutions are specifically tailored to 
                meet the unique requirements of Manchester businesses and venues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Greater Manchester Coverage</h3>
              <p className="mb-6">
                We provide security services throughout Greater Manchester, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Manchester city centre and surrounding districts</li>
                <li>Salford, Trafford, and MediaCity</li>
                <li>Bolton, Bury, and Rochdale</li>
                <li>Stockport, Oldham, and Tameside</li>
              </ul>
              <p>
                No matter where you are in Greater Manchester, Fortis Security can provide professional security services 
                tailored to your specific needs.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="bg-slate-600 text-white py-2 px-6 rounded hover:bg-slate-700 transition-colors">
              Contact Our Manchester Security Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationManchester;

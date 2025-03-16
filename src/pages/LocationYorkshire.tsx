
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

const LocationYorkshire = () => {
  const services = [
    {
      id: "door-supervision",
      title: "Door Supervision in Yorkshire",
      description: "Professional SIA licensed door supervisors for venues across Yorkshire, including Leeds, Sheffield, York, and Bradford.",
      imageSrc: "/lovable-uploads/0a2b4052-f010-4350-b1cf-61d025b85f38.png"
    },
    {
      id: "manned-guarding",
      title: "Manned Guarding in Yorkshire",
      description: "Expert security personnel providing 24/7 protection for businesses throughout Yorkshire.",
      imageSrc: "/lovable-uploads/fcbc0118-0f7d-4509-a838-02840cbcd291.png"
    },
    {
      id: "event-security",
      title: "Event Security in Yorkshire",
      description: "Comprehensive security solutions for events of all sizes across Yorkshire.",
      imageSrc: "/lovable-uploads/0e4c5c11-900c-415f-8342-77dc862a8dec.png"
    },
    {
      id: "risk-assessments",
      title: "Risk Assessment in Yorkshire",
      description: "Thorough security risk assessments for businesses in Leeds, Sheffield, York, and throughout Yorkshire.",
      imageSrc: "/lovable-uploads/767234e9-6d8c-4d52-8d7a-f128af3e8eee.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Security Services in Yorkshire | Fortis Security</title>
        <meta name="description" content="Professional security services in Yorkshire including Leeds, Sheffield, York and Bradford. Trusted local security guards, door supervision and event security." />
        <meta name="keywords" content="security Yorkshire, security guards Leeds, door security Sheffield, event security York, security services Bradford, Yorkshire security company" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/locations/yorkshire" />
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
              <BreadcrumbPage>Yorkshire</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Location Hero Section */}
      <section className="py-12 container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Security Services in Yorkshire</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Fortis Security provides professional security services throughout Yorkshire, including Leeds, Sheffield, York, Bradford, and Huddersfield. 
          Our local security experts understand the unique security challenges of Yorkshire businesses and venues.
        </p>
        
        <div className="bg-slate-100 p-6 rounded-lg mb-12">
          <div className="flex items-start mb-4">
            <MapPin className="h-6 w-6 text-slate-700 mr-2 mt-1" />
            <h2 className="text-2xl font-bold">Areas We Serve in Yorkshire</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Leeds</h3>
              <p>Full security coverage across Leeds city centre and surrounding areas.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Sheffield</h3>
              <p>Security services throughout Sheffield including venue security.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">York</h3>
              <p>Specialized security for historic venues and tourism sites in York.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Bradford</h3>
              <p>Comprehensive security solutions for Bradford businesses and events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Our Security Services in Yorkshire</h2>
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

      {/* About Yorkshire Security */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Fortis Security in Yorkshire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Local Security Expertise</h3>
              <p className="mb-6">
                Our security personnel are from Yorkshire and understand the specific security challenges of the region. 
                We have extensive experience providing security for local businesses, venues, and events across Leeds, Sheffield, 
                York, Bradford, and throughout Yorkshire.
              </p>
              <h3 className="text-xl font-bold mb-4">Tailored to Yorkshire Businesses</h3>
              <p>
                Whether you need door supervision for a Leeds nightclub, event security for a Sheffield concert, 
                or manned guarding for a York retail store, our security solutions are specifically tailored to 
                meet the unique requirements of Yorkshire businesses and venues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Yorkshire Coverage</h3>
              <p className="mb-6">
                We provide security services throughout Yorkshire, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Leeds and West Yorkshire</li>
                <li>Sheffield and South Yorkshire</li>
                <li>York and North Yorkshire</li>
                <li>Bradford, Huddersfield, and surrounding areas</li>
              </ul>
              <p>
                No matter where you are in Yorkshire, Fortis Security can provide professional security services 
                tailored to your specific needs.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="bg-slate-600 text-white py-2 px-6 rounded hover:bg-slate-700 transition-colors">
              Contact Our Yorkshire Security Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationYorkshire;

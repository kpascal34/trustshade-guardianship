
import { Shield, Zap, Users } from "lucide-react";
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

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Fortis Security | Professional Security in Yorkshire & Manchester</title>
        <meta name="description" content="Learn about Fortis Security, Yorkshire's trusted provider of professional security services across Yorkshire and Greater Manchester. Offering door supervision, manned guarding, and event security." />
        <meta name="keywords" content="about Fortis Security, professional security Yorkshire, security company Manchester, door supervision, event security" />
        <link rel="canonical" href="https://www.fortissecured.co.uk/about" />
        <meta property="og:title" content="About Fortis Security | Professional Security in Yorkshire & Manchester" />
        <meta property="og:description" content="Learn about Fortis Security, Yorkshire's trusted provider of professional security services across Yorkshire and Greater Manchester." />
        <meta property="og:url" content="https://www.fortissecured.co.uk/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Fortis Security | Professional Security in Yorkshire & Manchester" />
        <meta name="twitter:description" content="Learn about Fortis Security, Yorkshire's trusted provider of professional security services across Yorkshire and Greater Manchester." />
      </Helmet>
      
      <section className="container mx-auto px-4 py-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl font-bold mb-6 text-center">About Fortis Security</h1>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Learn about our professional security services in Yorkshire and Greater Manchester
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Our Security Expertise</h2>
            <p className="text-lg text-center md:text-left mb-6">
              Fortis Security is a leading service provider dedicated to delivering exceptional
              protection and peace of mind to our clients. With years of experience and a
              dedicated team of professionals, we ensure the highest security standards
              across all our services.
            </p>
            
            <p className="text-lg text-center md:text-left mb-6">
              We are committed to offering competitive wages that reflect our employees'
              hard work and expertise while upholding the highest safety standards for the
              properties we protect and the clients we serve. We achieve this by utilising
              cutting-edge security technologies and proven techniques. Our collaborative
              environment encourages open communication and feedback between our staff
              and clients.
            </p>
            
            <p className="text-lg text-center md:text-left mb-6">
              Our primary goal is to deliver outstanding service through our dedicated team,
              which is trained in industry best practices and participates in continuous
              professional development opportunities. Investing in our employees ensures
              they are well-equipped to adapt to the evolving security landscape and provide
              top-tier service to our clientele. At Fortis Security, a secure environment is built
              on mutual respect, dedication, and a commitment to excellence.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/locations/yorkshire" className="text-fortis-dark-blue font-semibold hover:underline">
                Security services in Yorkshire →
              </Link>
              <Link to="/locations/manchester" className="text-fortis-dark-blue font-semibold hover:underline">
                Security services in Manchester →
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              alt="Fortis Security Team of professional security personnel in Yorkshire" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
              src="/lovable-uploads/00c9c2bd-d105-401d-b7a7-74e0d049c000.jpg"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
              <p className="text-gray-600">Highly trained and certified security personnel serving Yorkshire and Manchester</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock security services and support for businesses across Yorkshire and Manchester</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Years of security industry expertise and knowledge in the Yorkshire and Manchester regions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

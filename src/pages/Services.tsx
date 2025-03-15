
import { Link } from "react-router-dom";
import { MapPin, Shield, Clock, UserCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: <Shield className="h-6 w-6 text-white" />,
      description: "Professional security personnel providing 24/7 protection for your premises.",
      color: "bg-blue-600",
    },
    {
      id: "door-supervision",
      title: "Door Supervision",
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      description: "Licensed door supervisors for venues and events management.",
    },
    {
      id: "event-security",
      title: "Event Security",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      description: "Comprehensive security solutions for events of all sizes.",
    },
    {
      id: "risk-assessment",
      title: "Risk Assessment",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      description: "Expert security risk assessment and consultation services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div></div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/services" className="text-white font-bold">Services</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/login" className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Log In</Link>
          </div>
        </div>
      </header>

      {/* Services Hero Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At Fortis Security, we provide tailored security services to meet your needs. 
          Our experienced team ensures that each solution offers the best security and 
          peace of mind.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className={`mb-4 ${index === 0 ? service.color : 'bg-gray-100'} w-full h-40 flex items-center justify-center rounded-md`}>
                  {index === 0 ? (
                    service.icon
                  ) : (
                    <img src={`/placeholder.svg`} alt={service.title} className="h-6 w-6" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/cookies-policy" className="text-gray-300 hover:text-white">Cookies Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Yorkshire & Greater Manchester</span>
                </li>
                <li>info@fortissecured.co.uk</li>
                <li>077762 853255</li>
                <li className="flex space-x-2 mt-4">
                  <a href="#" className="bg-blue-800 p-1 rounded">
                    <span className="sr-only">Facebook</span>
                    <div className="h-4 w-4 bg-white"></div>
                  </a>
                  <a href="#" className="bg-blue-400 p-1 rounded">
                    <span className="sr-only">Twitter</span>
                    <div className="h-4 w-4 bg-white"></div>
                  </a>
                  <a href="#" className="bg-blue-600 p-1 rounded">
                    <span className="sr-only">LinkedIn</span>
                    <div className="h-4 w-4 bg-white"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2025 Fortis Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;

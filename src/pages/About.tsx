
import { Shield, BadgeCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/lovable-uploads/1582ea12-b03c-410b-99d5-04935df19b04.png" 
            alt="Security professional" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fortis Security</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            A dedicated team of security professionals committed to providing exceptional service.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Fortis Security is a leading service provider dedicated to delivering exceptional
              protection and peace of mind to our clients. With years of experience and a
              dedicated team of professionals, we ensure the highest security standards
              across all our services.
            </p>
            
            <p className="text-lg mb-6">
              We are committed to offering competitive wages that reflect our employees'
              hard work and expertise while upholding the highest safety standards for the
              properties we protect and the clients we serve. We achieve this by utilising
              cutting-edge security technologies and proven techniques. Our collaborative
              environment encourages open communication and feedback between our staff
              and clients.
            </p>
            
            <p className="text-lg">
              Our primary goal is to deliver outstanding service through our dedicated team,
              which is trained in industry best practices and participates in continuous
              professional development opportunities. Investing in our employees ensures
              they are well-equipped to adapt to the evolving security landscape and provide
              top-tier service to our clientele. At Fortis Security, a secure environment is built
              on mutual respect, dedication, and a commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img 
                src="/lovable-uploads/b7c3164f-b1af-4276-8bd5-89aa2cac72c9.png"
                alt="Security professional" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/6ef64e34-56f1-43e7-8113-743151f38524.png"
                alt="Event security" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="col-span-2">
              <img 
                src="/lovable-uploads/be2753cb-1294-454f-9be4-216b820ed783.png"
                alt="Fortis Security Team" 
                className="rounded-lg shadow-lg w-full h-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-4">Professional Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards of professionalism in all our operations, ensuring that our clients receive exceptional service at all times.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <BadgeCheck className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">Our clients can depend on us to deliver consistent, reliable security services, no matter the circumstances or challenges faced.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-4">Client Satisfaction</h3>
              <p className="text-gray-600">We prioritize the needs and satisfaction of our clients, working closely with them to ensure that their security requirements are met effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-lg mb-8">
              Contact our team today to discuss your security needs and find out how we can help protect your business, events, or premises.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-black py-3 px-8 rounded font-medium hover:bg-gray-200 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

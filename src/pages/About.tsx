
import { Shield, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose max-w-none">
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
            
            <p className="text-lg text-center md:text-left">
              Our primary goal is to deliver outstanding service through our dedicated team,
              which is trained in industry best practices and participates in continuous
              professional development opportunities. Investing in our employees ensures
              they are well-equipped to adapt to the evolving security landscape and provide
              top-tier service to our clientele. At Fortis Security, a secure environment is built
              on mutual respect, dedication, and a commitment to excellence.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/90d901a8-50b5-4b12-8b30-6df65c2e9195.png"
              alt="Fortis Security Team" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
              <p className="text-gray-600">Highly trained and certified security personnel</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock security services and support</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Years of industry expertise and knowledge</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

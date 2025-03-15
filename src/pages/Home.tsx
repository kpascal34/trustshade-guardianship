
import { Link } from "react-router-dom";
import { Shield, Clock, UserCheck, FileSearch } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    quote: "Michael is the best bouncer he really looked after me and my friends when we were drunk and made sure we didn't get any trouble.",
    author: "Poppy",
  },
  {
    quote: "Love everything about the night, but mainly the staff, best staff I've ever had, big shout out to Kingsley for looking after me, most caring staff in Leeds!",
    author: "Paul",
  },
  {
    quote: "This company staff are always really great about handling things without being overly aggressive. They're really supportive when you need help.",
    author: "Morgan",
  },
  {
    quote: "Professional and reliable service. The team is always practical and handles situations with expertise. Creating a relaxing environment for our customers.",
    author: "Ryan",
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Your Trusted Partner in Security Solutions
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            At Fortis Security, we specialize in bespoke security services 
            tailored to your needs. Operating across Yorkshire and 
            Manchester, we ensure a safe environment for businesses and 
            events.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-black text-white py-3 px-8 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            FOLLOW US
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img 
              src="/lovable-uploads/358ef451-408f-420f-ab7a-d6c124a1d2ea.png" 
              alt="Modern surveillance monitoring center" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
            <p className="text-sm text-center mt-2">Modern surveillance monitoring center</p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/90d901a8-50b5-4b12-8b30-6df65c2e9195.png" 
              alt="Professional venue security team" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
            <p className="text-sm text-center mt-2">Professional venue security team</p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/42a457dd-f80a-48ed-9113-048f186d77b1.png" 
              alt="Security patrol service in action" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
            <p className="text-sm text-center mt-2">Security patrol service in action</p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/ecd5bc12-c538-48d1-84dc-c781cb06e7c0.png" 
              alt="Corporate security solutions" 
              className="w-full h-auto rounded-lg shadow-md" 
            />
            <p className="text-sm text-center mt-2">Corporate security solutions</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/4588449b-9ad4-4bf5-a62f-aeaf3f168c55.png" 
              alt="Fortis Security Logo" 
              className="max-w-xs mx-auto md:mx-0" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              At Fortis, we have extensive experience as a leading security company in
              Yorkshire and Greater Manchester. Our commitment to excellence
              distinguishes us in a competitive market and allows us to provide outstanding
              service.
            </p>
            <p>
              We aim to positively change the security sector by prioritizing fair
              remuneration and better working conditions for our staff. Our investment in
              training and ongoing support fosters a positive workplace culture, attracting
              and retaining top talent to benefit our clients and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

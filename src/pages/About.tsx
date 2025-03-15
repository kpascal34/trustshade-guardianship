
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import HeroSection from "../components/HeroSection";
import TeamMemberCard from "../components/TeamMemberCard";
import TestimonialCard from "../components/TestimonialCard";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    bio: "John has over 20 years of experience in the security industry and founded Fortis Security with a vision of providing exceptional security services.",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=60",
    linkedIn: "https://linkedin.com",
    email: "john@fortissecurity.com",
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director",
    bio: "Sarah oversees all security operations and ensures our team delivers consistent, high-quality service to all clients.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60",
    linkedIn: "https://linkedin.com",
    email: "sarah@fortissecurity.com",
  },
  {
    name: "Michael Chen",
    position: "Head of Training",
    bio: "Michael designs and implements our rigorous training programs, ensuring all security personnel meet our high standards.",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=60",
    linkedIn: "https://linkedin.com",
    email: "michael@fortissecurity.com",
  },
  {
    name: "Emily Taylor",
    position: "Client Relations Manager",
    bio: "Emily is dedicated to maintaining excellent relationships with our clients and ensuring their security needs are met.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=60",
    linkedIn: "https://linkedin.com",
    email: "emily@fortissecurity.com",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Fortis Security"
        subtitle="Professional security services built on trust and integrity"
        backgroundImage="/about-hero.jpg"
        height="h-[60vh]"
        ctaText=""
        ctaLink=""
      />

      {/* Our Story Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-fortis-dark-blue mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Fortis Security was founded in 2005 by John Doe, a veteran of the security industry with over two decades of experience. What began as a small team of dedicated security professionals has grown into a trusted security services provider with a reputation for excellence.
            </p>
            <p className="text-gray-600 mb-6">
              Throughout our journey, we have remained committed to our founding principles of trust, integrity, and professionalism. These values guide every aspect of our operations and have been instrumental in building lasting relationships with our clients.
            </p>
            <p className="text-gray-600">
              Today, Fortis Security proudly serves clients across various sectors, providing comprehensive security solutions tailored to their specific needs. Our team of highly trained security professionals continues to uphold the standards that have defined our company since its inception.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80"
              alt="Fortis Security team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">
              At the heart of Fortis Security is a commitment to excellence and integrity in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-fortis-light-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-fortis-light-blue" />
              </div>
              <h3 className="text-2xl font-bold text-fortis-dark-blue mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior security services that exceed client expectations, protect their assets, and create safe environments where people can thrive. We aim to set the industry standard for professionalism, reliability, and integrity in all aspects of security service delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-fortis-dark-blue mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-fortis-light-blue font-bold mr-2">●</span>
                  <div>
                    <span className="font-semibold text-fortis-dark-blue">Integrity:</span>{" "}
                    <span className="text-gray-600">We operate with honesty and ethical conduct in all our interactions.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-fortis-light-blue font-bold mr-2">●</span>
                  <div>
                    <span className="font-semibold text-fortis-dark-blue">Excellence:</span>{" "}
                    <span className="text-gray-600">We strive for the highest standards in service delivery.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-fortis-light-blue font-bold mr-2">●</span>
                  <div>
                    <span className="font-semibold text-fortis-dark-blue">Respect:</span>{" "}
                    <span className="text-gray-600">We treat everyone with dignity and respect.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-fortis-light-blue font-bold mr-2">●</span>
                  <div>
                    <span className="font-semibold text-fortis-dark-blue">Accountability:</span>{" "}
                    <span className="text-gray-600">We take responsibility for our actions and decisions.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-fortis-light-blue font-bold mr-2">●</span>
                  <div>
                    <span className="font-semibold text-fortis-dark-blue">Innovation:</span>{" "}
                    <span className="text-gray-600">We continuously seek better ways to serve our clients.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our exceptional team brings together decades of security expertise to provide outstanding service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              bio={member.bio}
              imageSrc={member.imageSrc}
              linkedIn={member.linkedIn}
              email={member.email}
            />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-fortis-dark-blue rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-white italic mb-8">
                "Fortis Security has been our trusted security partner for over five years. Their unwavering commitment to excellence and integrity has made them an invaluable asset to our organization."
              </p>
              <div className="flex flex-col items-center">
                <p className="text-fortis-light-blue font-bold text-lg">David Anderson</p>
                <p className="text-white text-sm">Director of Security, Metropolis Corporate Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-fortis-dark-blue">Ready to work with our team?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss how our security professionals can meet your needs.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-fortis-light-blue hover:bg-fortis-dark-blue"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ id, title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="bg-fortis-light-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-fortis-dark-blue">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Button 
        asChild 
        variant="outline" 
        className="mt-auto group border-fortis-light-blue text-fortis-dark-blue hover:bg-fortis-light-blue hover:text-white"
      >
        <Link to={`/services/${id}`} className="flex items-center">
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;

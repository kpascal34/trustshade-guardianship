
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ id, title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={`/services/${id}`} 
        className="mt-auto bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700 text-center"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;

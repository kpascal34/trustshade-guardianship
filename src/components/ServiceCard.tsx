
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ id, title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className="mb-4 text-slate-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={`/services/${id}`} 
        className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800 text-center transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;

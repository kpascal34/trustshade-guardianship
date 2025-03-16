
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getLoadingStrategy } from "@/utils/imageUtils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  imagePosition?: string;
  index?: number;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  icon, 
  imageSrc, 
  imagePosition,
  index = 0 
}: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
      <div className="mb-4">
        {imageSrc ? (
          <div className="w-full overflow-hidden rounded mb-4">
            <AspectRatio ratio={4/3} className="h-48">
              <img 
                src={imageSrc} 
                alt={`${title} - Professional security service by Fortis Security in ${title.includes("Event") ? "Yorkshire and Manchester" : "Yorkshire"}`} 
                className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${imagePosition || 'object-center'}`}
                width="300"
                height="225"
                loading={getLoadingStrategy(index)}
              />
            </AspectRatio>
          </div>
        ) : (
          icon
        )}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={`/services/${id}`} 
        className="mt-auto bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700 text-center"
        aria-label={`Learn more about our ${title} services in Yorkshire and Manchester`}
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;

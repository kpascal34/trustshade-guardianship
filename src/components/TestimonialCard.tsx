
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <Quote className="text-fortis-light-blue mb-4 h-8 w-8" />
      <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
      <div>
        <p className="font-semibold text-fortis-dark-blue">{author}</p>
        {(position || company) && (
          <p className="text-gray-600 text-sm">
            {position}{position && company && `, `}{company}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;

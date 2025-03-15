
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  imageSrc?: string;
}

const TestimonialCard = ({ quote, author, position, company, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col border border-gray-200">
      {imageSrc && (
        <div className="mb-4 flex justify-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imageSrc} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      )}
      <p className="text-gray-700 mb-6 flex-grow italic text-sm">{quote}</p>
      <div>
        <p className="font-semibold text-gray-800">- {author}</p>
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

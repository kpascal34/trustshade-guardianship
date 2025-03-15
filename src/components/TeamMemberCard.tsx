
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  bio: string;
  imageSrc: string;
  linkedIn?: string;
  email?: string;
}

const TeamMemberCard = ({
  name,
  position,
  bio,
  imageSrc,
  linkedIn,
  email,
}: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-fortis-dark-blue">{name}</h3>
        <p className="text-fortis-light-blue mb-3">{position}</p>
        <p className="text-gray-600 mb-4 flex-grow">{bio}</p>
        
        <div className="flex space-x-3 mt-auto">
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-gray-600 hover:text-fortis-light-blue transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={20} />
            </a>
          )}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-fortis-light-blue transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

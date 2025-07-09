import { LinkIcon } from 'lucide-react'; // Lucide for link icon

const Card = ({ image, title, url }) => {
    
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 text-blue-300 bg-white/10 backdrop-blur-md border border-white/20  hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View on Github<LinkIcon className="ml-3 text-white w-6 h-6"/>
      </div>

      {/* Title */}
      <div className="bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </a>
  );
};

export default Card;

import { useNavigate } from 'react-router-dom';

interface LetterBlockProps {
  letter: string;
  firstLine: string;
  image: string;
  imageAlt: string;
}

const LetterBlock = ({ letter, firstLine, image, imageAlt }: LetterBlockProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = letter === 'XYZ' ? 'xyz' : letter.toLowerCase();
    navigate(`/letter/${route}`);
  };

  return (
    <div 
      className="letter-block"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Letter ${letter} - ${firstLine}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Large Letter */}
        <h2 className="pixel-title text-4xl md:text-6xl">
          {letter}
        </h2>
        
        {/* Pixel Art Image */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-contain"
            style={{ 
              imageRendering: 'pixelated'
            }}
            loading="lazy"
          />
        </div>
        
        {/* First Line of Poem */}
        <p className="matrix-text text-sm md:text-base leading-relaxed px-2">
          {firstLine}
        </p>
      </div>
    </div>
  );
};

export default LetterBlock;
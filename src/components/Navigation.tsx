import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface NavigationProps {
  currentLetter?: string;
}

const Navigation = ({ currentLetter }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'XYZ'];
  
  const currentIndex = currentLetter ? letters.indexOf(currentLetter) : -1;
  const previousLetter = currentIndex > 0 ? letters[currentIndex - 1] : null;
  const nextLetter = currentIndex < letters.length - 1 ? letters[currentIndex + 1] : null;

  const handlePrevious = () => {
    if (previousLetter) {
      navigate(`/letter/${previousLetter.toLowerCase()}`);
    }
  };

  const handleNext = () => {
    if (nextLetter) {
      navigate(`/letter/${nextLetter.toLowerCase()}`);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <nav className="flex justify-center items-center gap-4 p-6">
      <button
        onClick={handlePrevious}
        disabled={!previousLetter}
        className={`nav-button ${!previousLetter ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={previousLetter ? `Previous: ${previousLetter}` : 'No previous letter'}
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">PREV</span>
      </button>

      <button
        onClick={handleHome}
        className="nav-button"
        title="Return to Alphabet Grid"
      >
        <Home size={16} />
        <span className="hidden sm:inline">HOME</span>
      </button>

      <button
        onClick={handleNext}
        disabled={!nextLetter}
        className={`nav-button ${!nextLetter ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={nextLetter ? `Next: ${nextLetter}` : 'No next letter'}
      >
        <span className="hidden sm:inline">NEXT</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};

export default Navigation;
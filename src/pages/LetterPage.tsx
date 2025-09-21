import { useParams, Navigate } from 'react-router-dom';
import { getPoemByRoute } from '@/data/poems';
import Navigation from '@/components/Navigation';
import ShareButtons from '@/components/ShareButtons';
import MatrixBackground from '@/components/MatrixBackground';
import avatarPixel from '@/assets/avatar-pixel.png';
import blankPixel from '@/assets/blank-pixel.png';
import futurePixel from '@/assets/future-pixel.png';

const LetterPage = () => {
  const { letter } = useParams<{ letter: string }>();
  
  if (!letter) {
    return <Navigate to="/" replace />;
  }

  const poemData = getPoemByRoute(letter);
  
  if (!poemData) {
    return <Navigate to="/" replace />;
  }

  // Map the image path to imported asset
  const getImageSrc = (imagePath: string) => {
    if (imagePath.includes('avatar-pixel')) return avatarPixel;
    if (imagePath.includes('blank-pixel')) return blankPixel;
    return futurePixel;
  };

  return (
    <main className="min-h-screen relative">
      <MatrixBackground />
      
      <div className="relative z-10">
        <Navigation currentLetter={poemData.letter} />
        
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            {/* Header with Letter */}
            <header className="text-center mb-12">
              <h1 className="pixel-title text-6xl md:text-8xl mb-4 animate-pixel-glow">
                {poemData.letter}
              </h1>
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8">
                <img 
                  src={getImageSrc(poemData.image)}
                  alt={poemData.imageAlt}
                  className="w-full h-full object-contain animate-scale-bounce"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
            </header>

            {/* Full Poem */}
            <section className="text-center mb-12">
              <div className="bg-card border-2 border-primary p-8 md:p-12 max-w-2xl mx-auto">
                {poemData.fullPoem.map((line, index) => (
                  <p 
                    key={index}
                    className="matrix-text text-lg md:text-xl leading-relaxed mb-2"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>

            {/* Share Buttons */}
            <ShareButtons title={poemData.letter} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default LetterPage;
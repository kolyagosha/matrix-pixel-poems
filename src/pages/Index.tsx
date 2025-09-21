import LetterBlock from '@/components/LetterBlock';
import MatrixBackground from '@/components/MatrixBackground';
import { poemsData } from '@/data/poems';
import letterAPixel from '@/assets/letter-a-pixel.png';
import letterBPixel from '@/assets/letter-b-pixel.png';
import letterXYZPixel from '@/assets/letter-xyz-pixel.png';
import avatarPixel from '@/assets/avatar-pixel.png';
import blankPixel from '@/assets/blank-pixel.png';
import futurePixel from '@/assets/future-pixel.png';

const Index = () => {
  // Map the image paths to imported assets
  const getImageSrc = (letter: string, imagePath: string) => {
    if (letter === 'A') return letterAPixel;
    if (letter === 'B') return letterBPixel;
    if (letter === 'XYZ') return letterXYZPixel;
    
    // For the small preview images
    if (imagePath.includes('avatar-pixel')) return avatarPixel;
    if (imagePath.includes('blank-pixel')) return blankPixel;
    return futurePixel;
  };

  return (
    <main className="min-h-screen relative">
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-12 px-4">
          <h1 className="pixel-title text-4xl md:text-6xl mb-6 animate-pixel-glow">
            8-BIT ALPHABET
          </h1>
          <p className="matrix-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Digital Poetry in the Matrix • Retro Gaming Meets Cyberpunk Verse
          </p>
        </header>

        {/* Alphabet Grid */}
        <section className="alphabet-grid">
          {poemsData.map((poem) => (
            <LetterBlock
              key={poem.letter}
              letter={poem.letter}
              firstLine={poem.firstLine}
              image={getImageSrc(poem.letter, poem.image)}
              imageAlt={poem.imageAlt}
            />
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 px-4">
          <p className="matrix-text text-sm opacity-75">
            Navigate the digital poetry matrix • Click any letter to begin
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;

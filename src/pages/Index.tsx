import LetterBlock from '@/components/LetterBlock';
import MatrixBackground from '@/components/MatrixBackground';
import { poemsData } from '@/data/poems';
import A_1 from '@/assets/A_1.png';
import B_1 from '@/assets/B_1.png';
import C_1 from '@/assets/C_1.png';
import D_1 from '@/assets/D_1.png';
import E_1 from '@/assets/E_1.png';
import F_1 from '@/assets/F_1.png';
import G_1 from '@/assets/G_1.png';
import H_1 from '@/assets/H_1.png';
import J_1 from '@/assets/J_1.png';
import avatarPixel from '@/assets/avatar-pixel.png';
import blankPixel from '@/assets/blank-pixel.png';
import futurePixel from '@/assets/future-pixel.png';

const Index = () => {
  // Map the image paths to imported assets
  const getImageSrc = (letter: string, imagePath: string) => {
    // Map letters to their specific images
    switch (letter) {
      case 'A': return A_1;
      case 'B': return B_1;
      case 'C': return C_1;
      case 'D': return D_1;
      case 'E': return E_1;
      case 'F': return F_1;
      case 'G': return G_1;
      case 'H': return H_1;
      case 'J': return J_1;
      default:
        // For other letters without specific images yet
        if (imagePath.includes('avatar-pixel')) return avatarPixel;
        if (imagePath.includes('blank-pixel')) return blankPixel;
        return futurePixel;
    }
  };

  return (
    <main className="min-h-screen relative">
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-12 px-4">
          <h1 className="pixel-title text-4xl md:text-6xl mb-6">
            ALTCTRDEL.XYZ primer
          </h1>
          <p className="matrix-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Meme Digital Primer • Digital reality
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
            Level up your friends! Share this site.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;

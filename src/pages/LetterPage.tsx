import { useParams, Navigate } from 'react-router-dom';
import { getPoemByRoute } from '@/data/poems';
import Navigation from '@/components/Navigation';
import ShareButtons from '@/components/ShareButtons';
import MatrixBackground from '@/components/MatrixBackground';
import A_1 from '@/assets/A_1.jpg';
import B_1 from '@/assets/B_1.jpg';
import C_1 from '@/assets/C_1.jpg';
import D_1 from '@/assets/D_1.jpg';
import E_1 from '@/assets/E_1.jpg';
import F_1 from '@/assets/F_1.jpg';
import G_1 from '@/assets/G_1.jpg';
import H_1 from '@/assets/H_1.jpg';
import I_1 from '@/assets/I_1.png';
import J_1 from '@/assets/J_1.jpg';
import K_1 from '@/assets/K_1.png';
import L_1 from '@/assets/L_1.png';
import M_1 from '@/assets/M_1.png';
import N_1 from '@/assets/N_1.png';
import O_1 from '@/assets/O_1.png';
import P_1 from '@/assets/P_1.png';
import Q_1 from '@/assets/Q_1.png';
import R_1 from '@/assets/R_1.png';
import S_1 from '@/assets/S_1.png';
import T_1 from '@/assets/T_1.png';
import U_1 from '@/assets/U_1.png';
import V_1 from '@/assets/V_1.png';
import W_1 from '@/assets/W_1.png';
import XYZ_1 from '@/assets/XYZ_1.png';
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

  // Map the image path to imported asset based on letter
  const getImageSrc = (imagePath: string) => {
    // Map based on letter from route
    switch (poemData.letter) {
      case 'A': return A_1;
      case 'B': return B_1;
      case 'C': return C_1;
      case 'D': return D_1;
      case 'E': return E_1;
      case 'F': return F_1;
      case 'G': return G_1;
      case 'H': return H_1;
      case 'I': return I_1;
      case 'J': return J_1;
      case 'K': return K_1;
      case 'L': return L_1;
      case 'M': return M_1;
      case 'N': return N_1;
      case 'O': return O_1;
      case 'P': return P_1;
      case 'Q': return Q_1;
      case 'R': return R_1;
      case 'S': return S_1;
      case 'T': return T_1;
      case 'U': return U_1;
      case 'V': return V_1;
      case 'W': return W_1;
      case 'XYZ': return XYZ_1;
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
        <Navigation currentLetter={poemData.letter} />
        
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-6xl mx-auto">
            {/* Header with Letter */}
            <header className="text-center mb-12">
              <h1 className="pixel-title text-6xl md:text-8xl mb-8 animate-pixel-glow">
                {poemData.letter}
              </h1>
            </header>

            {/* Main Content Layout */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Large Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <img 
                    src={getImageSrc(poemData.image)}
                    alt={poemData.imageAlt}
                    className="w-full h-full object-contain animate-scale-bounce"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              </div>

              {/* Poem Text */}
              <div className="w-full lg:w-1/2">
                <div className="bg-card border-2 border-primary p-8 md:p-12">
                  {poemData.fullPoem.map((line, index) => (
                    <p 
                      key={index}
                      className="matrix-text text-lg md:text-xl leading-relaxed mb-3"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-12">
              <ShareButtons title={poemData.letter} />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default LetterPage;
import { useEffect, useRef } from 'react';

interface MatrixChar {
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const matrixChars: MatrixChar[] = [];
    const numColumns = Math.floor(window.innerWidth / 20);
    
    // Create falling characters
    const createChar = () => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = Math.random() * window.innerWidth;
      const speed = Math.random() * 3 + 1;
      
      return {
        char,
        x,
        y: -20,
        speed,
        opacity: Math.random() * 0.5 + 0.3,
      };
    };

    // Initialize characters
    for (let i = 0; i < numColumns; i++) {
      matrixChars.push(createChar());
    }

    const animate = () => {
      // Clear existing characters
      container.innerHTML = '';
      
      matrixChars.forEach((matrixChar, index) => {
        const charElement = document.createElement('div');
        charElement.className = 'matrix-char';
        charElement.textContent = matrixChar.char;
        charElement.style.left = `${matrixChar.x}px`;
        charElement.style.top = `${matrixChar.y}px`;
        charElement.style.opacity = `${matrixChar.opacity}`;
        charElement.style.animationDuration = `${15 / matrixChar.speed}s`;
        
        container.appendChild(charElement);
        
        // Update position
        matrixChar.y += matrixChar.speed;
        
        // Reset character when it goes off screen
        if (matrixChar.y > window.innerHeight + 20) {
          matrixChars[index] = createChar();
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newNumColumns = Math.floor(window.innerWidth / 20);
      while (matrixChars.length < newNumColumns) {
        matrixChars.push(createChar());
      }
      while (matrixChars.length > newNumColumns) {
        matrixChars.pop();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={canvasRef} className="matrix-bg" />;
};

export default MatrixBackground;
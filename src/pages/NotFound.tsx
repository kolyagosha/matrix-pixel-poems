import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MatrixBackground from "@/components/MatrixBackground";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen relative">
      <MatrixBackground />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center p-8">
          <h1 className="pixel-title text-6xl md:text-8xl mb-8 animate-glitch">
            404
          </h1>
          <div className="bg-card border-2 border-primary p-8 mb-8 max-w-md mx-auto">
            <p className="matrix-text text-lg mb-4">
              ERROR: PAGE NOT FOUND
            </p>
            <p className="matrix-text text-sm opacity-75">
              This digital path does not exist in the Matrix
            </p>
          </div>
          <Link 
            to="/" 
            className="pixel-button inline-flex items-center gap-2"
          >
            <Home size={16} />
            RETURN TO MATRIX
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

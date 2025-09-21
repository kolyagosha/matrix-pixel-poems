import { useState } from 'react';
import { Copy, Share2, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  
  const currentUrl = url || window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Link Copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Copy Failed",
        description: "Unable to copy link. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `8-bit Poetry: ${title}`,
          text: `Check out this retro alphabet poetry for letter ${title}!`,
          url: currentUrl,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      // Fallback: copy to clipboard
      handleCopyLink();
    }
  };

  const handleSubscribe = () => {
    // Simulate subscription process
    setIsSubscribed(true);
    toast({
      title: "Subscribed!",
      description: "You'll receive updates about new 8-bit poetry content.",
    });
    
    // Reset after 3 seconds for demo purposes
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-6">
      <h3 className="pixel-title text-sm mb-2 sm:mb-0 sm:mr-4">SHARE:</h3>
      
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={handleCopyLink}
          className="pixel-button flex items-center gap-2"
          title="Copy link to clipboard"
        >
          <Copy size={14} />
          <span className="hidden sm:inline">COPY</span>
        </button>

        <button
          onClick={handleShare}
          className="pixel-button flex items-center gap-2"
          title="Share this page"
        >
          <Share2 size={14} />
          <span className="hidden sm:inline">SHARE</span>
        </button>

        <button
          onClick={handleSubscribe}
          className={`pixel-button flex items-center gap-2 ${
            isSubscribed ? 'bg-primary text-primary-foreground' : ''
          }`}
          title="Subscribe for updates"
        >
          <Mail size={14} />
          <span className="hidden sm:inline">
            {isSubscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
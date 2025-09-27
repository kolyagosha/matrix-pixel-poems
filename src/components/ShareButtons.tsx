import { useState } from 'react';
import { Copy, Share2, Mail, MessageCircle, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
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

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=Check out this retro alphabet poetry for letter ${title}!&url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=Check out this retro alphabet poetry for letter ${title}!`,
    tiktok: `https://www.tiktok.com/share?url=${encodeURIComponent(currentUrl)}`
  };

  const handleSocialShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    setShowSocialMenu(false);
  };

  const handleSubscribe = () => {
    toast({
      title: "Supabase Required",
      description: "Connect to Supabase to enable email subscriptions and store subscriber data.",
      variant: "destructive",
    });
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

        <div className="relative">
          <button
            onClick={() => setShowSocialMenu(!showSocialMenu)}
            className="pixel-button flex items-center gap-2"
            title="Share on social media"
          >
            <Share2 size={14} />
            <span className="hidden sm:inline">SHARE</span>
          </button>

          {showSocialMenu && (
            <div className="absolute top-full mt-2 bg-card border-2 border-primary p-2 z-10 min-w-[200px] left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSocialShare('twitter')}
                  className="pixel-button flex items-center gap-2 w-full text-left"
                >
                  <Twitter size={14} />
                  <span>Twitter / X</span>
                </button>
                <button
                  onClick={() => handleSocialShare('facebook')}
                  className="pixel-button flex items-center gap-2 w-full text-left"
                >
                  <Facebook size={14} />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleSocialShare('telegram')}
                  className="pixel-button flex items-center gap-2 w-full text-left"
                >
                  <MessageCircle size={14} />
                  <span>Telegram</span>
                </button>
                <button
                  onClick={() => handleSocialShare('tiktok')}
                  className="pixel-button flex items-center gap-2 w-full text-left"
                >
                  <Share2 size={14} />
                  <span>TikTok</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleSubscribe}
          className="pixel-button flex items-center gap-2"
          title="Subscribe for updates"
        >
          <Mail size={14} />
          <span className="hidden sm:inline">SUBSCRIBE</span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
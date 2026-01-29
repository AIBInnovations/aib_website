import { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeuButton } from '../ui/NeuButton';

const NativePdfFallback = ({ pdfUrl }) => {
  const [iframeError, setIframeError] = useState(false);

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AIB Portfolio Pitch Deck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <GlassCard className="p-2 sm:p-4">
        {!iframeError ? (
          <>
            {/* PDF iframe */}
            <iframe
              src={pdfUrl}
              className="w-full h-[70vh] sm:h-[80vh] rounded-lg border border-white/10 bg-white/5"
              title="AIB Portfolio Pitch Deck"
              onError={() => setIframeError(true)}
            />

            {/* Action buttons below iframe */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center">
              <button
                onClick={handleOpenInNewTab}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-all duration-300"
              >
                <ExternalLink size={16} />
                <span>Open in New Tab</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-all duration-300"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>
          </>
        ) : (
          /* Fallback when iframe also fails */
          <div className="text-center py-16 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                Unable to Display PDF Inline
              </h3>
              <p className="text-slate-400 max-w-md mx-auto">
                Your browser doesn't support inline PDF viewing. You can open the document in a new tab or download it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeuButton onClick={handleOpenInNewTab}>
                <ExternalLink size={18} className="mr-2" />
                Open in New Tab
              </NeuButton>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default NativePdfFallback;

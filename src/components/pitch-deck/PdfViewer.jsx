import { useState, useEffect } from 'react';
import { ExternalLink, Maximize2, FileText, Download, Eye, Loader2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import useIsMobile from '../../hooks/useIsMobile';

// PDF URL - Local file in public folder
const PDF_URL = '/others/AIB Portfolio Pitch Deck_compressed.pdf';
const PDF_FILENAME = 'AIB Portfolio Pitch Deck.pdf';

// Generate Google Docs Viewer URL for mobile preview
const getGoogleDocsViewerUrl = (pdfPath) => {
  // Get the full URL (only works when deployed, not on localhost)
  const origin = window.location.origin;
  const fullPdfUrl = `${origin}${pdfPath}`;
  const encodedUrl = encodeURIComponent(fullPdfUrl);
  return `https://docs.google.com/gview?url=${encodedUrl}&embedded=true`;
};

// Check if we're on localhost (Google Docs viewer won't work)
const isLocalhost = () => {
  return window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.');
};

const PdfViewer = () => {
  const { isMobile, isTouch } = useIsMobile();
  const [iframeError, setIframeError] = useState(false);
  const [mobileViewerLoading, setMobileViewerLoading] = useState(true);
  const [mobileViewerError, setMobileViewerError] = useState(false);
  const [showFallbackButtons, setShowFallbackButtons] = useState(false);

  // Determine if we should show mobile view
  const showMobileView = isMobile || isTouch;

  // Check if Google Docs viewer can work (not on localhost)
  const canUseGoogleViewer = !isLocalhost();

  // Set fallback if on localhost
  useEffect(() => {
    if (showMobileView && !canUseGoogleViewer) {
      setShowFallbackButtons(true);
    }
  }, [showMobileView, canUseGoogleViewer]);

  const handleOpenInNewTab = () => {
    window.open(PDF_URL, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullscreen = () => {
    const iframe = document.getElementById('pdf-iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  const handleMobileViewerLoad = () => {
    setMobileViewerLoading(false);
  };

  const handleMobileViewerError = () => {
    setMobileViewerLoading(false);
    setMobileViewerError(true);
    setShowFallbackButtons(true);
  };

  // Mobile View with Google Docs Viewer
  if (showMobileView) {
    // Show fallback buttons if Google Docs viewer can't be used or failed
    if (showFallbackButtons || mobileViewerError) {
      return (
        <div className="h-full flex flex-col">
          <GlassCard className="p-4 sm:p-6 flex-1 flex flex-col" disableHover>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
                <FileText size={40} className="text-indigo-400" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-2">
                AIB Portfolio
              </h2>
              <p className="text-slate-400 mb-8 max-w-sm">
                View our complete portfolio pitch deck with all projects and services
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <button
                  onClick={handleOpenInNewTab}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-xl text-white font-medium transition-colors duration-200 touch-manipulation"
                >
                  <Eye size={22} />
                  <span>View PDF</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-xl text-white font-medium transition-colors duration-200 touch-manipulation"
                >
                  <Download size={22} />
                  <span>Download PDF</span>
                </button>
              </div>

              <p className="text-slate-500 text-sm mt-6">
                45 pages &bull; PDF format
              </p>
            </div>
          </GlassCard>
        </div>
      );
    }

    // Google Docs Viewer for mobile
    return (
      <div className="h-full flex flex-col">
        <GlassCard className="p-3 sm:p-4 flex-1 flex flex-col" disableHover>
          {/* Loading indicator */}
          {mobileViewerLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-2xl z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={32} className="text-indigo-400 animate-spin" />
                <span className="text-slate-300 text-sm">Loading PDF...</span>
              </div>
            </div>
          )}

          {/* Google Docs Viewer iframe */}
          <div className="flex-1 rounded-lg overflow-hidden border border-white/10 relative">
            <iframe
              id="pdf-iframe-mobile"
              src={getGoogleDocsViewerUrl(PDF_URL)}
              className="w-full h-full bg-white"
              title="AIB Portfolio Pitch Deck"
              onLoad={handleMobileViewerLoad}
              onError={handleMobileViewerError}
              allow="autoplay"
            />
          </div>

          {/* Toolbar - Bottom */}
          <div className="flex items-center justify-between gap-4 p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mt-3">
            <div className="flex items-center gap-2 text-white">
              <FileText size={18} className="text-indigo-400" />
              <span className="font-medium text-sm">Portfolio</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenInNewTab}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-lg text-white text-sm transition-colors duration-200 touch-manipulation"
                title="Open in New Tab"
              >
                <ExternalLink size={16} />
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-lg text-white text-sm transition-colors duration-200 touch-manipulation"
                title="Download"
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    );
  }

  // Desktop View - Direct iframe
  return (
    <div className="h-full flex flex-col">
      <GlassCard className="p-3 sm:p-4 flex-1 flex flex-col" disableHover>
        {/* PDF Viewer - Desktop */}
        {!iframeError ? (
          <div className="flex-1 rounded-lg overflow-hidden border border-white/10 scroll-container">
            <iframe
              id="pdf-iframe"
              src={PDF_URL}
              className="w-full h-full bg-white"
              title="AIB Portfolio Pitch Deck"
              onError={() => setIframeError(true)}
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Unable to Display PDF
                </h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  Your browser doesn't support inline PDF viewing.
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleOpenInNewTab}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white font-medium transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-colors duration-200"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toolbar - Bottom */}
        <div className="flex items-center justify-between gap-4 p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mt-3">
          <div className="flex items-center gap-2 text-white">
            <FileText size={18} className="text-indigo-400" />
            <span className="font-medium text-sm sm:text-base">Portfolio</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFullscreen}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-colors duration-200"
              title="Fullscreen"
            >
              <Maximize2 size={16} />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>

            <button
              onClick={handleOpenInNewTab}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm transition-colors duration-200"
              title="Open in New Tab"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">New Tab</span>
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default PdfViewer;

import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const PdfControls = ({
  pageNumber,
  numPages,
  scale,
  onPrev,
  onNext,
  onZoomIn,
  onZoomOut,
  onFullscreen,
  disabled = false
}) => {
  const buttonClass = `
    flex items-center justify-center p-2 sm:p-3
    bg-white/10 hover:bg-white/20
    border border-white/20 hover:border-white/30
    rounded-lg sm:rounded-xl
    text-white
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10
  `;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
      {/* Page navigation */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onPrev}
          disabled={disabled || pageNumber <= 1}
          className={buttonClass}
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="px-3 sm:px-4 py-2 bg-white/10 rounded-lg border border-white/10 min-w-[100px] sm:min-w-[120px] text-center">
          <span className="text-white font-medium text-sm sm:text-base">
            {pageNumber} <span className="text-slate-400">of</span> {numPages || '...'}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={disabled || pageNumber >= numPages}
          className={buttonClass}
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Zoom controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onZoomOut}
          disabled={disabled || scale <= 0.5}
          className={buttonClass}
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>

        <div className="px-3 py-2 bg-white/10 rounded-lg border border-white/10 min-w-[70px] text-center">
          <span className="text-white font-medium text-sm sm:text-base">
            {Math.round(scale * 100)}%
          </span>
        </div>

        <button
          onClick={onZoomIn}
          disabled={disabled || scale >= 2.0}
          className={buttonClass}
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>

        {onFullscreen && (
          <button
            onClick={onFullscreen}
            disabled={disabled}
            className={`${buttonClass} hidden sm:flex`}
            aria-label="Fullscreen"
          >
            <Maximize2 size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfControls;

import { AlertTriangle, RefreshCw, ExternalLink } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeuButton } from '../ui/NeuButton';

const PdfErrorState = ({ error, onRetry, onFallback }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <GlassCard className="p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Error icon */}
          <div className="p-4 bg-red-500/20 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>

          {/* Error message */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              Unable to Load Document
            </h3>
            <p className="text-slate-400 max-w-md">
              We encountered an issue loading the PDF viewer. This could be due to network issues or browser compatibility.
            </p>
            {error && (
              <p className="text-red-400/70 text-sm mt-2 font-mono">
                {error.message || 'Unknown error'}
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300"
            >
              <RefreshCw size={18} />
              <span>Try Again</span>
            </button>

            <NeuButton
              onClick={onFallback}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              <span>Open in Browser</span>
            </NeuButton>
          </div>

          {/* Help text */}
          <p className="text-slate-500 text-xs">
            The browser viewer uses your device's built-in PDF reader
          </p>
        </div>
      </GlassCard>
    </div>
  );
};

export default PdfErrorState;

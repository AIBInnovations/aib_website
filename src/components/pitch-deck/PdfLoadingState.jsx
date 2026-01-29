import { FileText } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const PdfLoadingState = ({ progress = 0 }) => {
  const getStatusText = () => {
    if (progress < 30) return "Connecting to server...";
    if (progress < 70) return "Downloading document...";
    if (progress < 95) return "Almost ready...";
    return "Preparing viewer...";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <GlassCard className="p-8">
        {/* Skeleton document shape with pulse animation */}
        <div className="aspect-[8.5/11] w-full max-w-md mx-auto bg-white/5 rounded-lg animate-pulse mb-6 flex items-center justify-center border border-white/10">
          <FileText className="w-16 h-16 text-indigo-400/30" />
        </div>

        {/* Progress bar container */}
        <div className="w-full bg-white/10 rounded-full h-2.5 mb-4 overflow-hidden">
          {/* Animated progress fill */}
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${Math.max(progress, 2)}%` }}
          >
            {/* Shimmer effect on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Progress text */}
        <div className="text-center space-y-2">
          <p className="text-indigo-400 font-semibold text-lg">
            {Math.round(progress)}% loaded
          </p>
          <p className="text-slate-400 text-sm">
            {getStatusText()}
          </p>
        </div>

        {/* Additional visual interest - animated dots */}
        <div className="flex justify-center gap-1 mt-4">
          <span className="w-2 h-2 bg-indigo-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-indigo-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-indigo-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </GlassCard>
    </div>
  );
};

export default PdfLoadingState;

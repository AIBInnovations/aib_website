import Navbar from './shared/Navbar';
import BackgroundElements from './about/BackgroundElements';
import PdfViewer from './pitch-deck/PdfViewer';
import useIsMobile from '../hooks/useIsMobile';
import useThrottledMousePosition from '../hooks/useThrottledMousePosition';

const PitchDeckPage = () => {
  const { isMobile, isTouch, prefersReducedMotion } = useIsMobile();

  // Disable parallax on mobile, touch devices, or when user prefers reduced motion
  const shouldDisableParallax = isMobile || isTouch || prefersReducedMotion;

  // Throttled mouse position (50ms throttle, disabled when parallax is off)
  const mousePosition = useThrottledMousePosition(50, !shouldDisableParallax);

  return (
    // Use h-dvh for dynamic viewport height (respects mobile browser chrome)
    <div className="h-dvh bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden flex flex-col">
      {/* Animated background elements - only rendered when parallax is enabled */}
      {!shouldDisableParallax && (
        <BackgroundElements mousePosition={mousePosition} />
      )}

      {/* Static background for mobile/reduced motion */}
      {shouldDisableParallax && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 -z-10" />
      )}

      {/* Navigation */}
      <Navbar />

      {/* PDF Viewer - takes remaining height with proper flex containment */}
      <main className="flex-1 min-h-0 pt-20 pb-4 px-4 sm:px-6 relative z-10">
        <PdfViewer />
      </main>
    </div>
  );
};

export default PitchDeckPage;

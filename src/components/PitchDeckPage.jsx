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
    // Fixed full-screen container - prevents any page scroll
    <div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col"
      style={{
        height: '100dvh',
        // Fallback for browsers that don't support dvh
        minHeight: '-webkit-fill-available'
      }}
    >
      {/* Animated background elements - only rendered when parallax is enabled */}
      {!shouldDisableParallax && (
        <BackgroundElements mousePosition={mousePosition} />
      )}

      {/* Navigation - fixed height */}
      <div className="flex-none">
        <Navbar />
      </div>

      {/* PDF Viewer - takes all remaining space */}
      <main className="flex-1 min-h-0 pt-16 pb-4 px-4 sm:px-6 relative z-10 overflow-hidden">
        <PdfViewer />
      </main>
    </div>
  );
};

export default PitchDeckPage;

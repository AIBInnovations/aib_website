import { useState, useEffect } from 'react';

/**
 * Hook to detect device capabilities and preferences
 * Returns mobile/touch detection and motion preferences
 */
const useIsMobile = () => {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isTouch: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    const checkCapabilities = () => {
      // Check for mobile device via userAgent and screen width
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileUserAgent = mobileRegex.test(navigator.userAgent);
      const isMobileWidth = window.innerWidth < 768;
      const isMobile = isMobileUserAgent || isMobileWidth;

      // Check for touch capability
      const isTouch = 'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      setCapabilities({
        isMobile,
        isTouch,
        prefersReducedMotion,
      });
    };

    // Initial check
    checkCapabilities();

    // Listen for resize events (debounced via RAF)
    let rafId = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkCapabilities);
    };

    // Listen for motion preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setCapabilities(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
      }));
    };

    window.addEventListener('resize', handleResize, { passive: true });
    motionMediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionMediaQuery.removeEventListener('change', handleMotionChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return capabilities;
};

export default useIsMobile;

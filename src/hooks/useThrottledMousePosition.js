import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to track mouse position with throttling for performance
 * Uses requestAnimationFrame for smooth updates synced with browser repaint
 *
 * @param {number} throttleMs - Minimum time between updates (default 50ms)
 * @param {boolean} enabled - Whether tracking is enabled (default true)
 * @returns {{ x: number, y: number }} - Normalized position (0-1 range)
 */
const useThrottledMousePosition = (throttleMs = 50, enabled = true) => {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const lastUpdateRef = useRef(0);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!enabled) return;

    const now = Date.now();

    // Throttle updates
    if (now - lastUpdateRef.current < throttleMs) {
      return;
    }

    // Cancel any pending RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use RAF for smooth updates synced with browser repaint
    rafRef.current = requestAnimationFrame(() => {
      setPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
      lastUpdateRef.current = now;
    });
  }, [throttleMs, enabled]);

  useEffect(() => {
    if (!enabled) {
      // Reset to center when disabled
      setPosition({ x: 0.5, y: 0.5 });
      return;
    }

    // Use passive listener for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, enabled]);

  return position;
};

export default useThrottledMousePosition;

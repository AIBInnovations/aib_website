// Glassmorphic Card Component with performance optimizations
export const GlassCard = ({
  children,
  className = '',
  disableHover = false,
  disableBlur = false,
}) => {
  // Base classes for the card
  const baseClasses = 'rounded-2xl border border-white/20 shadow-xl p-6';

  // Blur classes - can be disabled for performance on low-end devices
  const blurClasses = disableBlur
    ? 'bg-white/15'
    : 'backdrop-blur-lg bg-white/10';

  // Hover classes - can be disabled
  const hoverClasses = disableHover
    ? ''
    : 'hover:bg-white/20';

  // Performance optimizations:
  // - transition-colors instead of transition-all (only animate what changes)
  // - will-change-transform for GPU layer promotion
  // - transform translateZ(0) for hardware acceleration
  const performanceClasses = 'transition-colors duration-300 will-change-transform transform-gpu';

  return (
    <div
      className={`${baseClasses} ${blurClasses} ${hoverClasses} ${performanceClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;

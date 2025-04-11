// Glassmorphic Card Component
export const GlassCard = ({ children, className = '' }) => (
    <div className={`backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-xl p-6 hover:bg-white/20 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
  
  export default GlassCard;
// Neumorphic Button Component
export const NeuButton = ({ children, className = '', onClick }) => (
    <button 
      onClick={onClick}
      className={`relative px-8 py-4 rounded-xl font-semibold 
      bg-gradient-to-br from-indigo-600 to-purple-600
      text-white
      shadow-lg hover:shadow-xl
      transition-all duration-300 
      border border-indigo-500/30
      hover:border-indigo-400/50
      hover:-translate-y-1
      active:translate-y-0
      active:shadow-md
      ${className}`}
    >
      {children}
    </button>
  );
  
  export default NeuButton;
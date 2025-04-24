// TechAnimation.jsx
// Component containing the animated tech SVG for the hero section

const TechAnimation = () => {
    return (
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Definitions */}
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#4338ca;#6d28d9;#4338ca" dur="15s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.3">
              <animate attributeName="stop-color" values="#7e22ce;#4f46e5;#7e22ce" dur="15s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Circuit pattern */}
          <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.5) rotate(0)">
            <path d="M30 10 L70 10 L70 30 L90 30 L90 70 L70 70 L70 90 L30 90 L30 70 L10 70 L10 30 L30 30 Z" 
                  fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <path d="M30 50 L70 50" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <path d="M50 30 L50 70" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <circle cx="30" cy="30" r="3" fill="rgba(99,102,241,0.4)" />
            <circle cx="70" cy="30" r="3" fill="rgba(99,102,241,0.4)" />
            <circle cx="30" cy="70" r="3" fill="rgba(99,102,241,0.4)" />
            <circle cx="70" cy="70" r="3" fill="rgba(99,102,241,0.4)" />
          </pattern>
        </defs>
        
        {/* Background */}
        <rect x="0" y="0" width="800" height="600" fill="url(#bgGradient)" />
        <rect x="0" y="0" width="800" height="600" fill="url(#circuitPattern)" opacity="0.4">
          <animateTransform attributeName="patternTransform" 
                            attributeType="XML"
                            type="translate"
                            from="0 0"
                            to="100 100"
                            dur="30s"
                            repeatCount="indefinite" />
        </rect>
        
        {/* Floating particles */}
        <g opacity="0.6">
          <circle cx="200" cy="150" r="3" fill="#a78bfa">
            <animate attributeName="cx" values="200;220;180;200" dur="8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;120;180;150" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="450" r="3" fill="#a78bfa">
            <animate attributeName="cx" values="600;620;580;600" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="450;420;480;450" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="500" r="3" fill="#818cf8">
            <animate attributeName="cx" values="300;320;280;300" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="500;470;530;500" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="200" r="3" fill="#818cf8">
            <animate attributeName="cx" values="700;720;680;700" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cy" values="200;170;230;200" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="400" r="3" fill="#a5b4fc">
            <animate attributeName="cx" values="150;170;130;150" dur="6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="400;370;430;400" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="100" r="3" fill="#a5b4fc">
            <animate attributeName="cx" values="650;670;630;650" dur="11s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;70;130;100" dur="11s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="5.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Left side: Code */}
        <g transform="translate(150, 150)">
          {/* Code window */}
          <rect x="0" y="0" width="220" height="300" rx="10" ry="10" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(255,255,255,0.1)" strokeWidth="2">
            <animate attributeName="opacity" values="0.7;0.8;0.7" dur="5s" repeatCount="indefinite" />
          </rect>
          
          {/* Window controls */}
          <circle cx="20" cy="20" r="6" fill="#ff5f57" />
          <circle cx="40" cy="20" r="6" fill="#febc2e" />
          <circle cx="60" cy="20" r="6" fill="#28c840" />
          
          {/* Code lines with typing animation */}
          <g>
            <rect x="20" y="50" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.7)">
              <animate attributeName="width" values="0;140;140" dur="6s" begin="0s" repeatCount="indefinite" />
            </rect>
            
            <rect x="20" y="70" width="0" height="8" rx="4" ry="4" fill="rgba(99,102,241,0.7)">
              <animate attributeName="width" values="0;180;180" dur="6s" begin="0.5s" repeatCount="indefinite" />
            </rect>
            
            <rect x="40" y="90" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.5)">
              <animate attributeName="width" values="0;140;140" dur="6s" begin="1s" repeatCount="indefinite" />
            </rect>
            
            <rect x="40" y="110" width="0" height="8" rx="4" ry="4" fill="rgba(139,92,246,0.7)">
              <animate attributeName="width" values="0;100;100" dur="6s" begin="1.5s" repeatCount="indefinite" />
            </rect>
            
            <rect x="20" y="130" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.6)">
              <animate attributeName="width" values="0;160;160" dur="6s" begin="2s" repeatCount="indefinite" />
            </rect>
            
            <rect x="20" y="150" width="0" height="8" rx="4" ry="4" fill="rgba(99,102,241,0.7)">
              <animate attributeName="width" values="0;130;130" dur="6s" begin="2.5s" repeatCount="indefinite" />
            </rect>
            
            <rect x="40" y="170" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.5)">
              <animate attributeName="width" values="0;150;150" dur="6s" begin="3s" repeatCount="indefinite" />
            </rect>
            
            <rect x="40" y="190" width="0" height="8" rx="4" ry="4" fill="rgba(139,92,246,0.7)">
              <animate attributeName="width" values="0;120;120" dur="6s" begin="3.5s" repeatCount="indefinite" />
            </rect>
            
            <rect x="20" y="210" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.6)">
              <animate attributeName="width" values="0;170;170" dur="6s" begin="4s" repeatCount="indefinite" />
            </rect>
            
            <rect x="20" y="230" width="0" height="8" rx="4" ry="4" fill="rgba(99,102,241,0.7)">
              <animate attributeName="width" values="0;150;150" dur="6s" begin="4.5s" repeatCount="indefinite" />
            </rect>
            
            <rect x="40" y="250" width="0" height="8" rx="4" ry="4" fill="rgba(255,255,255,0.5)">
              <animate attributeName="width" values="0;130;130" dur="6s" begin="5s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>
        
        {/* Right side: Circuit board */}
        <g transform="translate(450, 150)">
          {/* Base board */}
          <rect x="0" y="0" width="220" height="300" rx="10" ry="10" fill="rgba(30, 58, 138, 0.3)" stroke="rgba(99,102,241,0.5)" strokeWidth="2">
            <animate attributeName="opacity" values="0.7;0.8;0.7" dur="5s" repeatCount="indefinite" />
          </rect>
          
          {/* Circuit traces with pulses */}
          <g fill="none" strokeWidth="4">
            <path d="M20 40 L100 40 L100 100 L180 100 L180 160 L120 160 L120 260 L60 260 L60 200 L20 200" 
                  stroke="rgba(139,92,246,0.6)">
              <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </path>
            
            {/* Pulse along path 1 */}
            <circle cx="20" cy="40" r="4" fill="#34d399">
              <animate attributeName="cx" values="20;100;100;180;180;120;120;60;60;20;20" dur="4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="40;40;100;100;160;160;260;260;200;200;40" dur="4s" repeatCount="indefinite" />
            </circle>
            
            <path d="M20 120 L80 120 L80 220 L160 220" 
                  stroke="rgba(99,102,241,0.6)">
              <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* Pulse along path 2 */}
            <circle cx="20" cy="120" r="4" fill="#34d399">
              <animate attributeName="cx" values="20;80;80;160;160;20" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" values="120;120;220;220;120;120" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Components with subtle animations */}
          <rect x="90" y="80" width="20" height="40" rx="2" ry="2" fill="rgba(255,255,255,0.7)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </rect>
          
          <rect x="150" y="140" width="40" height="40" rx="4" ry="4" fill="rgba(255,255,255,0.7)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </rect>
          
          <circle cx="60" cy="120" r="15" fill="rgba(99,102,241,0.8)">
            <animate attributeName="r" values="15;16;15" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="120" cy="220" r="15" fill="rgba(139,92,246,0.8)">
            <animate attributeName="r" values="15;16;15" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <rect x="40" y="200" width="40" height="20" rx="2" ry="2" fill="rgba(255,255,255,0.7)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
          </rect>
          
          {/* Connection points */}
          <circle cx="20" cy="40" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="120" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="200" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="100" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="220" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="260" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Center connecting elements with animated data transfer */}
        <g filter="url(#glow)">
          {/* Connection lines */}
          <path d="M370 200 C 400 180, 400 240, 430 220" stroke="rgba(139,92,246,0.8)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </path>
          
          <path d="M370 250 C 400 230, 400 290, 430 270" stroke="rgba(99,102,241,0.8)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </path>
          
          <path d="M370 300 C 400 280, 400 340, 430 320" stroke="rgba(139,92,246,0.8)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
          </path>
          
          {/* Data packets moving across connections */}
          {/* Top connection */}
          <circle cx="370" cy="200" r="4" fill="#34d399">
            <animate attributeName="cx" values="370;400;430" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="200;180;220" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Middle connection - data flowing both ways */}
          <circle cx="370" cy="250" r="4" fill="#34d399">
            <animate attributeName="cx" values="370;400;430" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="250;230;270" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="430" cy="270" r="4" fill="#34d399">
            <animate attributeName="cx" values="430;400;370" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="270;290;250" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          {/* Bottom connection */}
          <circle cx="430" cy="320" r="4" fill="#34d399">
            <animate attributeName="cx" values="430;400;370" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="320;340;300" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Connection points */}
          <circle cx="370" cy="200" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="220" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="370" cy="250" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="270" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="370" cy="300" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="320" r="6" fill="#34d399">
            <animate attributeName="r" values="6;7;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    );
  };
  
  export default TechAnimation;
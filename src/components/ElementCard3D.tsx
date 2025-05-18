
import { useState } from 'react';
import { Element, categoryColors } from '@/data/elements';

interface ElementCard3DProps {
  element: Element;
  isActive: boolean;
  onClick: () => void;
}

const ElementCard3D = ({ element, isActive, onClick }: ElementCard3DProps) => {
  const [hovered, setHover] = useState(false);
  const color = categoryColors[element.category] || '#888';
  
  const handleMouseEnter = () => {
    setHover(true);
    document.body.style.cursor = 'pointer';
  };
  
  const handleMouseLeave = () => {
    setHover(false);
    document.body.style.cursor = 'auto';
  };
  
  return (
    <div 
      className={`w-full h-full flex items-center justify-center`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`element-card ${(hovered || isActive) ? 'element-card-hover' : ''}`}
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          padding: '4px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: (hovered || isActive) ? `0 0 10px ${color}` : 'none',
          transition: 'all 0.2s ease',
          transform: (hovered || isActive) ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <div className="flex justify-between">
          <div className="text-xs text-white font-bold">{element.atomicNumber}</div>
          <div className="text-xs text-white">{element.atomicMass}</div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-white">{element.symbol}</div>
          <div className="text-xs text-white truncate max-w-full">{element.name}</div>
        </div>
        
        {(hovered || isActive) && (
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md p-2 flex flex-col justify-between z-10 animate-fade-in">
            <div>
              <div className="text-lg font-bold text-white">{element.symbol}</div>
              <div className="text-sm text-white">{element.name}</div>
              <div className="text-xs text-white/80">Atomic Number: {element.atomicNumber}</div>
              <div className="text-xs text-white/80">Atomic Mass: {element.atomicMass}</div>
            </div>
            <button 
              className="mt-2 bg-white/20 text-white text-xs py-1 rounded-md hover:bg-white/30"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementCard3D;

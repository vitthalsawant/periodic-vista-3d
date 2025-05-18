
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
  };
  
  const handleMouseLeave = () => {
    setHover(false);
  };
  
  return (
    <div 
      className="w-full h-full cursor-pointer"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`element-card ${(hovered || isActive) ? 'element-card-hover' : ''}`}
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '6px',
          boxShadow: (hovered || isActive) ? `0 0 10px ${color}` : 'none',
          transition: 'all 0.2s ease',
          transform: (hovered || isActive) ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <div className="flex justify-between text-white text-xs">
          <div className="font-bold">{element.atomicNumber}</div>
          <div className="text-xs">{element.atomicMass}</div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-white">{element.symbol}</div>
          <div className="text-xs text-white truncate w-full text-center">{element.name}</div>
        </div>
        
        {(hovered || isActive) && (
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded p-2 flex items-center justify-center z-10 animate-fade-in">
            <div className="text-center">
              <div className="text-xl font-bold text-white">{element.symbol}</div>
              <div className="text-sm text-white">{element.name}</div>
              <div className="mt-1">
                <button 
                  className="mt-1 bg-white/20 text-white text-xs py-1 px-2 rounded hover:bg-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementCard3D;

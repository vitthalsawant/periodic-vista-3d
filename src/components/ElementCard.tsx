
import { useState, useRef } from 'react';
import { Element, categoryColors, categoryLabels } from '@/data/elements';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ElementCardProps {
  element: Element;
  isActive: boolean;
  onClick: () => void;
  onViewMore: () => void;
}

const ElementCard = ({ element, isActive, onClick, onViewMore }: ElementCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const getCategoryColor = () => {
    return categoryColors[element.category] || '#888';
  };
  
  const getCategoryLabel = () => {
    return categoryLabels[element.category] || 'Unknown';
  };
  
  const handleViewMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewMore();
  };
  
  const getStateEmoji = () => {
    switch (element.state) {
      case 'solid': return '◼';
      case 'liquid': return '💧';
      case 'gas': return '☁️';
      default: return '?';
    }
  };
  
  return (
    <div
      ref={cardRef}
      className={`relative w-full h-full cursor-pointer transition-all duration-300 transform perspective-1000 ${
        isActive ? 'z-20' : 'z-10'
      }`}
      onClick={onClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`element-card ${!isActive && !isHovered ? 'element-card-rotating' : 'element-card-hover'}`}
      >
        <div
          className="element-card-face"
          style={{
            backgroundColor: isHovered || isActive ? getCategoryColor() : `${getCategoryColor()}99`,
            boxShadow: isHovered || isActive ? `0 0 20px ${getCategoryColor()}` : 'none',
          }}
        >
          <div className="p-2 w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono">{element.atomicNumber}</span>
              <span className="text-xs font-mono">{getStateEmoji()}</span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{element.symbol}</span>
              <span className="text-xs truncate max-w-full">{element.name}</span>
              <span className="text-xs opacity-75">{element.atomicMass}</span>
            </div>
            
            {(isHovered || isActive) && (
              <div className="mt-2 animate-fade-in">
                <div className="text-[9px] font-mono opacity-80">
                  {getCategoryLabel()}
                </div>
                {element.electronConfiguration && (
                  <div className="text-[9px] font-mono truncate">
                    {element.electronConfiguration}
                  </div>
                )}
                {(isHovered || isActive) && (
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="w-full mt-2 text-[10px] py-0 h-6" 
                    onClick={handleViewMore}
                  >
                    View More
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementCard;


import { useState, useEffect, useMemo } from 'react';
import { Element, ElementCategory, PhysicalState, allElements, createPeriodicTableGrid, ElementGridItem } from '@/data/elements';
import ElementCard from '@/components/ElementCard';
import ElementCard3D from '@/components/ElementCard3D';
import ElementDetail from '@/components/ElementDetail';
import ElementFilters from '@/components/ElementFilters';
import CategoryLegend from '@/components/CategoryLegend';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [activeElement, setActiveElement] = useState<Element | null>(null);
  const [detailElement, setDetailElement] = useState<Element | null>(null);
  const [periodTable, setPeriodTable] = useState<ElementGridItem[][]>(createPeriodicTableGrid());
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as ElementCategory[],
    states: [] as PhysicalState[],
    periods: [] as number[],
    blocks: [] as string[]
  });
  const [use3D, setUse3D] = useState(false);
  
  const { toast } = useToast();

  // Initialize the 3D mode based on device capabilities
  useEffect(() => {
    // Check if WebGL is available
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl && 'WebGLRenderingContext' in window) {
      setUse3D(true);
    } else {
      toast({
        title: "3D Mode Disabled",
        description: "Your device doesn't support 3D rendering. Using standard mode instead.",
        variant: "default",
      });
      setUse3D(false);
    }
  }, [toast]);

  // Apply filters
  const filteredElements = useMemo(() => {
    return allElements.filter(element => {
      // If no filters are selected, show all elements
      const categoryFilter = filters.categories.length === 0 || filters.categories.includes(element.category);
      const stateFilter = filters.states.length === 0 || filters.states.includes(element.state);
      const periodFilter = filters.periods.length === 0 || filters.periods.includes(element.period);
      const blockFilter = filters.blocks.length === 0 || filters.blocks.includes(element.block);
      
      return categoryFilter && stateFilter && periodFilter && blockFilter;
    });
  }, [filters]);

  // Update the periodic table grid when filters change
  useEffect(() => {
    const newGrid = createPeriodicTableGrid();
    
    // If filters are active, dim elements that don't match
    if (filters.categories.length || filters.states.length || filters.periods.length || filters.blocks.length) {
      const filteredIds = filteredElements.map(e => e.atomicNumber);
      
      // Mark elements that should be hidden
      for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
          if (newGrid[i][j].element && !filteredIds.includes(newGrid[i][j].element!.atomicNumber)) {
            // Create a dimmed copy of the element
            newGrid[i][j].element = {...newGrid[i][j].element!};
          }
        }
      }
    }
    
    setPeriodTable(newGrid);
  }, [filteredElements, filters]);

  const handleElementClick = (element: Element) => {
    setActiveElement(element);
  };

  const handleViewMore = (element: Element) => {
    setDetailElement(element);
    setIsDetailOpen(true);
  };
  
  const handleFilterChange = (newFilters: {
    categories: ElementCategory[];
    states: PhysicalState[];
    periods: number[];
    blocks: string[];
  }) => {
    setFilters(newFilters);
    
    // Show a toast notification when filters are applied
    const filterCount = 
      newFilters.categories.length + 
      newFilters.states.length + 
      newFilters.periods.length + 
      newFilters.blocks.length;
      
    if (filterCount > 0) {
      toast({
        title: `Filters Applied`,
        description: `Showing elements matching ${filterCount} selected ${filterCount === 1 ? 'filter' : 'filters'}.`,
      });
    } else {
      toast({
        title: "Filters Cleared",
        description: "Showing all elements in the periodic table.",
      });
    }
  };
  
  const toggle3DMode = () => {
    setUse3D(prev => !prev);
    toast({
      title: use3D ? "3D Mode Disabled" : "3D Mode Enabled",
      description: use3D ? "Switched to standard display." : "Switched to 3D element cards.",
    });
  };

  // Find if an element is filtered out
  const isElementFiltered = (element: Element) => {
    if (filters.categories.length === 0 && 
        filters.states.length === 0 && 
        filters.periods.length === 0 && 
        filters.blocks.length === 0) {
      return false;
    }
    
    return !filteredElements.some(e => e.atomicNumber === element.atomicNumber);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Interactive Periodic Table</h1>
          <p className="text-lg text-muted-foreground">
            Explore the elements with 3D visualization and detailed information
          </p>
          <button 
            className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            onClick={toggle3DMode}
          >
            {use3D ? "Switch to Standard Mode" : "Switch to 3D Mode"}
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <ElementFilters onFilterChange={handleFilterChange} />
          </div>
          <div className="lg:col-span-3">
            <CategoryLegend />
          </div>
        </div>
        
        <div className="overflow-x-auto pb-8">
          <div className="w-full min-w-[1000px]">
            {periodTable.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div 
                    key={`${rowIndex}-${colIndex}`} 
                    className={`
                      w-14 h-14 m-0.5 flex-shrink-0
                      ${!cell.element ? 'opacity-0' : ''}
                      ${cell.element && isElementFiltered(cell.element) ? 'opacity-30' : ''}
                      ${activeElement && cell.element?.atomicNumber === activeElement.atomicNumber ? 'z-10 scale-125 shadow-xl' : ''}
                      transition-all duration-300
                    `}
                    style={{
                      gridRow: rowIndex + 1,
                      gridColumn: colIndex + 1,
                    }}
                  >
                    {cell.element && (
                      <>
                        {use3D ? (
                          <ElementCard3D
                            element={cell.element}
                            isActive={activeElement?.atomicNumber === cell.element.atomicNumber}
                            onClick={() => handleElementClick(cell.element!)}
                          />
                        ) : (
                          <ElementCard
                            element={cell.element}
                            isActive={activeElement?.atomicNumber === cell.element.atomicNumber}
                            onClick={() => handleElementClick(cell.element!)}
                            onViewMore={() => handleViewMore(cell.element!)}
                          />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {activeElement && (
          <div className="fixed bottom-0 left-0 w-full bg-card border-t border-border p-4 flex justify-between items-start animate-fade-in">
            <div>
              <h3 className="text-xl font-bold">{activeElement.name} ({activeElement.symbol})</h3>
              <p className="text-sm text-muted-foreground">{activeElement.description.substring(0, 150)}...</p>
            </div>
            <button 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              onClick={() => handleViewMore(activeElement)}
            >
              View Details
            </button>
          </div>
        )}
        
        <ElementDetail 
          element={detailElement} 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;

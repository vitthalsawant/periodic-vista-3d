
import { useState, useEffect, useMemo } from 'react';
import { Element, ElementCategory, PhysicalState, allElements, createPeriodicTableGrid, ElementGridItem } from '@/data/elements';
import ElementCard3D from '@/components/ElementCard3D';
import ElementDetail from '@/components/ElementDetail';
import CategoryLegend from '@/components/CategoryLegend';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Dashboard = () => {
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
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
    setDetailElement(element);
    setIsDetailOpen(true);
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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="bg-primary/10 backdrop-blur-sm shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-primary hover:text-primary/80"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            Interactive Periodic Table
          </h1>
          
          <div className="w-32"></div> {/* Spacer to center the title */}
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <CategoryLegend />
          </div>
          <div className="lg:col-span-3"></div>
        </div>
        
        <div className="overflow-x-auto pb-8">
          <div className="w-full min-w-[1000px]">
            {periodTable.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div 
                    key={`${rowIndex}-${colIndex}`} 
                    className={`
                      w-16 h-16 m-0.5 flex-shrink-0
                      ${!cell.element ? 'opacity-0' : ''}
                      ${cell.element && isElementFiltered(cell.element) ? 'opacity-30' : ''}
                      ${activeElement && cell.element?.atomicNumber === activeElement.atomicNumber ? 'z-10 shadow-xl' : ''}
                      transition-all duration-300
                    `}
                    style={{
                      gridRow: rowIndex + 1,
                      gridColumn: colIndex + 1,
                    }}
                  >
                    {cell.element && (
                      <ElementCard3D
                        element={cell.element}
                        isActive={activeElement?.atomicNumber === cell.element.atomicNumber}
                        onClick={() => handleElementClick(cell.element!)}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <ElementDetail 
          element={detailElement} 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)}
        />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Interactive Periodic Table
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                About
              </Button>
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                Help
              </Button>
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

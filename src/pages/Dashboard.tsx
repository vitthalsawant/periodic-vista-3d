import { useState, useEffect, useMemo } from 'react';
import { Element, ElementCategory, PhysicalState, allElements, createPeriodicTableGrid, ElementGridItem } from '@/data/elements';
import ElementCard from '@/components/ElementCard';
import ElementDetail from '@/components/ElementDetail';
import CategoryLegend from '@/components/CategoryLegend';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info } from 'lucide-react';

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
      
      for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
          if (newGrid[i][j].element && !filteredIds.includes(newGrid[i][j].element!.atomicNumber)) {
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
    <div className="min-h-screen bg-white text-foreground flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/20 to-primary/5 shadow-sm py-4">
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
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1">
              <Info size={14} />
              <span>Help</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-1">
            <CategoryLegend />
          </div>
          <div className="md:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-primary/10">
              <h3 className="text-lg font-bold mb-3 text-primary">Element Information</h3>
              <p className="text-sm text-muted-foreground">
                Click on any element to see detailed information about it. The colors represent different element categories.
              </p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-8">
          <div className="w-full min-w-[1024px]">
            <div className="grid grid-cols-18 gap-1">
              {periodTable.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                  <div 
                    key={`${rowIndex}-${colIndex}`} 
                    className={`
                      ${!cell.element ? 'opacity-0' : ''}
                      ${cell.element && isElementFiltered(cell.element) ? 'opacity-30' : ''}
                      ${activeElement && cell.element?.atomicNumber === activeElement.atomicNumber ? 'z-10' : ''}
                      ${cell.element ? 'h-16 w-16' : 'h-16 w-16'}
                      col-span-1
                      ${rowIndex >= 8 ? 'mt-4' : ''}
                    `}
                    style={{
                      gridRow: rowIndex + 1,
                      gridColumn: colIndex + 1,
                    }}
                  >
                    {cell.element && (
                      <ElementCard
                        element={cell.element}
                        isActive={activeElement?.atomicNumber === cell.element.atomicNumber}
                        onClick={() => handleElementClick(cell.element!)}
                        onViewMore={() => handleElementClick(cell.element!)}
                      />
                    )}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
        
        <ElementDetail 
          element={detailElement} 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)}
        />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-primary/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-primary mb-2">Interactive Periodic Table</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Explore all chemical elements with our interactive periodic table. Learn about their properties, 
                electron configurations, and more.
              </p>
            </div>
            <div className="flex gap-6">
              <div>
                <h4 className="font-semibold mb-2">Resources</h4>
                <ul className="space-y-1">
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">About Elements</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Chemistry Guide</Button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <ul className="space-y-1">
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Help Center</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Feedback</Button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-primary/10">
            <p className="text-sm text-center text-muted-foreground">
              © {new Date().getFullYear()} Interactive Periodic Table. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

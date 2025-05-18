
import { Fragment } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Element, categoryColors, categoryLabels } from '@/data/elements';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

interface ElementDetailProps {
  element: Element | null;
  isOpen: boolean;
  onClose: () => void;
}

const ElementDetail = ({ element, isOpen, onClose }: ElementDetailProps) => {
  if (!element) return null;

  const getCategoryColor = () => {
    return element ? categoryColors[element.category] : '#888';
  };

  const getCategoryLabel = () => {
    return element ? categoryLabels[element.category] : 'Unknown';
  };
  
  const getStateLabel = () => {
    switch (element.state) {
      case 'solid': return 'Solid';
      case 'liquid': return 'Liquid';
      case 'gas': return 'Gas';
      default: return 'Unknown';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-lg element-glow"
              style={{ backgroundColor: getCategoryColor() }}
            >
              <span className="text-4xl font-bold text-white">{element.symbol}</span>
            </div>
            <div>
              <DialogTitle className="text-2xl flex items-center gap-2">
                {element.name}
                <span className="text-sm font-normal opacity-70">
                  ({getCategoryLabel()})
                </span>
              </DialogTitle>
              <div className="text-sm text-muted-foreground mt-1">Atomic Number: {element.atomicNumber}</div>
            </div>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="properties" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="uses">Uses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Physical Properties</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">State:</div>
                  <div>{getStateLabel()}</div>
                  
                  <div className="font-medium">Density:</div>
                  <div>{element.density !== null ? `${element.density} g/cm³` : 'Unknown'}</div>
                  
                  <div className="font-medium">Melting Point:</div>
                  <div>{element.meltingPoint !== null ? `${element.meltingPoint} °C` : 'Unknown'}</div>
                  
                  <div className="font-medium">Boiling Point:</div>
                  <div>{element.boilingPoint !== null ? `${element.boilingPoint} °C` : 'Unknown'}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Atomic Properties</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">Atomic Mass:</div>
                  <div>{element.atomicMass} u</div>
                  
                  <div className="font-medium">Electronegativity:</div>
                  <div>{element.electronegativity !== null ? element.electronegativity : 'Unknown'}</div>
                  
                  <div className="font-medium">Atomic Radius:</div>
                  <div>{element.atomicRadius !== null ? `${element.atomicRadius} pm` : 'Unknown'}</div>
                  
                  <div className="font-medium">Ionization Energy:</div>
                  <div>{element.ionizationEnergy !== null ? `${element.ionizationEnergy} eV` : 'Unknown'}</div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Position in Periodic Table</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Period:</div>
                <div>{element.period}</div>
                
                <div className="font-medium">Group:</div>
                <div>{element.group !== null ? element.group : 'N/A'}</div>
                
                <div className="font-medium">Block:</div>
                <div>{element.block}</div>
                
                <div className="font-medium">Category:</div>
                <div>{getCategoryLabel()}</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Historical Information</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Discovered By:</div>
                <div>{element.discoveredBy || 'Unknown'}</div>
                
                <div className="font-medium">Year:</div>
                <div>{element.discoveryYear || 'Unknown'}</div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="structure" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Electron Configuration</h4>
                <div className="p-4 bg-muted rounded-md font-mono text-sm">
                  {element.electronConfiguration}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Description</h4>
                <p className="text-sm">{element.description}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="uses" className="space-y-4 mt-4">
            <h4 className="font-medium text-sm">Common Uses</h4>
            <ul className="list-disc pl-5 space-y-2">
              {element.uses.map((use, index) => (
                <li key={index} className="text-sm">{use}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="mt-4">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetail;

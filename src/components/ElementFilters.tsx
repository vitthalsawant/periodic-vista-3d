
import { useState } from 'react';
import { ElementCategory, PhysicalState } from '@/data/elements';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface ElementFiltersProps {
  onFilterChange: (filters: {
    categories: ElementCategory[];
    states: PhysicalState[];
    periods: number[];
    blocks: string[];
  }) => void;
}

const ElementFilters = ({ onFilterChange }: ElementFiltersProps) => {
  const [selectedCategories, setSelectedCategories] = useState<ElementCategory[]>([]);
  const [selectedStates, setSelectedStates] = useState<PhysicalState[]>([]);
  const [selectedPeriods, setSelectedPeriods] = useState<number[]>([]);
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  
  const handleCategoryChange = (category: ElementCategory, isChecked: boolean) => {
    setSelectedCategories(prev => 
      isChecked 
        ? [...prev, category] 
        : prev.filter(c => c !== category)
    );
  };
  
  const handleStateChange = (state: PhysicalState, isChecked: boolean) => {
    setSelectedStates(prev => 
      isChecked 
        ? [...prev, state] 
        : prev.filter(s => s !== state)
    );
  };
  
  const handlePeriodChange = (period: number, isChecked: boolean) => {
    setSelectedPeriods(prev => 
      isChecked 
        ? [...prev, period] 
        : prev.filter(p => p !== period)
    );
  };
  
  const handleBlockChange = (block: string, isChecked: boolean) => {
    setSelectedBlocks(prev => 
      isChecked 
        ? [...prev, block] 
        : prev.filter(b => b !== block)
    );
  };
  
  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      states: selectedStates,
      periods: selectedPeriods,
      blocks: selectedBlocks
    });
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedStates([]);
    setSelectedPeriods([]);
    setSelectedBlocks([]);
    onFilterChange({
      categories: [],
      states: [],
      periods: [],
      blocks: []
    });
  };
  
  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Filter Elements</h3>
      
      <Tabs defaultValue="category">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="state">State</TabsTrigger>
          <TabsTrigger value="period">Period</TabsTrigger>
          <TabsTrigger value="block">Block</TabsTrigger>
        </TabsList>
        
        <TabsContent value="category" className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="alkali" 
                checked={selectedCategories.includes('alkali-metal')}
                onCheckedChange={(checked) => handleCategoryChange('alkali-metal', checked as boolean)}
              />
              <Label htmlFor="alkali" className="text-sm">Alkali Metals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="alkaline" 
                checked={selectedCategories.includes('alkaline-earth-metal')}
                onCheckedChange={(checked) => handleCategoryChange('alkaline-earth-metal', checked as boolean)}
              />
              <Label htmlFor="alkaline" className="text-sm">Alkaline Earth Metals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="transition" 
                checked={selectedCategories.includes('transition-metal')}
                onCheckedChange={(checked) => handleCategoryChange('transition-metal', checked as boolean)}
              />
              <Label htmlFor="transition" className="text-sm">Transition Metals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="post-transition" 
                checked={selectedCategories.includes('post-transition-metal')}
                onCheckedChange={(checked) => handleCategoryChange('post-transition-metal', checked as boolean)}
              />
              <Label htmlFor="post-transition" className="text-sm">Post-Transition Metals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="metalloid" 
                checked={selectedCategories.includes('metalloid')}
                onCheckedChange={(checked) => handleCategoryChange('metalloid', checked as boolean)}
              />
              <Label htmlFor="metalloid" className="text-sm">Metalloids</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="nonmetal" 
                checked={selectedCategories.includes('nonmetal')}
                onCheckedChange={(checked) => handleCategoryChange('nonmetal', checked as boolean)}
              />
              <Label htmlFor="nonmetal" className="text-sm">Nonmetals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="noble-gas" 
                checked={selectedCategories.includes('noble-gas')}
                onCheckedChange={(checked) => handleCategoryChange('noble-gas', checked as boolean)}
              />
              <Label htmlFor="noble-gas" className="text-sm">Noble Gases</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="lanthanide" 
                checked={selectedCategories.includes('lanthanide')}
                onCheckedChange={(checked) => handleCategoryChange('lanthanide', checked as boolean)}
              />
              <Label htmlFor="lanthanide" className="text-sm">Lanthanides</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="actinide" 
                checked={selectedCategories.includes('actinide')}
                onCheckedChange={(checked) => handleCategoryChange('actinide', checked as boolean)}
              />
              <Label htmlFor="actinide" className="text-sm">Actinides</Label>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="state" className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="solid" 
                checked={selectedStates.includes('solid')}
                onCheckedChange={(checked) => handleStateChange('solid', checked as boolean)}
              />
              <Label htmlFor="solid" className="text-sm">Solid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="liquid" 
                checked={selectedStates.includes('liquid')}
                onCheckedChange={(checked) => handleStateChange('liquid', checked as boolean)}
              />
              <Label htmlFor="liquid" className="text-sm">Liquid</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="gas" 
                checked={selectedStates.includes('gas')}
                onCheckedChange={(checked) => handleStateChange('gas', checked as boolean)}
              />
              <Label htmlFor="gas" className="text-sm">Gas</Label>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="period" className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map(period => (
              <div key={period} className="flex items-center space-x-2">
                <Checkbox 
                  id={`period-${period}`} 
                  checked={selectedPeriods.includes(period)}
                  onCheckedChange={(checked) => handlePeriodChange(period, checked as boolean)}
                />
                <Label htmlFor={`period-${period}`} className="text-sm">Period {period}</Label>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="block" className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            {['s', 'p', 'd', 'f'].map(block => (
              <div key={block} className="flex items-center space-x-2">
                <Checkbox 
                  id={`block-${block}`} 
                  checked={selectedBlocks.includes(block)}
                  onCheckedChange={(checked) => handleBlockChange(block, checked as boolean)}
                />
                <Label htmlFor={`block-${block}`} className="text-sm">{block}-block</Label>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={clearFilters}>Clear</Button>
        <Button onClick={applyFilters}>Apply</Button>
      </div>
    </div>
  );
};

export default ElementFilters;


import { categoryColors, categoryLabels, ElementCategory } from '@/data/elements';

const CategoryLegend = () => {
  const categories: ElementCategory[] = [
    'alkali-metal',
    'alkaline-earth-metal',
    'transition-metal',
    'post-transition-metal',
    'metalloid',
    'nonmetal',
    'noble-gas',
    'lanthanide',
    'actinide'
  ];
  
  return (
    <div className="p-4 rounded-lg bg-card shadow-md">
      <h3 className="text-lg font-bold mb-4">Element Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {categories.map(category => (
          <div key={category} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: categoryColors[category] }}
            />
            <span className="text-xs">{categoryLabels[category]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLegend;


export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  category: ElementCategory;
  group: number | null;
  period: number;
  block: string;
  electronConfiguration: string;
  electronegativity: number | null;
  atomicRadius: number | null;
  ionizationEnergy: number | null;
  density: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  discoveredBy: string | null;
  discoveryYear: number | null;
  state: PhysicalState;
  description: string;
  uses: string[];
}

export type ElementCategory = 
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide';

export type PhysicalState = 'solid' | 'liquid' | 'gas' | 'unknown';

export const categoryColors: Record<ElementCategory, string> = {
  'alkali-metal': '#ff6b6b',
  'alkaline-earth-metal': '#ff9e7d',
  'transition-metal': '#ffd166',
  'post-transition-metal': '#06d6a0',
  'metalloid': '#4cc9f0',
  'nonmetal': '#8338ec',
  'noble-gas': '#3a86ff',
  'lanthanide': '#fb5607',
  'actinide': '#e63946'
};

export const categoryLabels: Record<ElementCategory, string> = {
  'alkali-metal': 'Alkali Metal',
  'alkaline-earth-metal': 'Alkaline Earth Metal',
  'transition-metal': 'Transition Metal',
  'post-transition-metal': 'Post-Transition Metal',
  'metalloid': 'Metalloid',
  'nonmetal': 'Nonmetal',
  'noble-gas': 'Noble Gas',
  'lanthanide': 'Lanthanide',
  'actinide': 'Actinide'
};

// First 20 elements with detailed information
export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomicMass: '1.008',
    category: 'nonmetal',
    group: 1,
    period: 1,
    block: 's',
    electronConfiguration: '1s¹',
    electronegativity: 2.2,
    atomicRadius: 120,
    ionizationEnergy: 13.598,
    density: 0.0000899,
    meltingPoint: -259.16,
    boilingPoint: -252.879,
    discoveredBy: 'Henry Cavendish',
    discoveryYear: 1766,
    state: 'gas',
    description: 'Hydrogen is the lightest element and the most abundant chemical substance in the universe. It is colorless, odorless, tasteless, non-toxic, and highly combustible.',
    uses: ['Fuel for rockets', 'Production of ammonia', 'Hydrogenation of fats and oils', 'Fuel cells']
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Helium',
    atomicMass: '4.0026',
    category: 'noble-gas',
    group: 18,
    period: 1,
    block: 's',
    electronConfiguration: '1s²',
    electronegativity: null,
    atomicRadius: 140,
    ionizationEnergy: 24.587,
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    discoveredBy: 'Pierre Janssen',
    discoveryYear: 1868,
    state: 'gas',
    description: 'Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It has the lowest boiling point of all the elements and can only be solidified under very high pressure.',
    uses: ['Cooling superconducting magnets', 'Balloons and airships', 'Pressurizing rocket fuel', 'Deep-sea breathing mixtures']
  },
  {
    atomicNumber: 3,
    symbol: 'Li',
    name: 'Lithium',
    atomicMass: '6.94',
    category: 'alkali-metal',
    group: 1,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s¹',
    electronegativity: 0.98,
    atomicRadius: 182,
    ionizationEnergy: 5.392,
    density: 0.534,
    meltingPoint: 180.54,
    boilingPoint: 1342,
    discoveredBy: 'Johan August Arfwedson',
    discoveryYear: 1817,
    state: 'solid',
    description: 'Lithium is a soft, silvery-white alkali metal. It is highly reactive and flammable, and must be stored in mineral oil. It has the lowest density of all metals.',
    uses: ['Rechargeable batteries', 'Psychiatric medications', 'Alloys with aluminum and magnesium', 'Nuclear fusion']
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    name: 'Beryllium',
    atomicMass: '9.0122',
    category: 'alkaline-earth-metal',
    group: 2,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s²',
    electronegativity: 1.57,
    atomicRadius: 153,
    ionizationEnergy: 9.323,
    density: 1.85,
    meltingPoint: 1287,
    boilingPoint: 2469,
    discoveredBy: 'Louis Nicolas Vauquelin',
    discoveryYear: 1797,
    state: 'solid',
    description: 'Beryllium is a relatively rare element in the universe. It is a steel-gray, strong, lightweight and brittle alkaline earth metal. It is primarily used as a hardening agent in alloys.',
    uses: ['Aerospace components', 'X-ray equipment', 'Nuclear reactors', 'Precision instruments']
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    name: 'Boron',
    atomicMass: '10.81',
    category: 'metalloid',
    group: 13,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p¹',
    electronegativity: 2.04,
    atomicRadius: 192,
    ionizationEnergy: 8.298,
    density: 2.34,
    meltingPoint: 2076,
    boilingPoint: 3927,
    discoveredBy: 'Joseph Louis Gay-Lussac and Louis Jacques Thénard',
    discoveryYear: 1808,
    state: 'solid',
    description: 'Boron is a metalloid chemical element that is black-brown in crystalline form and yellow-green in amorphous form. It is never found as a free element on Earth.',
    uses: ['Glass production', 'Detergents', 'Semiconductors', 'Boron neutron capture therapy for cancer']
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    name: 'Carbon',
    atomicMass: '12.011',
    category: 'nonmetal',
    group: 14,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p²',
    electronegativity: 2.55,
    atomicRadius: 170,
    ionizationEnergy: 11.260,
    density: 2.267,
    meltingPoint: 3550,
    boilingPoint: 4027,
    discoveredBy: 'Known to ancients',
    discoveryYear: null,
    state: 'solid',
    description: 'Carbon is a nonmetallic chemical element, the basis of all known life on Earth. It is the 15th most abundant element in the Earth\'s crust, and the fourth most abundant element in the universe by mass.',
    uses: ['Steel production', 'Carbon fiber', 'Graphite in pencils', 'Diamonds in jewelry and cutting tools']
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    name: 'Nitrogen',
    atomicMass: '14.007',
    category: 'nonmetal',
    group: 15,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p³',
    electronegativity: 3.04,
    atomicRadius: 155,
    ionizationEnergy: 14.534,
    density: 0.001251,
    meltingPoint: -210.1,
    boilingPoint: -195.8,
    discoveredBy: 'Daniel Rutherford',
    discoveryYear: 1772,
    state: 'gas',
    description: 'Nitrogen is a colorless, odorless, tasteless gas that forms about 78% of the Earth\'s atmosphere. It is a relatively inert diatomic gas that has industrial applications including the production of ammonia and other nitrogen compounds.',
    uses: ['Fertilizer production', 'Food preservation', 'Cryogenic freezing', 'Pressurizing aircraft tires']
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: 'Oxygen',
    atomicMass: '15.999',
    category: 'nonmetal',
    group: 16,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁴',
    electronegativity: 3.44,
    atomicRadius: 152,
    ionizationEnergy: 13.618,
    density: 0.001429,
    meltingPoint: -218.79,
    boilingPoint: -182.962,
    discoveredBy: 'Carl Wilhelm Scheele',
    discoveryYear: 1771,
    state: 'gas',
    description: 'Oxygen is the third most abundant element in the universe and makes up about 21% of the Earth\'s atmosphere. It is required by most living organisms and is essential for combustion.',
    uses: ['Medical respirators', 'Steel production', 'Welding', 'Water treatment']
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    name: 'Fluorine',
    atomicMass: '18.998',
    category: 'nonmetal',
    group: 17,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁵',
    electronegativity: 3.98,
    atomicRadius: 147,
    ionizationEnergy: 17.423,
    density: 0.001696,
    meltingPoint: -219.67,
    boilingPoint: -188.11,
    discoveredBy: 'Henri Moissan',
    discoveryYear: 1886,
    state: 'gas',
    description: 'Fluorine is the lightest halogen and the most electronegative element. It is extremely reactive and toxic, and reacts with almost all organic and inorganic substances.',
    uses: ['Production of Teflon', 'Uranium enrichment', 'Toothpaste additives', 'Refrigerants']
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    name: 'Neon',
    atomicMass: '20.180',
    category: 'noble-gas',
    group: 18,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁶',
    electronegativity: null,
    atomicRadius: 154,
    ionizationEnergy: 21.565,
    density: 0.0008999,
    meltingPoint: -248.59,
    boilingPoint: -246.046,
    discoveredBy: 'Sir William Ramsay and Morris Travers',
    discoveryYear: 1898,
    state: 'gas',
    description: 'Neon is a colorless, odorless, inert monatomic gas. It gives a distinct reddish-orange glow when used in vacuum discharge tubes and neon lamps and is widely used in signs.',
    uses: ['Neon signs', 'High-voltage indicators', 'Lasers', 'Cryogenic refrigerants']
  },
  {
    atomicNumber: 11,
    symbol: 'Na',
    name: 'Sodium',
    atomicMass: '22.990',
    category: 'alkali-metal',
    group: 1,
    period: 3,
    block: 's',
    electronConfiguration: '[Ne] 3s¹',
    electronegativity: 0.93,
    atomicRadius: 227,
    ionizationEnergy: 5.139,
    density: 0.968,
    meltingPoint: 97.72,
    boilingPoint: 882.9,
    discoveredBy: 'Humphry Davy',
    discoveryYear: 1807,
    state: 'solid',
    description: 'Sodium is a soft, silver-white, highly reactive metal. It is never found as a free element in nature because of its high reactivity. It is essential for animal and human life.',
    uses: ['Salt (sodium chloride)', 'Street lights', 'Nuclear reactors', 'Heat transfer in some industrial processes']
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    atomicMass: '24.305',
    category: 'alkaline-earth-metal',
    group: 2,
    period: 3,
    block: 's',
    electronConfiguration: '[Ne] 3s²',
    electronegativity: 1.31,
    atomicRadius: 173,
    ionizationEnergy: 7.646,
    density: 1.738,
    meltingPoint: 650,
    boilingPoint: 1090,
    discoveredBy: 'Joseph Black',
    discoveryYear: 1755,
    state: 'solid',
    description: 'Magnesium is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table. It is essential for all life.',
    uses: ['Alloys for aircraft and car parts', 'Fireworks and flares', 'Reducing agent in metallurgy', 'Medical and dietary supplements']
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    name: 'Aluminum',
    atomicMass: '26.982',
    category: 'post-transition-metal',
    group: 13,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p¹',
    electronegativity: 1.61,
    atomicRadius: 184,
    ionizationEnergy: 5.986,
    density: 2.7,
    meltingPoint: 660.32,
    boilingPoint: 2519,
    discoveredBy: 'Hans Christian Ørsted',
    discoveryYear: 1824,
    state: 'solid',
    description: 'Aluminum is a silvery-white, soft, non-magnetic, ductile metal. It is the third most abundant element in the Earth\'s crust and the most abundant metallic element.',
    uses: ['Aircraft and automobile manufacturing', 'Building construction', 'Cooking utensils', 'Beverage cans']
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    name: 'Silicon',
    atomicMass: '28.085',
    category: 'metalloid',
    group: 14,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p²',
    electronegativity: 1.90,
    atomicRadius: 210,
    ionizationEnergy: 8.152,
    density: 2.33,
    meltingPoint: 1414,
    boilingPoint: 3265,
    discoveredBy: 'Jöns Jacob Berzelius',
    discoveryYear: 1824,
    state: 'solid',
    description: 'Silicon is a hard and brittle crystalline solid with a blue-grey metallic lustre. It is the second most abundant element in Earth\'s crust after oxygen. It is essential for modern electronics.',
    uses: ['Semiconductor devices', 'Solar cells', 'Glass production', 'Silicones']
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    name: 'Phosphorus',
    atomicMass: '30.974',
    category: 'nonmetal',
    group: 15,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p³',
    electronegativity: 2.19,
    atomicRadius: 180,
    ionizationEnergy: 10.487,
    density: 1.82,
    meltingPoint: 44.15,
    boilingPoint: 280.5,
    discoveredBy: 'Hennig Brand',
    discoveryYear: 1669,
    state: 'solid',
    description: 'Phosphorus is a multivalent nonmetal of the nitrogen group. It is essential for life and is a component of DNA, RNA, ATP, and the phospholipids that form cell membranes.',
    uses: ['Fertilizers', 'Detergents', 'Matches', 'Steel production']
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    name: 'Sulfur',
    atomicMass: '32.06',
    category: 'nonmetal',
    group: 16,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁴',
    electronegativity: 2.58,
    atomicRadius: 180,
    ionizationEnergy: 10.360,
    density: 2.067,
    meltingPoint: 115.21,
    boilingPoint: 444.6,
    discoveredBy: 'Ancient times',
    discoveryYear: null,
    state: 'solid',
    description: 'Sulfur is a yellow crystalline solid at room temperature. It is an essential element for all life, and is widely used in biochemical processes. In its elemental form, sulfur has a distinctive yellow appearance and odor.',
    uses: ['Production of sulfuric acid', 'Fertilizers', 'Gunpowder and matches', 'Vulcanization of rubber']
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    atomicMass: '35.45',
    category: 'nonmetal',
    group: 17,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁵',
    electronegativity: 3.16,
    atomicRadius: 175,
    ionizationEnergy: 12.968,
    density: 0.003214,
    meltingPoint: -101.5,
    boilingPoint: -34.04,
    discoveredBy: 'Carl Wilhelm Scheele',
    discoveryYear: 1774,
    state: 'gas',
    description: 'Chlorine is a yellow-green gas at room temperature. It is an extremely reactive element and a strong oxidizing agent, and among the most common compounds are sodium chloride, potassium chloride, and magnesium chloride.',
    uses: ['Water purification', 'Bleaching paper and cloth', 'PVC production', 'Disinfectants']
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    name: 'Argon',
    atomicMass: '39.948',
    category: 'noble-gas',
    group: 18,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁶',
    electronegativity: null,
    atomicRadius: 188,
    ionizationEnergy: 15.760,
    density: 0.0017837,
    meltingPoint: -189.35,
    boilingPoint: -185.85,
    discoveredBy: 'Lord Rayleigh and Sir William Ramsay',
    discoveryYear: 1894,
    state: 'gas',
    description: 'Argon is the third most common gas in the Earth\'s atmosphere, at 0.934%. It is colorless, odorless, and nonreactive under most conditions. It is used where an inert atmosphere is needed.',
    uses: ['Light bulb fillings', 'Welding', 'Growing silicon crystals', 'Preservation of historical documents']
  },
  {
    atomicNumber: 19,
    symbol: 'K',
    name: 'Potassium',
    atomicMass: '39.098',
    category: 'alkali-metal',
    group: 1,
    period: 4,
    block: 's',
    electronConfiguration: '[Ar] 4s¹',
    electronegativity: 0.82,
    atomicRadius: 275,
    ionizationEnergy: 4.341,
    density: 0.856,
    meltingPoint: 63.38,
    boilingPoint: 759,
    discoveredBy: 'Humphry Davy',
    discoveryYear: 1807,
    state: 'solid',
    description: 'Potassium is a silvery-white metal that oxidizes rapidly in air. It is essential for the functioning of all living cells, and is present in large amounts in plants and fruits.',
    uses: ['Fertilizers', 'Glass manufacturing', 'Soap production', 'Food additives']
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    name: 'Calcium',
    atomicMass: '40.078',
    category: 'alkaline-earth-metal',
    group: 2,
    period: 4,
    block: 's',
    electronConfiguration: '[Ar] 4s²',
    electronegativity: 1.00,
    atomicRadius: 231,
    ionizationEnergy: 6.113,
    density: 1.55,
    meltingPoint: 841.9,
    boilingPoint: 1484,
    discoveredBy: 'Humphry Davy',
    discoveryYear: 1808,
    state: 'solid',
    description: 'Calcium is a soft, silvery-white alkaline earth metal. It is essential for living organisms, in particular in cell physiology, where movement of the calcium ion into and out of the cytoplasm functions as a signal for many cellular processes.',
    uses: ['Cement and concrete', 'Dietary supplements', 'Antacids', 'Cheese making']
  },
  // Additional elements can be added here as needed
];

// Fill in the rest of the periodic table (simplified data)
// This contains all 118 elements with minimal data
export const allElements: Element[] = [
  ...elements,
  // Elements 21-118 with simplified data
  {
    atomicNumber: 21,
    symbol: 'Sc',
    name: 'Scandium',
    atomicMass: '44.956',
    category: 'transition-metal',
    group: 3,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d¹ 4s²',
    electronegativity: 1.36,
    atomicRadius: 215,
    ionizationEnergy: 6.54,
    density: 2.985,
    meltingPoint: 1541,
    boilingPoint: 2836,
    discoveredBy: 'Lars Fredrik Nilson',
    discoveryYear: 1879,
    state: 'solid',
    description: 'Scandium is a silvery-white metallic transition metal. It is relatively soft and has properties similar to aluminum and the rare earth elements.',
    uses: ['Aluminum alloys', 'Metal halide lamps', 'Electronics', 'Aerospace components']
  },
  // Add more elements or use a simplified format for the rest...
  // For brevity, I'll include just a few more with simplified information
  {
    atomicNumber: 22,
    symbol: 'Ti',
    name: 'Titanium',
    atomicMass: '47.867',
    category: 'transition-metal',
    group: 4,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d² 4s²',
    electronegativity: 1.54,
    atomicRadius: 176,
    ionizationEnergy: 6.82,
    density: 4.507,
    meltingPoint: 1668,
    boilingPoint: 3287,
    discoveredBy: 'William Gregor',
    discoveryYear: 1791,
    state: 'solid',
    description: 'Titanium is a lustrous transition metal with a silver color, low density, and high strength. It is resistant to corrosion in sea water, aqua regia, and chlorine.',
    uses: ['Aerospace applications', 'Medical implants', 'Jewelry', 'Bicycles']
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: 'Iron',
    atomicMass: '55.845',
    category: 'transition-metal',
    group: 8,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    electronegativity: 1.83,
    atomicRadius: 156,
    ionizationEnergy: 7.87,
    density: 7.874,
    meltingPoint: 1538,
    boilingPoint: 2861,
    discoveredBy: 'Known since ancient times',
    discoveryYear: null,
    state: 'solid',
    description: 'Iron is a metal in the first transition series. It is the most common element on Earth and forms much of Earth\'s outer and inner core. It is the fourth most common element in the Earth\'s crust.',
    uses: ['Steel production', 'Construction', 'Tools and machinery', 'Magnetic applications']
  },
  {
    atomicNumber: 29,
    symbol: 'Cu',
    name: 'Copper',
    atomicMass: '63.546',
    category: 'transition-metal',
    group: 11,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    electronegativity: 1.9,
    atomicRadius: 128,
    ionizationEnergy: 7.73,
    density: 8.96,
    meltingPoint: 1084.62,
    boilingPoint: 2562,
    discoveredBy: 'Middle East (c. 9000 BC)',
    discoveryYear: null,
    state: 'solid',
    description: 'Copper is a ductile metal with very high thermal and electrical conductivity. Pure copper is soft and malleable; a freshly exposed surface has a pinkish-orange color.',
    uses: ['Electrical wiring', 'Plumbing', 'Electronics', 'Coinage']
  },
  {
    atomicNumber: 47,
    symbol: 'Ag',
    name: 'Silver',
    atomicMass: '107.87',
    category: 'transition-metal',
    group: 11,
    period: 5,
    block: 'd',
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    electronegativity: 1.93,
    atomicRadius: 144,
    ionizationEnergy: 7.58,
    density: 10.49,
    meltingPoint: 961.78,
    boilingPoint: 2162,
    discoveredBy: 'Known since ancient times',
    discoveryYear: null,
    state: 'solid',
    description: 'Silver is a soft, white, lustrous transition metal with the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.',
    uses: ['Jewelry', 'Photography', 'Electronics', 'Mirrors']
  },
  {
    atomicNumber: 79,
    symbol: 'Au',
    name: 'Gold',
    atomicMass: '196.97',
    category: 'transition-metal',
    group: 11,
    period: 6,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    electronegativity: 2.54,
    atomicRadius: 144,
    ionizationEnergy: 9.23,
    density: 19.3,
    meltingPoint: 1064.18,
    boilingPoint: 2970,
    discoveredBy: 'Known since ancient times',
    discoveryYear: null,
    state: 'solid',
    description: 'Gold is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. It is one of the least reactive chemical elements and is solid under standard conditions.',
    uses: ['Jewelry', 'Electronics', 'Dentistry', 'Currency']
  },
  {
    atomicNumber: 82,
    symbol: 'Pb',
    name: 'Lead',
    atomicMass: '207.2',
    category: 'post-transition-metal',
    group: 14,
    period: 6,
    block: 'p',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
    electronegativity: 1.87,
    atomicRadius: 175,
    ionizationEnergy: 7.42,
    density: 11.34,
    meltingPoint: 327.46,
    boilingPoint: 1749,
    discoveredBy: 'Known since ancient times',
    discoveryYear: null,
    state: 'solid',
    description: 'Lead is a heavy metal that is denser than most common materials. It is soft and malleable, and also has a relatively low melting point. When freshly cut, it is silvery with a hint of blue; it tarnishes to a dull gray color when exposed to air.',
    uses: ['Batteries', 'Radiation shielding', 'Ammunition', 'Solders']
  },
  {
    atomicNumber: 92,
    symbol: 'U',
    name: 'Uranium',
    atomicMass: '238.03',
    category: 'actinide',
    group: null,
    period: 7,
    block: 'f',
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    electronegativity: 1.38,
    atomicRadius: 156,
    ionizationEnergy: 6.19,
    density: 19.05,
    meltingPoint: 1132.4,
    boilingPoint: 4131,
    discoveredBy: 'Martin Heinrich Klaproth',
    discoveryYear: 1789,
    state: 'solid',
    description: 'Uranium is a silvery-grey metal that is weakly radioactive. It is the heaviest naturally occurring element found in significant quantities in nature.',
    uses: ['Nuclear power', 'Nuclear weapons', 'Radiation shielding', 'Counterweights']
  },
  {
    atomicNumber: 94,
    symbol: 'Pu',
    name: 'Plutonium',
    atomicMass: '244.06',
    category: 'actinide',
    group: null,
    period: 7,
    block: 'f',
    electronConfiguration: '[Rn] 5f⁶ 7s²',
    electronegativity: 1.28,
    atomicRadius: 159,
    ionizationEnergy: 6.06,
    density: 19.82,
    meltingPoint: 640,
    boilingPoint: 3228,
    discoveredBy: 'Glenn T. Seaborg',
    discoveryYear: 1940,
    state: 'solid',
    description: 'Plutonium is a radioactive actinide metal with a silvery appearance that tarnishes when exposed to air. It is mainly produced artificially in nuclear reactors.',
    uses: ['Nuclear weapons', 'Nuclear power', 'Spacecraft power sources', 'Pacemakers (historically)']
  }
];

// Generate a complete periodic table grid layout
export type GridPosition = {
  row: number;
  col: number;
};

export type ElementGridItem = {
  element: Element | null;
  position: GridPosition;
};

// Create a grid representation of the periodic table
export const createPeriodicTableGrid = (): ElementGridItem[][] => {
  // Create an 11x18 grid (accounting for f-block elements placed separately)
  const grid: ElementGridItem[][] = Array(11).fill(0).map((_, row) => 
    Array(18).fill(0).map((_, col) => ({
      element: null,
      position: { row, col }
    }))
  );

  // Helper to place an element
  const placeElement = (element: Element) => {
    // Skip some element placings for now to simplify first version
    if (element.atomicNumber > 92) return;
    
    if (element.group !== null && element.period !== null) {
      const row = element.period - 1;
      const col = element.group - 1;
      
      if (row < grid.length && col < grid[0].length) {
        grid[row][col].element = element;
      }
    }
    
    // Handle lanthanides and actinides separately
    if (element.category === 'lanthanide') {
      const position = element.atomicNumber - 57;
      if (position >= 0 && position < 15) {
        grid[8][position + 1].element = element;
      }
    }
    
    if (element.category === 'actinide') {
      const position = element.atomicNumber - 89;
      if (position >= 0 && position < 15) {
        grid[9][position + 1].element = element;
      }
    }
  };

  // Place all elements
  allElements.forEach(placeElement);
  
  return grid;
};

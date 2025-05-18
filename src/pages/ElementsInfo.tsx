import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const componentsInfo = [
  {
    name: "ElementCard",
    properties: [
      { name: "element", type: "Element", description: "The element data to display." },
      { name: "isActive", type: "boolean", description: "Whether the card is currently active/selected." },
      { name: "onClick", type: "() => void", description: "Handler for when the card is clicked." },
      { name: "onViewMore", type: "() => void", description: "Handler for when the 'View More' button is clicked." },
      { name: "color", type: "string?", description: "Optional override for the card color." },
    ],
    structure: [
      "- Card container with hover/active state",
      "- Shows atomic number, symbol, name, atomic mass, state emoji",
      "- Shows category and electron configuration on hover/active",
      "- 'View More' button appears on hover/active",
    ],
    uses: [
      "Used in the periodic table grid to represent each element.",
      "Triggers detail view on click.",
    ],
  },
  {
    name: "ElementCard3D",
    properties: [
      { name: "element", type: "Element", description: "The element data to display." },
      { name: "isActive", type: "boolean", description: "Whether the card is currently active/selected." },
      { name: "onClick", type: "() => void", description: "Handler for when the card is clicked." },
      { name: "color", type: "string?", description: "Optional override for the card color." },
    ],
    structure: [
      "- Card with 3D hover/active effect",
      "- Shows atomic number, symbol, name, atomic mass",
      "- Overlay with details and 'Details' button on hover/active",
    ],
    uses: [
      "Used in 3D mode of the periodic table grid.",
      "Triggers detail view on click.",
    ],
  },
  {
    name: "ElementDetail",
    properties: [
      { name: "element", type: "Element | null", description: "The element to show details for." },
      { name: "isOpen", type: "boolean", description: "Whether the detail dialog is open." },
      { name: "onClose", type: "() => void", description: "Handler to close the dialog." },
    ],
    structure: [
      "- Dialog/modal with tabs: Properties, Structure, Uses",
      "- Shows symbol, name, category, atomic number",
      "- Physical Properties section:",
      "  • State (Solid/Liquid/Gas)",
      "  • Density (g/cm³)",
      "  • Melting Point (°C)",
      "  • Boiling Point (°C)",
      "- Atomic Properties section:",
      "  • Atomic Mass (u)",
      "  • Electronegativity",
      "  • Atomic Radius (pm)",
      "  • Ionization Energy (eV)",
      "- Position in Periodic Table section:",
      "  • Period (1-7)",
      "  • Group (1-18)",
      "  • Block (s, p, d, f)",
      "  • Category (Metal, Non-metal, etc.)",
      "- Historical Information section:",
      "  • Discovered By",
      "  • Discovery Year",
      "- Structure tab:",
      "  • Electron Configuration",
      "  • Element Description",
      "- Uses tab:",
      "  • List of common applications",
    ],
    uses: [
      "Shows detailed information about an element when selected.",
      "Used in both standard and 3D table views.",
      "Provides comprehensive element data in an organized format.",
      "Helps users understand element properties and characteristics.",
    ],
  },
  {
    name: "ElementFilters",
    properties: [
      { name: "onFilterChange", type: "(filters) => void", description: "Callback when filters are changed." },
    ],
    structure: [
      "- Tabs for Category, State, Period, Block",
      "- Checkbox groups for each filter type",
      "- Apply and Clear buttons",
    ],
    uses: [
      "Used to filter elements in the periodic table view.",
    ],
  },
  {
    name: "CategoryLegend",
    properties: [],
    structure: [
      "- List of all element categories",
      "- Color swatch and label for each category",
    ],
    uses: [
      "Displayed as a legend for category colors in the table.",
    ],
  },
];

const ElementsInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col">
      <header className="bg-gradient-to-r from-primary/20 to-primary/5 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => navigate("/")}>Home</Button>
          <h1 className="text-2xl font-bold text-primary text-center">Element Components: Properties, Structure & Uses</h1>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>Dashboard</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-1">
        <Tabs defaultValue={componentsInfo[0].name}>
          <TabsList className="mb-6">
            {componentsInfo.map((comp) => (
              <TabsTrigger key={comp.name} value={comp.name}>{comp.name}</TabsTrigger>
            ))}
          </TabsList>
          {componentsInfo.map((comp) => (
            <TabsContent key={comp.name} value={comp.name} className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-2">Properties</h2>
                {comp.properties.length > 0 ? (
                  <table className="w-full text-sm border mb-4">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Type</th>
                        <th className="p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comp.properties.map((prop) => (
                        <tr key={prop.name}>
                          <td className="p-2 border-t">{prop.name}</td>
                          <td className="p-2 border-t font-mono">{prop.type}</td>
                          <td className="p-2 border-t">{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted-foreground">No props.</p>
                )}
              </section>
              <section>
                <h2 className="text-xl font-bold mb-2">Structure</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {comp.structure.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-2">Uses</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {comp.uses.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default ElementsInfo; 
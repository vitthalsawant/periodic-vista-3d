
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "hsl(350, 80%, 60%)" }}>
            Periodic Table of Elements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An interactive way to explore chemical elements through their properties and relationships
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src="/lovable-uploads/2fa94453-1037-4800-9ed4-39f8e2d4485c.png" 
              alt="Periodic Table" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Discover the Elements</h2>
            <p className="mb-6 text-lg">
              Explore all 118 chemical elements, learn about their properties, and understand how they form the building blocks of our universe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/dashboard')} 
                className="bg-primary hover:bg-primary/80 text-white px-6 py-6 text-lg"
              >
                Open Interactive Table
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Element Categories</CardTitle>
              <CardDescription>Explore elements by their chemical properties</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Elements are organized into categories like metals, nonmetals, and metalloids based on their properties and behavior.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-primary">Discover Categories</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Interactive Features</CardTitle>
              <CardDescription>Immersive ways to learn about elements</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Hover over elements to see quick information, filter by properties, and click to see detailed element information.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-primary">Explore Features</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Educational Resource</CardTitle>
              <CardDescription>Perfect for students and enthusiasts</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our periodic table serves as an educational tool for understanding chemistry and the fundamental building blocks of matter.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-primary">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

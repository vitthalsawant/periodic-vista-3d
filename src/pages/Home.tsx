
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/20 to-primary/5 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary text-center">Periodic Table Explorer</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                  Explore the Chemical Elements
                </h2>
                <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl">
                  Discover all 118 elements of the periodic table with our interactive explorer. Learn about their properties, history, and applications.
                </p>
                <Button 
                  onClick={() => navigate('/dashboard')} 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  Open Interactive Table <ChevronRight className="ml-2" />
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/34658a13-6813-49a8-b316-6e5e5566527a.png" 
                  alt="Periodic Table" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Interactive Elements</CardTitle>
                  <CardDescription>Explore elements with detailed information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Click on any element to see its detailed properties, electron configuration, history, and common applications.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="text-primary">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Visual Classification</CardTitle>
                  <CardDescription>Color-coded categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Elements are color-coded based on their categories, making it easy to identify metals, non-metals, metalloids, and more at a glance.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="text-primary">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Educational Resource</CardTitle>
                  <CardDescription>Perfect for students and teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive information makes this tool valuable for chemistry students, teachers, and anyone curious about the building blocks of matter.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="text-primary">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/20 to-primary/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">About the Periodic Table</h2>
                <p className="text-muted-foreground mb-4">
                  The periodic table is a tabular arrangement of chemical elements, organized based on their atomic number, electron configuration, and recurring chemical properties.
                </p>
                <p className="text-muted-foreground mb-4">
                  First created by Russian chemist Dmitri Mendeleev in 1869, the periodic table has become one of the most significant achievements in science, predicting the properties of elements yet to be discovered.
                </p>
                <Button variant="outline" className="mt-2">
                  Learn History
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Did You Know?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
                    <span className="text-muted-foreground">Over 75% of all elements are metals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
                    <span className="text-muted-foreground">The most recently discovered element is Oganesson (Og), element 118.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
                    <span className="text-muted-foreground">Hydrogen is the most abundant element in the universe.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">4</span>
                    <span className="text-muted-foreground">Many elements are named after famous scientists or places.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Explore?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive into the fascinating world of chemical elements with our interactive periodic table.
            </p>
            <Button 
              onClick={() => navigate('/dashboard')} 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Start Exploring Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary mb-2">Periodic Table Explorer</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                An interactive way to learn about chemical elements and their properties.
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-semibold mb-2">Resources</h4>
                <ul className="space-y-1">
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Element Guide</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Chemistry Resources</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Educational Tools</Button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">About</h4>
                <ul className="space-y-1">
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Our Mission</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Contact Us</Button></li>
                  <li><Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto">Privacy Policy</Button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary/10 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Periodic Table Explorer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

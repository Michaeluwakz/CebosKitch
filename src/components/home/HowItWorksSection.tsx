
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MenuSquare, ShoppingCart, Smile } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: <MenuSquare className="h-10 w-10 text-accent" />,
      title: "Browse Our Menu",
      description: "Explore authentic Zimbabwean & South African dishes.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-accent" />,
      title: "Place Your Order or Book",
      description: "Easily order online or contact us for catering.",
    },
    {
      icon: <Smile className="h-10 w-10 text-accent" />,
      title: "Enjoy the Taste of Cebo's",
      description: "Savor delicious, home-style cooking and vibrant flavors.",
    },
  ];

  return (
    <section className="py-12 bg-secondary/30 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                {step.icon}
                <CardTitle className="font-headline text-2xl text-primary mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

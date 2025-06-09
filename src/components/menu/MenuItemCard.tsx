import Image from 'next/image';
import type { MenuItem } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Info } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
      <div className="relative h-48 w-full">
        <Image
          src={item.imageUrl}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={item.dataAiHint || "food item"}
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="font-headline text-2xl text-primary">{item.name}</CardTitle>
        <div className="mt-1 space-x-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant={tag === 'ZW' ? 'default' : 'secondary'} className={tag === 'ZW' ? 'bg-green-700 text-white' : 'bg-yellow-500 text-black'}>
              {tag}
            </Badge>
          ))}
        </div>
        <CardDescription className="mt-2 text-foreground">{item.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center p-4 border-t">
        <p className="text-xl font-semibold text-accent">${item.price.toFixed(2)}</p>
        <div className="space-x-2">
          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
            <Info className="mr-1 h-4 w-4" /> More
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <ShoppingCart className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

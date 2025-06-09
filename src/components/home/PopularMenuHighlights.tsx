
"use client";

import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { menuData } from '@/lib/data';
import type { MenuItem, MenuCategory } from '@/types';
import { ShoppingCart } from 'lucide-react';

const MAX_ITEMS_PER_CATEGORY = 3;

export function PopularMenuHighlights() {
  const categories: MenuCategory[] = menuData;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">
        Popular Menu Highlights
      </h2>
      <Tabs defaultValue={categories[0]?.id || 'starters'} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="font-semibold">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.slice(0, MAX_ITEMS_PER_CATEGORY).map((item: MenuItem) => (
                <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-card">
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
                    <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
                    <div className="mt-1 space-x-1">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant={tag === 'ZW' ? 'default' : 'secondary'} className={`text-xs px-1.5 py-0.5 ${tag === 'ZW' ? 'bg-green-700 text-white' : 'bg-yellow-500 text-black'}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-accent">${item.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/menu">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Order Now
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

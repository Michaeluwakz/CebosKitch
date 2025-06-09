
"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MenuItem } from '@/types';
import { Badge } from '@/components/ui/badge';

interface FoodShowcaseCarouselProps {
  items: MenuItem[];
  title?: string;
}

const ITEMS_TO_SHOW_AT_ONCE = 3; // Adjust based on desired look
const SCROLL_INTERVAL = 3000; // Milliseconds
const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

export function FoodShowcaseCarousel({ items, title = "A Glimpse of Our Menu" }: FoodShowcaseCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const itemsToDisplay = items.filter(item => item.imageUrl !== PLACEHOLDER_IMAGE_URL);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || itemsToDisplay.length <= ITEMS_TO_SHOW_AT_ONCE) return;

    const itemWidth = container.children[0]?.clientWidth || 300; // Approximate width of one card
    let scrollPosition = 0;

    const intervalId = setInterval(() => {
      scrollPosition += itemWidth;
      if (scrollPosition >= container.scrollWidth - (container.clientWidth - itemWidth)) { // Check if we are near the end
        // Smoothly scroll to beginning instead of jump
        container.scrollTo({ left: 0, behavior: 'smooth' });
        scrollPosition = 0;
      } else {
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }, SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [itemsToDisplay]);

  if (!itemsToDisplay || itemsToDisplay.length === 0) {
    return <p className="text-center text-muted-foreground">Loading delicious showcases...</p>;
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">
        {title}
      </h2>
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide" // scrollbar-hide might need a custom utility or plugin
        style={{ scrollBehavior: 'smooth' }}
      >
        {itemsToDisplay.map((item) => (
          <Card key={item.id} className="min-w-[280px] w-72 flex-shrink-0 shadow-lg bg-card overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.dataAiHint || "food item"}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
              <div className="mt-1 space-x-1">
                {item.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={tag === 'ZW' ? 'default' : 'secondary'} 
                    className={`text-xs px-1.5 py-0.5 ${tag === 'ZW' ? 'bg-green-700 text-white' : 'bg-yellow-500 text-black'}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="min-h-[60px]"> {/* Ensure some space for description */}
              <p className="text-sm text-foreground line-clamp-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// Add this to your globals.css or a utility CSS file if you don't have it:
/*
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
*/

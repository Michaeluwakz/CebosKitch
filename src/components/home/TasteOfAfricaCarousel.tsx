
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ShoppingBasket } from 'lucide-react';
import { carouselData } from '@/lib/data';
import type { CarouselSlide } from '@/types';

export function TasteOfAfricaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides: CarouselSlide[] = carouselData;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // Auto-rotate every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]); // Added slides.length to dependency array

  if (!slides || slides.length === 0) {
    return <p>Loading culinary delights...</p>;
  }

  const currentSlide = slides[currentIndex];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">
        A Taste of Africa: Weekly Spotlight
      </h2>
      <Card className="overflow-hidden shadow-xl max-w-4xl mx-auto bg-card">
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={currentSlide.imageUrl}
            alt={currentSlide.dishName}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
            key={currentSlide.id} 
            data-ai-hint={currentSlide.dataAiHint || "african food"}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <CardHeader className="relative z-10 -mt-20 p-6 bg-background/80 backdrop-blur-sm rounded-t-lg">
          <CardTitle className="font-headline text-3xl text-primary">{currentSlide.dishName}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <CardDescription className="text-lg text-foreground">
            {currentSlide.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-6 gap-4">
          <div className="flex space-x-2 order-2 sm:order-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-accent' : 'bg-muted hover:bg-accent/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2 order-1 sm:order-2 w-full sm:w-auto">
            <Button variant="outline" onClick={prevSlide} className="text-accent border-accent hover:bg-accent/10 flex-1 sm:flex-none">
              <ChevronLeft className="h-5 w-5" /> Prev
            </Button>
            <Button variant="outline" onClick={nextSlide} className="text-accent border-accent hover:bg-accent/10 flex-1 sm:flex-none">
              Next <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
           <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 order-3 w-full sm:w-auto mt-4 sm:mt-0">
             <Link href="/menu">
               <ShoppingBasket className="mr-2 h-4 w-4"/> Try It Now
             </Link>
           </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

import Image from 'next/image';
import type { Testimonial } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card h-full">
      <CardHeader className="flex-row items-center gap-4">
        {testimonial.imageUrl && (
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={testimonial.dataAiHint || "customer photo"}
            />
          </div>
        )}
        <div>
          <CardTitle className="font-headline text-xl text-primary">{testimonial.name}</CardTitle>
          {testimonial.rating && (
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating! ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="italic text-foreground before:content-['“'] after:content-['”']">
          {testimonial.quote}
        </blockquote>
      </CardContent>
      <CardFooter></CardFooter> {/* Empty footer for consistent card height if needed */}
    </Card>
  );
}

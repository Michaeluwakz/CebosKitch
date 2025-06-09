
import Link from 'next/link';
import { testimonialsData } from '@/lib/data';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function TestimonialsPreview() {
  const previewTestimonials = testimonialsData.slice(0, 3); // Show first 3 testimonials

  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-8">
        What Our Guests Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      {testimonialsData.length > 3 && (
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/10">
            <Link href="/testimonials">
              Read More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}

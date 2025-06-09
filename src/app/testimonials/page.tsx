import { PageTitle } from '@/components/shared/PageTitle';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { testimonialsData } from '@/lib/data';
import type { Testimonial } from '@/types';

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = testimonialsData;

  return (
    <div>
      <PageTitle 
        title="Guest Testimonials" 
        subtitle="Hear what our customers have to say about their experience!" 
      />
      {testimonials.length > 0 ? (
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No testimonials yet. Be the first to share your experience!
        </p>
      )}
    </div>
  );
}

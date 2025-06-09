
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview';
import { UpcomingEventsPreview } from '@/components/home/UpcomingEventsPreview';
import { HomeContactSection } from '@/components/home/HomeContactSection';
import { Separator } from '@/components/ui/separator';
import { FoodShowcaseCarousel } from '@/components/home/FoodShowcaseCarousel';
import { allMenuItems } from '@/lib/data';

export default function HomePage() {
  const showcaseItems = allMenuItems.slice(0, 5); // Select first 5 items for the showcase

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <Separator />
      <FoodShowcaseCarousel items={showcaseItems} title="A Glimpse of Our Menu" />
      <Separator />
      <HowItWorksSection />
      <Separator />
      <TestimonialsPreview />
      <Separator />
      <UpcomingEventsPreview />
      <Separator />
      <HomeContactSection />
    </div>
  );
}

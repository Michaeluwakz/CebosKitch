import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function OurRootsSection() {
  return (
    <section className="py-12">
      <Card className="shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="relative h-64 md:h-full min-h-[300px]">
            <Image
              src="https://placehold.co/800x600.png"
              alt="African village cooking scene"
              layout="fill"
              objectFit="cover"
              data-ai-hint="african village cooking"
            />
          </div>
          <div className="p-6 md:p-10">
            <CardHeader>
              <CardTitle className="font-headline text-4xl text-primary mb-4">Our Roots, Our Flavors</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground space-y-4">
              <p>
                At Cebo's KitchenStudio Hub, we bring the vibrant spirit and rich culinary traditions of
                Zimbabwe and South Africa to your table. Our journey began with a passion for sharing
                the authentic tastes of home, recipes passed down through generations, and the communal joy
                of African hospitality.
              </p>
              <p>
                From the smoky aroma of a traditional braai to the comforting warmth of sadza, every dish
                tells a story of culture, community, and the bountiful lands of Southern Africa. We are
                committed to using fresh, locally-sourced ingredients where possible, while importing key
                spices and elements to ensure true authenticity.
              </p>
              <p>
                Join us for an unforgettable dining experience that nourishes the body and soul.
                It's more than just food; it's a celebration of heritage.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}

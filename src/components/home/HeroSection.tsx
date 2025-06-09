
import Link from 'next/link';
// import Image from 'next/image'; // Removed as it's no longer used
import { Button } from '@/components/ui/button';
import { ShoppingCart, BookOpenCheck, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 rounded-lg overflow-hidden shadow-xl">
      {/* The Image component that was here displaying a placeholder background has been removed. */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-bold text-primary md:text-6xl lg:text-7xl drop-shadow-md">
          {siteConfig.name}
        </h1>
        <p className="mt-6 text-xl text-foreground md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
          South African Fusion Cuisine in Middelburg.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Link href="/menu">
              <ShoppingCart className="mr-2 h-5 w-5" /> Order Food Online
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Link href="/contact#catering">
              <BookOpenCheck className="mr-2 h-5 w-5" /> Book Catering
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-primary hover:bg-primary/10 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Link href="/contact#ask">
              <MessageSquare className="mr-2 h-5 w-5" /> Ask Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

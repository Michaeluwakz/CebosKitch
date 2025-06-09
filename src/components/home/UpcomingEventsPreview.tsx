
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Phone } from 'lucide-react';
import { eventsData } from '@/lib/data';
import type { Event } from '@/types';
import { siteConfig } from '@/config/site';

const MAX_EVENTS_TO_SHOW = 2;

export function UpcomingEventsPreview() {
  const upcomingEvents = eventsData.slice(0, MAX_EVENTS_TO_SHOW);

  if (upcomingEvents.length === 0) {
    return null; // Or a message saying no upcoming events
  }

  return (
    <section className="py-12 bg-secondary/30 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-10">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event: Event) => (
            <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="relative h-52 w-full">
                <Image
                  src={event.imageUrl}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={event.dataAiHint || "event image"}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{event.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <CalendarDays className="h-4 w-4 mr-2 text-accent" />
                  <span>{event.date}</span>
                </div>
                {event.location && (
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground line-clamp-3">{event.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4 border-t">
                <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 w-full sm:w-auto">
                  <Link href="/events">
                    More Details
                  </Link>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call to Reserve
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {eventsData.length > MAX_EVENTS_TO_SHOW && (
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary hover:text-accent">
              <Link href="/events">
                View All Events &rarr;
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

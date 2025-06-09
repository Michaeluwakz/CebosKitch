import Image from 'next/image';
import type { Event } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Ticket, Info } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <div className="relative h-60 w-full">
        <Image
          src={event.imageUrl}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={event.dataAiHint || "event celebration"}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{event.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <CalendarDays className="h-4 w-4 mr-2 text-accent" />
          <span>{event.date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground">{event.description}</CardDescription>
        {event.details && (
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            {event.details.decor && <p><strong>Decor:</strong> {event.details.decor}</p>}
            {event.details.attire && <p><strong>Attire:</strong> {event.details.attire}</p>}
            {event.details.music && <p><strong>Music:</strong> {event.details.music}</p>}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-4 border-t">
        <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
          <Info className="mr-2 h-4 w-4" /> Learn More
        </Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Ticket className="mr-2 h-4 w-4" /> RSVP/Book
        </Button>
      </CardFooter>
    </Card>
  );
}

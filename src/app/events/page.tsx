import { PageTitle } from '@/components/shared/PageTitle';
import { EventCard } from '@/components/events/EventCard';
import { eventsData } from '@/lib/data';
import type { Event } from '@/types';

export default function EventsPage() {
  const events: Event[] = eventsData;

  return (
    <div>
      <PageTitle 
        title="Upcoming Events" 
        subtitle="Join us for vibrant celebrations of culture, food, and music!" 
      />
      {events.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          No upcoming events at the moment. Please check back soon!
        </p>
      )}
    </div>
  );
}

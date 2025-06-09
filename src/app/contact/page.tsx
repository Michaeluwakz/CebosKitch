import { PageTitle } from '@/components/shared/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="Get In Touch" subtitle="We'd love to hear from you!" />
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-xl bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Call Us</h3>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MessageSquare className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Chat on WhatsApp</h3>
                <Button asChild variant="outline" className="mt-1 border-accent text-accent hover:bg-accent/10">
                  <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-card" id="catering">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Catering & Event Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Planning a special event? Let Cebo's KitchenStudio Hub bring the authentic tastes of Africa
              to your celebration. We offer flexible catering packages for parties, corporate events,
              and more.
            </p>
            <p className="text-foreground">
              You can also book our venue for private functions and experience our unique ambiance.
            </p>
            <p className="text-foreground">
              Please call us at <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">{siteConfig.contact.phone}</a> or use the WhatsApp chat to discuss your requirements.
            </p>
          </CardContent>
        </Card>
      </div>

      <div id="ask" className="mt-12">
        {/* This section can be expanded with a contact form or more info about asking questions, e.g., via chatbot or email */}
        <h3 className="text-2xl font-headline text-center text-primary mb-4">Have a Question?</h3>
        <p className="text-center text-lg text-muted-foreground">
          Feel free to reach out via phone, WhatsApp, or use our AI Chatbot (bottom right) for quick answers!
        </p>
      </div>
    </div>
  );
}


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HomeContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline font-semibold text-center text-primary mb-10">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Call Us</h3>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              {siteConfig.links.whatsapp && (
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Chat on WhatsApp</h3>
                    <Button asChild variant="outline" size="sm" className="mt-1 border-accent text-accent hover:bg-accent/10">
                      <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                        Start Chat
                      </a>
                    </Button>
                  </div>
                </div>
              )}
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
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Have a question, feedback, or a special request? We'd love to hear from you! 
                Visit our contact page to send us a message directly or find more ways to connect.
              </p>
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Send className="mr-2 h-5 w-5" /> Go to Contact Page
                </Link>
              </Button>
               <p className="text-sm text-center text-muted-foreground mt-4">
                Or use our AI Chatbot (bottom right) for quick answers!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

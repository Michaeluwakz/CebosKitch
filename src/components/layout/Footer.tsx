
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  const quickLinks = [
    { label: 'Menu', href: '/menu' },
    { label: 'Order Online', href: '/menu' },
    { label: 'Catering', href: '/contact#catering' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="border-t border-border/40 py-8 md:py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-lg text-primary mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              Experience the vibrant tastes of Zimbabwe and South Africa.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg text-primary mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg text-primary mb-2">Connect With Us</h3>
            {/* Keeping existing social links structure if needed, or add new ones */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
            </div>
             <p className="text-sm text-muted-foreground mt-2">
                Phone: <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary">{siteConfig.contact.phone}</a>
            </p>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Proudly serving Middelburg, Mpumalanga with Zimbabwean & South African soul.
          </p>
        </div>
      </div>
    </footer>
  );
}

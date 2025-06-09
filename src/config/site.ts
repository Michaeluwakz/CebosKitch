export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cebo's KitchenStudio Hub",
  description:
    "Experience the vibrant tastes of Zimbabwe and South Africa at Cebo's KitchenStudio Hub. Order online, book catering, or join our cultural events.",
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Events', href: '/events' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
  links: {
    whatsapp: 'https://wa.me/1234567890', // Replace with actual number
    // Add other social links if needed
  },
  contact: {
    phone: '+1 (234) 567-8900', // Replace with actual number
    address: '123 Culinary Avenue, Foodieland', // Replace with actual address
  }
};

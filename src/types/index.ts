
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: ('ZW' | 'SA')[];
  category: string;
  dataAiHint?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  imageUrl: string;
  location?: string;
  details?: {
    decor?: string;
    attire?: string;
    music?: string;
  };
  dataAiHint?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating?: number; // e.g., 1-5 stars
  imageUrl?: string; // Optional photo of the customer
  dataAiHint?: string;
}

export interface CarouselSlide {
  id: string;
  dishName: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  content: string;
  timestamp: number;
  type?: 'faq' | 'pairing_request' | 'term_request' | 'pairing_suggestion' | 'term_explanation' | 'error';
}


import type { MenuItem, Event, Testimonial, CarouselSlide, MenuCategory } from '@/types';

export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      { id: 's1', name: 'Biltong & Droëwors Platter', description: 'Air-dried cured meats, a South African delicacy.', price: 12.99, imageUrl: 'https://foodplatters.co.za/wp-content/uploads/2018/03/Biltong-Platter.jpg', tags: ['SA'], category: 'Starters', dataAiHint: 'cured meat' },
      { id: 's2', name: 'Peri-Peri Chicken Livers', description: 'Spicy and tangy chicken livers, a regional favorite.', price: 10.50, imageUrl: 'https://www.royco.co.za/sites/g/files/fnmzdf1866/files/2024-10/Peri%20Peri%20Chicken%20Livers_0.png', tags: ['SA', 'ZW'], category: 'Starters', dataAiHint: 'chicken livers' },
      { id: 's3', name: 'Sadza Bites with Relish', description: 'Small portions of Zimbabwe\'s staple, served with a savory vegetable relish.', price: 8.99, imageUrl: 'https://foodsturvs.ca/wp-content/uploads/2024/01/76_file.png', tags: ['ZW'], category: 'Starters', dataAiHint: 'maize porridge' },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    items: [
      { id: 'm1', name: 'Braai Plate (Mixed Grill)', description: 'A hearty selection of grilled meats (boerewors, steak, lamb chop) served with pap and chakalaka.', price: 25.99, imageUrl: 'https://www.shutterstock.com/image-photo/assorted-mix-grills-tikka-boti-600nw-2233762721.jpg', tags: ['SA'], category: 'Main Course', dataAiHint: 'grilled meat' },
      { id: 'm2', name: 'Roadrunner Chicken (Free-Range)', description: 'Slow-cooked, flavorful traditional Zimbabwean chicken, served with peanut butter rice.', price: 22.50, imageUrl: 'https://afropeans.com/kitchen/wp-content/uploads/sites/2/2020/07/Road-Runner-Peanut-Butter-Sauce.jpg', tags: ['ZW'], category: 'Main Course', dataAiHint: 'chicken rice' },
      { id: 'm3', name: 'Mopane Worms with Peanut Sauce', description: 'A traditional delicacy, nutritious and full of flavor, served with sadza.', price: 18.00, imageUrl: 'https://placehold.co/600x400.png', tags: ['ZW'], category: 'Main Course', dataAiHint: 'edible insects' },
      { id: 'm4', name: 'Bunny Chow (Chicken or Lamb)', description: 'A hollowed-out loaf of bread filled with delicious curry. A Durban specialty.', price: 19.99, imageUrl: 'https://placehold.co/600x400.png', tags: ['SA'], category: 'Main Course', dataAiHint: 'curry bread' },
    ],
  },
  {
    id: 'cocktails-mocktails',
    name: 'Cocktails & Mocktails',
    items: [
      { id: 'd1', name: 'Amarula Sunset', description: 'Creamy Amarula liqueur with a hint of orange.', price: 9.00, imageUrl: 'https://www.oaks.delivery/wp-content/uploads/new-683x1024.jpg', tags: ['SA'], category: 'Cocktails & Mocktails', dataAiHint: 'cream liqueur' },
      { id: 'd2', name: 'Mazoe Orange Crush (Mocktail)', description: 'Refreshing Zimbabwean orange cordial drink.', price: 6.50, imageUrl: 'https://placehold.co/600x400.png', tags: ['ZW'], category: 'Cocktails & Mocktails', dataAiHint: 'orange drink' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { id: 'ds1', name: 'Malva Pudding', description: 'Sweet and spongy apricot pudding served with warm custard or ice cream.', price: 8.50, imageUrl: 'https://www.africanbites.com/wp-content/uploads/2023/10/IMG_3963-scaled.jpg', tags: ['SA'], category: 'Desserts', dataAiHint: 'apricot pudding' },
      { id: 'ds2', name: 'Koeksisters', description: 'Crispy, syrupy plaited doughnuts.', price: 7.00, imageUrl: 'https://placehold.co/600x400.png', tags: ['SA'], category: 'Desserts', dataAiHint: 'syrup doughnuts' },
    ],
  },
];

export const eventsData: Event[] = [
  {
    id: 'e1',
    name: 'Sunday Lunch Special: Zim Braai Fest',
    date: 'Every Sunday, 12 PM - 4 PM',
    description: 'Join us for an authentic Zimbabwean braai experience. Live traditional music and vibrant atmosphere.',
    imageUrl: 'https://thesundaybraai.com/wp-content/uploads/2024/08/Sunday_Braai_Sept_2024-03-1-822x1024.jpg',
    location: "Cebo's KitchenStudio Hub",
    details: { decor: 'Zimbabwean basket-weave and Ndebele geometric accents.', attire: 'Encouraged traditional wear.', music: 'Live Marimba band.' },
    dataAiHint: 'barbecue festival'
  },
  {
    id: 'e2',
    name: 'SA Heritage Day Celebration',
    date: 'September 24th, All Day',
    description: 'Celebrate South African Heritage Day with us! Special menu, music, and cultural performances.',
    imageUrl: 'https://www.africaoutlookmag.com/media/2022/12/south-africa-celebrates-heritage-day-1632494541.coverImage.2x-2-jpg-webp.webp',
    location: "Cebo's KitchenStudio Hub",
    details: { decor: 'South African flag colors, protea flowers.', attire: 'Show your heritage!', music: 'Kwaito and Amapiano playlist.' },
    dataAiHint: 'cultural celebration'
  },
];

export const testimonialsData: Testimonial[] = [
  { id: 't1', name: 'Thabo M.', quote: 'The Braai Plate was just like home! Amazing flavors and great service.', rating: 5, dataAiHint: 'happy customer' },
  { id: 't2', name: 'Chipo K.', quote: 'Loved the Roadrunner Chicken. The peanut butter rice was a delightful surprise. Will be back!', rating: 4, dataAiHint: 'smiling person' },
  { id: 't3', name: 'Sarah P.', quote: 'Cebo\'s catered our event, and it was a huge success. The food was a hit with everyone!', rating: 5, dataAiHint: 'event catering' },
  { id: 't4', name: 'Anonymous', quote: 'The Sunday lunch reminded me of home 🇿🇼 – thank you!', rating: 5, dataAiHint: 'food review' },
  { id: 't5', name: 'Customer', quote: 'Delicious chakalaka and the cocktails? 10/10 🇿🇦', rating: 5, dataAiHint: 'restaurant experience' },
];

export const carouselData: CarouselSlide[] = [
  { id: 'c4', dishName: 'Mazondo & Chakalaka Combo', description: 'This week\'s special: Tender slow-cooked cow heels (Mazondo) served with spicy Chakalaka relish and your choice of starch.', imageUrl: 'https://placehold.co/1200x600.png', dataAiHint: 'beef relish' },
  { id: 'c1', dishName: 'Sadza ne Nyama', description: 'Zimbabwe\'s staple, maize meal porridge served with flavorful meat stew.', imageUrl: 'https://placehold.co/1200x600.png', dataAiHint: 'maize stew' },
  { id: 'c2', dishName: 'Boerewors Roll', description: 'A classic South African spiced sausage, grilled and served in a roll.', imageUrl: 'https://placehold.co/1200x600.png', dataAiHint: 'sausage roll' },
  { id: 'c3', dishName: 'Umngqusho', description: 'A traditional Xhosa dish made with samp and beans, slow-cooked to perfection.', imageUrl: 'https://placehold.co/1200x600.png', dataAiHint: 'samp beans' },
];

export const allMenuItems: MenuItem[] = menuData.reduce((acc, category) => acc.concat(category.items), [] as MenuItem[]);

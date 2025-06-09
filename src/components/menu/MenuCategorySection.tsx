
import type { MenuCategory } from '@/types';
import { MenuItemCard } from './MenuItemCard';

interface MenuCategorySectionProps {
  category: MenuCategory;
}

const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
  const itemsToDisplay = category.items.filter(item => item.imageUrl !== PLACEHOLDER_IMAGE_URL);

  if (itemsToDisplay.length === 0) {
    return null; // Or some message like "No items with images in this category yet."
  }

  return (
    <section id={category.id}>
      <h2 className="text-3xl font-headline font-semibold text-primary mb-6 border-b-2 border-accent pb-2">
        {category.name}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {itemsToDisplay.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

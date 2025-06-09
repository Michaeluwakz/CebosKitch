import { PageTitle } from '@/components/shared/PageTitle';
import { MenuCategorySection } from '@/components/menu/MenuCategorySection';
import { menuData } from '@/lib/data';
import type { MenuCategory } from '@/types';

export default function MenuPage() {
  const categories: MenuCategory[] = menuData;

  return (
    <div>
      <PageTitle title="Our Menu" subtitle="A culinary journey through Zimbabwe & South Africa" />
      <div className="space-y-12">
        {categories.map((category) => (
          <MenuCategorySection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

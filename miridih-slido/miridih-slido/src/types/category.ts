export interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  description?: string;
  icon?: string;
}

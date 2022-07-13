export interface Product {
  id: number;
  name: string;
  price: number;
  withDiscount: number;
  description: string;
  categoryId: number;
  stock: number;
  img: string;
  options: string[];
  selected?: string;
}
import { Product } from './ProductModel';

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
}
export interface Order {
  total: number;
  count: number;
  items: OrderItem[];
}

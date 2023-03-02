import type { Product } from "./product";

export interface DiscountRule {
  name: string;
  handler: (products: Product[]) => Promise<string>;
}

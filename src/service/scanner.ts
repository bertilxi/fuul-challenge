import Decimal from "decimal.js";

import { discountService } from "./discount";
import { productService } from "./product";

export class Scanner {
  private productCodes: string[] = [];

  public scan(productCode: string) {
    this.productCodes.push(productCode);
  }

  public async getTotal() {
    const products = await productService.mapCodes(this.productCodes);

    const amount = products.reduce(
      (amount, next) => amount.plus(next.price),
      new Decimal(0)
    );

    const discounts = await discountService.getDiscounts(products);

    return amount.minus(discounts).toString();
  }
}

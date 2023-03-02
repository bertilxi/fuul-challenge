import Decimal from "decimal.js";

import type { DiscountRule, Product } from "../model";

class DiscountService {
  private rules: DiscountRule[] = [
    {
      name: "MARKETING_2_1_APE",
      handler: async (products) => {
        const apes = products.filter((product) => product.code === "APE");
        const apePrice = apes[0]?.price ?? "0";

        return new Decimal(apes.length).div(2).trunc().mul(apePrice).toString();
      },
    },
    {
      name: "SALES_BULK_PUNK",
      handler: async (products) => {
        const punks = products.filter((product) => product.code === "PUNK");
        const punkPrice = punks[0]?.price ?? "0";

        return punks.length >= 3
          ? new Decimal(punkPrice).minus(50).mul(punks.length).toString()
          : "0";
      },
    },
  ];

  public async getDiscounts(products: Product[]) {
    let total = new Decimal(0);

    for (const rule of this.rules) {
      const discount = await rule.handler(products);

      total = total.plus(discount);
    }

    return total.toString();
  }
}

export const discountService = new DiscountService();

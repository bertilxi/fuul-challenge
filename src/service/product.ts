import type { Product } from "../model";

class ProductService {
  public async getProducts(): Promise<Product[]> {
    return [
      {
        code: "APE",
        name: "Bored Apes",
        price: "75",
        currencyCode: "ETH",
      },
      {
        code: "PUNK",
        name: "Crypto Punks",
        price: "60",
        currencyCode: "ETH",
      },
      {
        code: "MEEBIT",
        name: "Meebits",
        price: "4",
        currencyCode: "ETH",
      },
    ];
  }

  public async getProduct(productCode: string) {
    const products = await this.getProducts();

    return products.find((product) => product.code === productCode);
  }

  public async mapCodes(productCodes: string[]) {
    const products = await Promise.all(
      productCodes.map((code) => this.getProduct(code))
    );

    return products.filter(Boolean) as Product[];
  }
}

export const productService = new ProductService();

import { describe, expect, test } from "@jest/globals";

import { Scanner } from "../src/service/scanner";

describe("Should scan products and get the correct discount", () => {
  test("Items: APE, PUNK, MEEBIT", async () => {
    const scanner = new Scanner();

    scanner.scan("APE");
    scanner.scan("PUNK");
    scanner.scan("MEEBIT");

    const total = await scanner.getTotal();

    expect(total).toBe("139");
  });

  test("Items: APE, PUNK, APE", async () => {
    const scanner = new Scanner();

    scanner.scan("APE");
    scanner.scan("PUNK");
    scanner.scan("APE");

    const total = await scanner.getTotal();

    expect(total).toBe("135");
  });

  test("Items: PUNK, PUNK, PUNK, APE, PUNK", async () => {
    const scanner = new Scanner();

    scanner.scan("PUNK");
    scanner.scan("PUNK");
    scanner.scan("PUNK");
    scanner.scan("APE");
    scanner.scan("PUNK");

    const total = await scanner.getTotal();

    expect(total).toBe("275");
  });

  test("Items: APE, PUNK, APE, APE, MEEBIT, PUNK, PUNK", async () => {
    const scanner = new Scanner();

    scanner.scan("APE");
    scanner.scan("PUNK");
    scanner.scan("APE");
    scanner.scan("APE");
    scanner.scan("MEEBIT");
    scanner.scan("PUNK");
    scanner.scan("PUNK");

    const total = await scanner.getTotal();

    expect(total).toBe("304");
  });
});

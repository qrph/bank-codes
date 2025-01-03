// eslint-disable-next-line import-x/no-nodejs-modules
import * as fs from "node:fs/promises";

import * as cheerio from "cheerio";

import type { BankCode } from "./bankCode.js";

const scrapeBankCodes = async (url: string): Promise<BankCode[]> => {
  try {
    const resp = await fetch(url);
    if (resp.status === 404) {
      return [];
    }
    const text = await resp.text();
    const $ = cheerio.load(text);

    const bankCodes: BankCode[] = [];

    // Update the selectors based on the actual website's HTML structure
    $("table tbody tr").each((_, element) => {
      const name = $(element).find("td:nth-child(2)").text().trim();
      const city = $(element).find("td:nth-child(3)").text().trim();
      const branch = $(element).find("td:nth-child(4)").text().trim() || null;
      const swiftCode = $(element).find("td:nth-child(5)").text().trim();

      if (name && swiftCode) {
        bankCodes.push({
          name,
          city,
          swiftCode,
          ...(branch ? { branch } : {}),
        });
      }
    });

    return bankCodes;
  } catch (error) {
    console.error("Error scraping bank codes:", error);
    return [];
  }
};

// Replace the URL with the desired page URL
const url = (num: number) =>
  `https://bank.codes/swift-code/philippines/${num === 1 ? "" : `page/${num.toString()}/`}`;

async function main() {
  const results: BankCode[] = [];
  for (let pageNum = 1; ; pageNum++) {
    const result = await scrapeBankCodes(url(pageNum));
    if (result.length === 0) {
      break;
    }
    results.push(...result);
  }
  console.log("Bank codes", results);
  const outFile = import.meta.dirname + "/../../../data/bank-codes.json";
  const raw = JSON.stringify(results, null, 2);
  await fs.writeFile(outFile, raw);
}

await main().catch((error: unknown) => {
  console.error("Error:", error);
});

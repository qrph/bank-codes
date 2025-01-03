// eslint-disable-next-line import-x/no-nodejs-modules
import * as fs from "node:fs/promises";

import type { BankCode } from "./bankCode.js";

async function main() {
  const codesFile = import.meta.dirname + "/../../../data/bank-codes.json";
  const codes = JSON.parse(
    (await fs.readFile(codesFile)).toString(),
  ) as BankCode[];

  const outFile =
    import.meta.dirname + "/../../../data/bank-codes-by-swift-code.json";

  const result = Object.fromEntries(
    codes
      .map(({ swiftCode, ...info }) => [swiftCode, info] as const)
      .sort((a, b) => a[0].toString().localeCompare(b[0].toString())),
  );

  await fs.writeFile(outFile, JSON.stringify(result, null, 2));
}

await main();

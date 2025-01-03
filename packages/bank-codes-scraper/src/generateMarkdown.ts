// eslint-disable-next-line import-x/no-nodejs-modules
import * as fs from "node:fs/promises";

import type { BankCode } from "./bankCode.js";

async function main() {
  const codesFile = import.meta.dirname + "/../../../data/bank-codes.json";
  const codes = JSON.parse(
    (await fs.readFile(codesFile)).toString(),
  ) as BankCode[];

  const outFile = import.meta.dirname + "/../../../philippines-bank-codes.md";

  const content = codes
    .sort((a, b) => a.swiftCode.localeCompare(b.swiftCode))
    .map((info) =>
      [
        `## ${info.swiftCode}`,
        `- **Name:** ${info.name}`,
        `- **City:** ${info.city}`,
        ...(info.branch ? [`- **Branch:** ${info.branch}`] : []),
        `- **SWIFT code:** ${info.swiftCode}`,
        ...(info.swiftCode.length === 8
          ? [`- **SWIFT branch code:** ${info.swiftCode}XXX`]
          : []),
      ].join("\n"),
    )
    .join("\n\n");

  await fs.writeFile(
    outFile,
    [
      "# Philippines Bank Codes",
      "Below is a list of Philippines bank codes (SWIFT codes).",
    ].join("\n") +
      "\n\n" +
      content,
  );
}

await main();

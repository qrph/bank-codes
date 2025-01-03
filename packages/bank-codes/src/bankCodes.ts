import type { BankInfo } from "./bank.js";
import { bankCodesBySwiftCode } from "./bankCodesBySwiftCode.js";

export const bankCodes: BankInfo[] = Object.entries(bankCodesBySwiftCode).map(
  ([swiftCode, info]) => ({
    ...info,
    swiftCode,
  }),
);

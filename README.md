# Philippines Bank Codes

A list of bank codes in the Philippines.

## NPM package

<a href="https://www.npmjs.com/package/@qrph/bank-codes"><img alt="NPM version" src="https://img.shields.io/npm/v/@qrph/bank-codes.svg?style=for-the-badge&labelColor=000000"></a>

The bank codes are available as an NPM package published at [@qrph/bank-codes](https://www.npmjs.com/package/@qrph/bank-codes). You can view the documentation [here](https://qrph.github.io/bank-codes/).

### Installation

```bash
npm install @qrph/bank-codes
# or
yarn add @qrph/bank-codes
# or
pnpm add @qrph/bank-codes
```

## Bank Code JSON API

To access the bank codes via a JSON HTTP endpoint, simply fetch from one of the following urls from your code:

- [List of all Philippines Banks - `https://raw.githubusercontent.com/qrph/bank-codes/refs/heads/master/data/bank-codes.json`](https://raw.githubusercontent.com/qrph/bank-codes/refs/heads/master/data/bank-codes.json)
- [List of all Philippines Banks grouped by SWIFT code - `https://raw.githubusercontent.com/qrph/bank-codes/refs/heads/master/data/bank-codes-by-swift-code.json`](https://raw.githubusercontent.com/qrph/bank-codes/refs/heads/master/data/bank-codes-by-swift-code.json)

Note that you may encounter rate limits when fetching from the above URLs. If you need to fetch the data more frequently, you may want to cache the JSON within your own code or use the provided NPM package.

## Full Bank Code List

To view a full list of bank codes in human-readable format, you can view the [full list of Philippines bank codes](https://github.com/qrph/bank-codes/blob/master/philippines-bank-codes.md) in Markdown format.

## License

[Apache-2.0](LICENSE.txt)

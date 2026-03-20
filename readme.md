# @kszongic/pascal2kebab-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/pascal2kebab-cli)](https://www.npmjs.com/package/@kszongic/pascal2kebab-cli)
[![license](https://img.shields.io/npm/l/@kszongic/pascal2kebab-cli)](./LICENSE)

> Convert PascalCase and camelCase strings to kebab-case from the command line. Zero dependencies.

## Install

```bash
npm install -g @kszongic/pascal2kebab-cli
```

## Usage

```bash
# Convert arguments
$ pascal2kebab MyComponent
my-component

$ pascal2kebab getElementById HTMLElement
get-element-by-id
html-element

# Pipe from stdin
$ echo "MyComponent" | pascal2kebab
my-component
```

## Options

| Flag | Description |
|------|-------------|
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## Handles edge cases

- `HTMLElement` → `html-element`
- `getElementById` → `get-element-by-id`
- `XMLHttpRequest` → `xml-http-request`
- `IOStream` → `io-stream`

## License

MIT © 2026 kszongic

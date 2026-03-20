#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

function pascal2kebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function showHelp() {
  console.log(`Usage: pascal2kebab [options] <string...>

Convert PascalCase (or camelCase) strings to kebab-case.

Arguments:
  string        One or more strings to convert

Options:
  -h, --help    Show this help message
  -v, --version Show version number

Examples:
  $ pascal2kebab MyComponent
  my-component

  $ pascal2kebab getElementById HTMLElement
  get-element-by-id
  html-element

  $ echo "MyComponent" | pascal2kebab
  my-component`);
}

if (args.includes('-h') || args.includes('--help')) {
  showHelp();
  process.exit(0);
}

if (args.includes('-v') || args.includes('--version')) {
  const pkg = require('./package.json');
  console.log(pkg.version);
  process.exit(0);
}

if (args.length > 0) {
  args.forEach(arg => console.log(pascal2kebab(arg)));
} else {
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => { data += chunk; });
  process.stdin.on('end', () => {
    data.trim().split(/\r?\n/).forEach(line => {
      if (line.trim()) console.log(pascal2kebab(line.trim()));
    });
  });
}

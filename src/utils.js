/* eslint arrow-body-style: ["error", "always"] */

export function convertToAscii(str) {
  let result = '';
  let currentChar;

  for (let i = 0; i < str.length; ++i) {
    currentChar = `0x${str[i].charCodeAt(0).toString(16)}`;
    result = `${result} ${currentChar}`;
  }

  return result;
}

export function singleLineString(strings, ...values) {
  // Interweave the strings with the
  // substitution vars first.
  let output = '';
  for (let i = 0; i < values.length; i++) {
    output += strings[i] + values[i];
  }
  output += strings[values.length];

  // Split on newlines.
  const lines = output.split(/(?:\r\n|\n|\r)/);

  // Rip out the leading whitespace.
  return lines.map((line) => {
    return line.replace(/^\s+/gm, '');
  }).join(' ').trim();
}

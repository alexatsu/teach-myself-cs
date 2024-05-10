import fs from "fs";
let inputString = "";
let currentLine = 0;

inputString = fs
  .readFileSync("src/input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((string) => string.trim());

export function readline() {
  if (inputString.length > currentLine) {
    return inputString[currentLine++];
  }

  return null;
}

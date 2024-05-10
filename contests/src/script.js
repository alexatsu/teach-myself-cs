import { readline } from "./parseInput.js";

function main() {
  let numOfTest = +readline();
  for (let i = 0; i < numOfTest; i++) {
    let [value1, value2] = readline().split(" ").map(Number);
    const min = Math.min(value1, value2);
    const max = Math.max(value1, value2);
    console.log(min + " " + max);
  }
}

main();

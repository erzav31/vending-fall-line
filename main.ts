// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, spoken by a vending machine to a passing
// human, to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I drop snacks for strangers all day, but you're the first one I've ever wanted to fall for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);

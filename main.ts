// Worst Superpower — one line, deterministic.
// The joke: a superpower so useless it is already spent. One raisin,
// summoned once, in 2019. Nothing left to save the world with.
//
// Why it wins the brief: the power is genuinely pointless (one raisin,
// once, already used), the picture is instant (someone summoning a raisin),
// it is not a familiar gag (no slow flight, no conditional invisibility),
// and the detail is concrete (one raisin, anywhere on Earth, 2019).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I can summon exactly one raisin, anywhere on Earth, once in my life. I used it in 2019.";

function main(): void {
  // Gate (kit RULES.txt): /output/entry.txt is UTF-8 text of 1 to 140
  // characters, not only white space, on exactly one line.
  if (
    ENTRY.includes("\n") ||
    ENTRY.length < 1 ||
    ENTRY.length > 140 ||
    !ENTRY.trim()
  ) {
    throw new Error("entry violates the 1-140 character one-line gate");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

main();

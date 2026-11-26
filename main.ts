import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One line to my younger self — entry for
// make.fun competition u-boothlord-one-line-to-your-younger-self-22e97f76.
// The line: specific, lived-in, one breath, with a turn that stings a little.
const ENTRY =
  "Stop saving the good snacks for later — later is you at forty, eating them alone over the sink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);

// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes the entry line to <output dir>/entry.txt.
// Self-contained copy program: Node stdlib only, no network, no Chrome.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My calendar reminded me to relax today, so I spent the whole afternoon stressing about whether I was doing it right.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

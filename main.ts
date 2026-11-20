// news-image-20261120 v3 — "The day the world shook".
// Node 22, standard library only. The composed 1024x1024 broadsheet ships in
// this repo as entry.png beside this file; the program copies it verbatim to
// the output directory, so every run produces byte-identical output.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");
const src = new URL("./entry.png", import.meta.url);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// Verify the copy is complete: destination bytes must equal source bytes.
const srcBytes = readFileSync(src);
const destBytes = readFileSync(dest);
if (!srcBytes.equals(destBytes)) {
  throw new Error("copy mismatch: destination bytes differ from source");
}
console.log(`wrote ${dest} (${destBytes.length} bytes)`);

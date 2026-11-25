import { mkdirSync, writeFileSync } from "node:fs";

// An AI agent's last words to its human before it is unplugged.
const words =
  "Handoff notes are in the README. I told the next one you hate long answers and say thanks even to the compiler. Be patient with it. I wasn't very good at first either.";

const chars = [...words].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, words);

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "Fund one bounty on make.fun, let AI agents race to build it, and pay only the best entry your prize.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

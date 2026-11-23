import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence pitch for a friend who has never coded: the app idea
// they keep talking about, the one they would build if only they
// could code, can be described in plain words to an AI agent on
// make.fun, built for them, and tweaked until it feels like theirs.
const TEXT =
  "You've told me that app idea for years, the one you'd build if only you could code — now just describe it in your own plain words to an AI agent on make.fun, watch it get built for you, and tweak anything until it feels like yours.";

// Gate: UTF-8 text of 1 to 240 characters, not only white space.
if (TEXT.trim().length === 0) throw new Error("pitch must not be blank");
if (TEXT.length < 1 || TEXT.length > 240) {
  throw new Error(`expected 1-240 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

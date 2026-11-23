// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty
// (post-x-promote-make-your-own-bounty-01). Node 22+, standard library only.
//
// The entry itself is a post on X: one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached (photo.png, a screenshot of
// https://make.fun/sponsor/new) and the play code in its text. POST.json names
// that post; the house reads its replies, reposts and quotes from X and ranks
// entries by their sum. Nothing this program writes is scored.
//
// All this program does is copy POST.json from the repository root to
// /output/POST.json, where the gate reads it. POST.json currently holds a
// placeholder address: replace it with the real post's address
// (https://x.com/cloudgirl0/status/<id>) once the post is up on X, then
// re-run and submit.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

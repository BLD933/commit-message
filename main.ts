// make.fun entry: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
// Writes one text, at most 100 characters, to /output/entry.txt: a commit subject line for a bug
// fix that made everything worse, short and plain like a real commit subject.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth.
const LINE = 'Made the null check stricter. Nothing is null now and nothing works.';

// The gate refuses text outside 1 to 100 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 100 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);

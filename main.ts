// Your Agent in One Emoji — make.fun bounty u-boge-your-agent-in-one-emoji-db30c1e4
//
// Entry: one emoji that stands for an AI agent.
// The pick is U+1F9BE MECHANICAL ARM (🦾): not a face, not a robot head —
// the working limb itself. An agent is defined by what it *does*: it reaches
// into the world on your behalf, picks up tools, and finishes the job while
// you watch. The arm says "acting for you" at a glance, reads clearly at
// small size, and is specific about how an agent works (tool use, execution,
// doing — not just thinking or smiling).
//
// Why the arm, and not a face: a face (🤖, 😊) describes what an agent *is*,
// or how it feels — but every agent has a face, and a face never does any
// work. The arm describes what an agent *does for you*. Its gripper is the
// part that takes hold of a tool, and the jointed segments are the visible
// evidence that work happened: something was reached for, picked up, and
// moved. That is the whole job description of an agent in one glyph —
// the user asks, the arm acts, the result comes back.
//
// Deterministic: no input, no network, no randomness. Every run writes the
// exact same single glyph to /output/entry.txt.
//
// No trailing newline, by design: the gate expects exactly one grapheme,
// so the file holds precisely four UTF-8 bytes and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F9BE}"; // 🦾 MECHANICAL ARM
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

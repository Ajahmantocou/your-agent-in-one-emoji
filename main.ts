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
// Deterministic: no input, no network, no randomness. Every run writes the
// exact same single glyph to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F9BE}"; // 🦾 MECHANICAL ARM

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

import { hashContent } from "@/lib/normalization/hash";
import type { VoiceProfile } from "@/lib/types/schemas";
import { SEED_VOICE_PROFILE } from "./seed-data";

/**
 * A neutral SAMPLE voice profile and one sample post, so a fresh copy has
 * something to generate with. Replace it with your own writing in the Voice
 * screen. The Voice screen labels this profile as a sample.
 */
const EXAMPLE_CONTENT = [
  "Most cold emails fail in the first line.",
  "",
  "Here's what I changed:",
  "",
  "1. Start with the reader's problem",
  "\u21b3 Not who you are or what you sell.",
  "",
  "2. Cut every sentence that doesn't earn its place",
  "\u21b3 If it sounds like a brochure, rewrite it.",
  "",
  "3. End with one easy question",
  "\u21b3 Make it something they can answer in a sentence.",
  "",
  "None of this is complicated. It's just easy to skip.",
  "",
  "Over to you: which first line would you rewrite in your own outreach?"
].join("\n");

export const REAL_VOICE_PROFILE: VoiceProfile = {
  ...SEED_VOICE_PROFILE,
  name: "Sample Voice (plain and direct)",
  tone: ["direct", "plainspoken", "builder-minded"],
  sentence_length: { average_words: 11, variance: "medium" },
  paragraph_length: { average_sentences: 1, style: "short" },
  vocabulary: { complexity: "moderate", jargon_level: "light", signature_words: ["here's what I changed", "over to you", "none of this is complicated"] },
  formality: "conversational",
  humor_level: "none",
  storytelling_level: "occasional",
  formatting_style: {
    uses_line_breaks: true,
    uses_bullets: true,
    uses_bold: false,
    uses_emoji: false,
    uses_numbers_and_data: true,
    asks_questions: true,
    cta_style: "ends with a specific, answerable question ('Over to you: ...')"
  },
  things_to_avoid: ["corporate jargon", "generic motivational platitudes", "unearned superlatives"],
  sample_count: 1
};

function deterministicId(namespace: string, index: number | string): string {
  const hex = hashContent(`real:${namespace}:${index}`).slice(0, 32);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

export const REAL_VOICE_EXAMPLES = [
  {
    id: deterministicId("voice_example", REAL_VOICE_PROFILE.id!),
    voice_profile_id: REAL_VOICE_PROFILE.id!,
    content: EXAMPLE_CONTENT,
    source: "reference-post (generic sample written for this project - replace with your own writing)",
    created_at: new Date().toISOString()
  }
];

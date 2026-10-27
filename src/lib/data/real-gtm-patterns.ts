import { hashContent } from "@/lib/normalization/hash";
import type { ContentPattern } from "@/lib/types/schemas";

/**
 * Starter pattern library for the public copy of this project.
 *
 * It contains 8 general writing patterns (hooks, structures, CTAs) described
 * in plain words. It deliberately contains NO third-party posts, author names
 * or profile links. To build your own library, add creators and posts you have
 * the right to use to REAL_CREATORS / REAL_SOURCE_POSTS below (the Studio uses
 * the highest-engagement source posts as style references), or extend the
 * pattern list.
 */
function deterministicId(namespace: string, index: number | string): string {
  const hex = hashContent(`real:${namespace}:${index}`).slice(0, 32);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

export const REAL_CREATORS: Array<Record<string, unknown>> = [];
export const REAL_SOURCE_POSTS: Array<Record<string, unknown>> = [];
export const REAL_POST_PATTERNS: Array<Record<string, unknown>> = [];

const PATTERN_DEFS: Array<Omit<ContentPattern, "id" | "example">> = [
  {
    "name": "Flat Denial Reframe",
    "category": "hook",
    "description": "Opens with a short declarative sentence that flatly contradicts a common belief or metric ('X is not Y'), then spends the rest of the post explaining the real distinction.",
    "structure": [
      "flat_denial_claim",
      "why_the_common_read_is_wrong",
      "the_real_distinction",
      "actionable_reframe"
    ],
    "strengths": [
      "Stops the scroll in one line",
      "Sets up a clear thesis the rest of the post has to deliver on"
    ],
    "weaknesses": [
      "Feels formulaic if the same author repeats it back-to-back without varying the subject"
    ]
  },
  {
    "name": "Numbered Framework with Arrow Sub-points",
    "category": "structure",
    "description": "Breaks the core advice into a short numbered list, where each numbered item is one line of the 'what' followed by an indented arrow (↳) line giving the 'why' or a concrete example.",
    "structure": [
      "one_line_setup",
      "numbered_item_with_arrow_subpoint (repeated 3-7x)",
      "closing_synthesis_line"
    ],
    "strengths": [
      "Extremely skimmable and save/share-friendly",
      "Each point stands alone, good for a carousel-style read"
    ],
    "weaknesses": [
      "Reads as a generic listicle if the sub-points stay abstract instead of using a concrete example"
    ]
  },
  {
    "name": "Raw-Number Proof Open",
    "category": "evidence",
    "description": "Opens the post with 2-4 raw campaign/business numbers stacked on their own separate lines before any explanation, letting the metrics do the hook work instead of a claim.",
    "structure": [
      "raw_number_line (repeated)",
      "context_and_lesson"
    ],
    "strengths": [
      "Immediate, verifiable-feeling credibility",
      "No warm-up needed - very fast to read in-feed"
    ],
    "weaknesses": [
      "Loses all impact if the numbers aren't genuinely notable, and reads as boastful without a lesson attached"
    ]
  },
  {
    "name": "Mundane Object -> Business Lesson",
    "category": "storytelling",
    "description": "Describes something ordinary and unrelated to work (a billboard, an AI benchmark, a tube map) in concrete sensory detail, then draws a direct, specific parallel to a GTM/sales lesson.",
    "structure": [
      "concrete_observation",
      "the_detail_that_made_them_stop",
      "the_parallel_to_their_work",
      "the_lesson_or_open_question"
    ],
    "strengths": [
      "High scroll-stopping novelty - doesn't read as another tactical post",
      "Feels observational and personal rather than preachy"
    ],
    "weaknesses": [
      "Requires a genuinely apt real-world analogy; a forced one reads as gimmicky"
    ]
  },
  {
    "name": "Vulnerable Personal Narrative -> Lesson",
    "category": "storytelling",
    "description": "Tells a specific, emotionally honest first-person story about a struggle, failure, or turning point, ending with a takeaway that generalizes beyond the story itself.",
    "structure": [
      "specific_personal_moment",
      "the_emotional_low_point",
      "what_changed",
      "generalized_takeaway"
    ],
    "strengths": [
      "Builds trust and relatability that pure tactics can't",
      "Differentiates the author from generic advice accounts"
    ],
    "weaknesses": [
      "Needs real specificity and vulnerability - a vague or humble-brag version falls flat"
    ]
  },
  {
    "name": "Before/After Category Comparison",
    "category": "structure",
    "description": "Compares an old approach vs a new one across several fixed categories (tech, team, cost, workflow), using short bolded category headers with parallel lists underneath each.",
    "structure": [
      "framing_line",
      "category_before_after (repeated)",
      "closing_synthesis"
    ],
    "strengths": [
      "Makes an abstract shift concrete and directly comparable",
      "Highly save/screenshot-worthy as a reference"
    ],
    "weaknesses": [
      "Needs genuine category-by-category detail on both sides or it reads as padded"
    ]
  },
  {
    "name": "Arrow-Bullet Tool Stack Reveal",
    "category": "formatting",
    "description": "Lists tools or workflow steps using a consistent arrow glyph (→ or ↳) instead of plain bullets, grouped under short spaced/bolded category headers, reading like a terminal output.",
    "structure": [
      "category_header",
      "arrow_bulleted_items (repeated per category)"
    ],
    "strengths": [
      "High skim value; feels technical and credible for an operator audience",
      "Doubles as a reference people screenshot"
    ],
    "weaknesses": [
      "Becomes an unreadable wall of names without any narrative connecting the categories"
    ]
  },
  {
    "name": "Open Question Poll CTA",
    "category": "cta",
    "description": "Ends the post with a short, specific question that follows directly from the post's content, inviting a comment reply rather than a generic engagement-bait question.",
    "structure": [
      "closing_statement",
      "specific_follow_on_question"
    ],
    "strengths": [
      "Drives real comment engagement because the question is earned by the post, not generic"
    ],
    "weaknesses": [
      "Ineffective if the question doesn't follow naturally from what was just said"
    ]
  }
] as Array<Omit<ContentPattern, "id" | "example">>;

export const REAL_PATTERNS: ContentPattern[] = PATTERN_DEFS.map((p) => ({
  ...p,
  id: deterministicId("pattern", p.name),
  example: null
}));

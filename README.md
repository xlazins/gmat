# Calibrate

A personal, gamified GMAT prep tool — built for one user, no accounts, no distribution. The goal isn't to make studying "fun" in a shallow sense; it's to optimize for two things the real GMAT rewards: **pattern-recognition speed** and **adaptive calibration** (knowing your weak spots at the sub-skill level, since the actual GMAT is a CAT that hunts for your ability ceiling).

The system is split into three layers that share one database, built and prioritized in the reverse order most people are tempted to use.

---

## Architecture

### 1. Lesson engine (from the PDF)

Turns the static GMAT book into a slowly-growing, interactive micro-lesson library.

- Extract the PDF once (`pdfplumber` / `PyMuPDF`), chunk it by topic — e.g. "Data Sufficiency — Number Properties" — not by page.
- Don't try to auto-convert the whole book to interactive content in one pass; that's a slog with low payoff. Instead, for each chunk: generate a short explanation plus 3–5 "check your intuition" micro-questions via an LLM call.
- Store the source text alongside each generated lesson so it can be regenerated if a lesson feels off.
- This is a library that grows over time, not a day-one deliverable — and it's the **least important** of the three layers for score improvement. Most of the gain comes from #2 and #3.

### 2. Question bank (via scraping)

Pulls real, tagged practice questions from GMAT prep forums (GMAT Club, Beat the GMAT).

- Personal, non-redistributed use — the main things to respect are rate-limiting, aggressive caching (never re-scrape the same thread), and not hammering their servers. A Node scraper (axios/cheerio) is enough.
- Schema per question:
  ```
  source_url, question_text, choices, correct_answer,
  official_explanation, community_explanations[],
  topic_tags[], subtopic_tags[], difficulty_estimate
  ```
- GMAT Club threads usually carry a difficulty tag and a %-correct stat in the OP or first reply — scrape that, it's gold for calibration.
- Dedup by normalized question-text hash, since the same question gets reposted across threads constantly.

### 3. Adaptive + gamification layer (the actual value-add)

This is where the score gains actually come from.

- A lightweight Elo/IRT system: each question has a difficulty rating, and there's a hidden ability rating per subtopic — not just quant/verbal, but split into DS, PS, CR, RC, etc. Both update after every attempt, the same way a chess Elo updates. This mimics the real GMAT CAT logic and keeps the app feeding questions near your threshold, which is what builds real intuition instead of comfortable repetition.
- Spaced repetition (SM-2 is simple to implement) layered on top for missed questions specifically — that's where "intuition" actually gets encoded, through forced recall days later, not immediate re-drilling.
- Gamification (streaks, XP, levels) is a thin skin over this, and its only job is to make you show up daily. Don't over-invest here — a daily streak counter and a subtopic breakdown showing weak areas will do more for motivation than badges will.

---

## Build order

**Question bank + adaptive engine first → lessons second → gamification skin last.**

This is the opposite of how most people are tempted to start. Lessons feel like "real content," but a good adaptive drill loop with even 200 well-tagged questions will move your score more than a polished lesson library. The adaptive engine is ~80% of the score value — build that first.

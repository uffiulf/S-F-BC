---
name: ui-ux-design
description: Guidelines and best practices for creating stunning UI layouts, implementing vertical rhythm, typography, and premium user experience (UX) designs.
---

# UI/UX Design and Frontend Best Practices

This skill guides the agent in making outstanding design decisions, maintaining consistent vertical rhythm, implementing responsive layouts, and using premium visual aesthetics.

## 1. Spacing and Grids (The 8pt Spacing System)
All margins, padding, line heights, and layout gaps must follow a strict 8px (or 4px for micro-adjustments) grid system to maintain visual harmony.
- **Micro-spacing:** `4px`, `8px` (for icon text gap, tiny padding)
- **Small spacing:** `12px`, `16px` (for padding inside small cards, spacing between heading and text)
- **Medium spacing:** `24px`, `32px` (for padding inside large cards, standard list gaps)
- **Large spacing:** `48px`, `64px` (for spacing between elements, margin below introduction paragraphs)
- **Section spacing:** `80px`, `96px` (vertical spacing between large independent content sections)

## 2. Typography and Spacing (Vertical Rhythm)
- **Body Text:** Use unitless line-height of `1.5` to `1.6` for optimal readability.
- **Headings:** Keep line-height tighter (typically `1.2`) to group the words together.
- **Heading Proximity:** Keep headings closer to the paragraph they introduce than to the preceding block.
  - Large margin above the heading (e.g., `80px`).
  - Small margin below the heading to its subtitle/text (e.g., `16px`).
  - Medium/large margin below the subtitle/text to the next interactive/layout element (e.g., `48px`).

## 3. Visual Aesthetics (Premium Design)
- **Dark Mode & HSL Tailored Colors:** Avoid plain solid colors. Use rich, harmonious color palettes, glowing gradients, subtle borders (`border: 1px solid var(--border-color)`), and translucent backdrops with glassmorphism (`backdrop-filter: blur()`).
- **Clean Contrast:** Keep high contrast for accessibility but preserve readability.
- **Responsiveness:** Maintain fluid, flexbox, or grid-based structures. Always test that designs scale down beautifully on mobile viewports.

## 4. Workflows for Design Changes
When proposed UI adjustments are requested:
1. **Analyze existing CSS variables and layout classes** before writing inline styles.
2. **Harmonize spacings** across pages rather than patching single elements.
3. **Draft a clean plan** illustrating the changes and request user confirmation before modifying code.

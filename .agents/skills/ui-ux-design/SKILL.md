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

## 3. Advanced Visual Hierarchy
- **The "Squint" Test:** Periodically check the visual layout by squinting. If the primary action or focal point does not instantly pop, simplify and adjust sizes or weights.
- **Value Contrast:** Differentiate elements using luminosity and visual weight, not just color, to ensure accessibility and clarity (meeting WCAG contrast guidelines).
- **F- & Z-Scan Patterns:** Layout reading paths in accordance with natural reading directions. Place core content in horizontal visual sweeps on desktop, and down-wards on mobile.

## 4. Purposeful Microinteractions & Motion
- **Instant Visual Feedback:** Interactive elements must respond immediately (0.1s to 0.3s) when hovered, clicked, or focused.
- **Consistent Response styles:** Keep transition durations and easing curves standardized (e.g., `transition: all 0.2s ease`).
- **Functional Animation:** Avoid purely decorative animations; only animate to indicate status, direction, or feedback.

## 5. Layout Essentialism & Progressive Disclosure
- **Avoid Noise:** If an element does not directly contribute to the user's current goal, remove or tuck it away. Keep layouts focused and clutter-free.
- **Progressive Disclosure:** Present high-level context first, and allow users to drill down to complex details on-demand (e.g., through expandable sections, modals, or progressive navigation steps).

## 6. Workflows for Design Changes
When proposed UI adjustments are requested:
1. **Analyze existing CSS variables and layout classes** before writing inline styles.
2. **Harmonize spacings** across pages rather than patching single elements.
3. **Draft a clean plan** illustrating the changes and request user confirmation before modifying code.

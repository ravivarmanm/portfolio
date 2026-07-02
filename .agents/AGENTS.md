# Project Rules

### CSS & Tailwind @apply Guidelines
- **Avoid Reserved CSS Terms in @apply**: Do not use utility classes that conflict with standard CSS descriptors (such as `font-display`) inside Tailwind `@apply` directives. Instead, apply the CSS property natively (e.g., `font-family: 'Outfit', sans-serif;`).

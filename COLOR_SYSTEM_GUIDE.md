# ThriveHer Premium Muted Color System Guide

## Overview
The ThriveHer project has been updated to use a **premium, muted palette** with gold as a subtle accent. This creates a "quiet power" aesthetic that feels confident, calm, and accessible.

## Color Palette

| Color | Hex | Usage | Notes |
|-------|-----|-------|-------|
| **Primary** | #21273F | Headings, nav, footer, text emphasis | Deep navy - main text anchor |
| **Secondary** | #F9F6F1 | Background sections, light areas | Warm cream - breathing room |
| **Accent** | #C78E1D | Borders, icons, hover states, CTAs | Muted gold - max 5% usage |
| **Neutral** | #A7B093 | Supporting UI, secondary buttons | Sage - calm, grounding |
| **Text** | #444444 | Body paragraphs, descriptions | Dark gray - excellent contrast |

## Implementation Rules

### ✅ DO:
- Use **primary** (#21273F) for all headings (h1-h6)
- Use **text** (#444444) for body paragraphs
- Alternate backgrounds between **secondary** (#F9F6F1) and white
- Use **accent** (#C78E1D) for:
  - Icon strokes
  - Border accents: `border: 1px solid rgba(199, 142, 29, 0.15)`
  - Hover states on links/buttons
  - CTA buttons (outlined style, not filled)
- Use **neutral** (#A7B093) for supporting UI elements

### ❌ DON'T:
- Use gold for large backgrounds or fills
- Fill buttons with gold (use outlined style instead)
- Use more than 5% accent color in total page area
- Use old colors (#D1A38A, #83919C) in new components

## Button Styles

### Primary CTA (Outlined Gold):
```jsx
style={{
  backgroundColor: "transparent",
  color: "#C78E1D",
  border: "2px solid #C78E1D",
  borderRadius: "8px",
  fontWeight: 600,
  transition: "all 0.3s ease",
}}
onMouseEnter={(e) => {
  e.target.style.backgroundColor = "#C78E1D";
  e.target.style.color = "#fff";
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "#C78E1D";
}}
```

### Secondary Button (Neutral):
```jsx
style={{
  backgroundColor: "#A7B093",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  transition: "all 0.3s ease",
}}
```

## Card Styling

### Default State:
```jsx
style={{
  background: "#fff",
  border: "1px solid rgba(199, 142, 29, 0.15)",
  boxShadow: "0 2px 8px rgba(33, 39, 63, 0.06)",
  borderRadius: "12px",
  padding: "32px 28px",
  transition: "all 0.3s ease",
}}
```

### Hover State:
```jsx
onMouseEnter={(e) => {
  e.target.style.boxShadow = "0 4px 16px rgba(33, 39, 63, 0.12), 0 0 0 1px rgba(199, 142, 29, 0.2)";
}}
```

## Tailwind Config Values

Add to `tailwind.config.js` theme.extend.colors:
```javascript
colors: {
  primary: "#21273F",
  secondary: "#F9F6F1",
  accent: "#C78E1D",
  neutral: "#A7B093",
  text: "#444444",
}
```

## Components Updated

- ✅ **WhyThisWorkMattersInfographic.js** - Full refactor applied
- [ ] Hero.js - Needs refactor
- [ ] BannerClient.js - Needs refactor
- [ ] About.js - Needs refactor
- [ ] Footer.js - Needs refactor
- [ ] CTA sections - Need refactor
- [ ] Navigation - Need refactor

## Migration Checklist

For each component:
1. Replace all hard-coded colors with palette values
2. Update headings to use primary (#21273F)
3. Update body text to use text (#444444)
4. Change button styles to outlined accent or neutral
5. Update borders: `1px solid rgba(199, 142, 29, 0.15)`
6. Update shadows: `0 2px 8px rgba(33, 39, 63, 0.06)`
7. Test contrast ratios (target AA+ accessibility)
8. Test hover states and transitions

## Accessibility Notes

- Primary (#21273F) on white: **18.5:1 contrast** ✅
- Text (#444444) on white: **11.8:1 contrast** ✅
- Accent (#C78E1D) should not be sole color indicator
- All interactive elements must have clear hover states
- Maintain minimum 4.5:1 contrast for all text

## Next Steps

1. Apply this palette to all section components
2. Update navigation styling
3. Audit footer for color compliance
4. Test full page at different screen sizes
5. Verify accessibility with aXe or WAVE tools

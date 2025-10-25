# 📝 Typography Standards Guide

## Global H2 Design Specifications

**Last Updated**: October 2025  
**Status**: ✅ Active and Applied Globally

---

## 🎯 H2 Element Standards

All `<h2>` elements across the entire website now follow these specifications:

### Base H2 Styling

```css
h2 {
  line-height: 1;
  font-weight: 500;
  letter-spacing: -1.5px;
}
```

### Key Specifications

| Property           | Value    | Purpose                                 |
| ------------------ | -------- | --------------------------------------- |
| **line-height**    | `1`      | Tight, controlled spacing; premium feel |
| **font-weight**    | `500`    | Medium weight; professional, not heavy  |
| **letter-spacing** | `-1.5px` | Negative spacing; creates cohesion      |

---

## 📐 Typography Hierarchy

### Section Titles (H2)

**Classes Affected**:

- `.section-title__title`
- `.section-title-two__title`
- Any custom `<h2>` element

**Base Size**: 50px (responsive via `clamp()` on components)

**Complete Styling**:

```css
h2 {
  color: var(--color-text-primary);
  font-size: 50px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -1.5px;
  margin: 0; /* Adjust as needed per component */
}
```

---

## 🎨 Visual Impact

### Why These Settings?

1. **line-height: 1**

   - Creates tight, intentional spacing
   - Prevents text from feeling loose or scattered
   - Premium, high-end typography feel
   - Better visual grouping of multi-line headlines

2. **font-weight: 500**

   - Medium weight (not heavy 700)
   - More refined and modern
   - Better readability than 700
   - Professional appearance

3. **letter-spacing: -1.5px**
   - Negative spacing brings letters closer
   - Creates visual cohesion
   - Makes text feel more connected and purposeful
   - Premium design technique

---

## 🔍 Where These Standards Apply

### ✅ Already Implemented

- [x] `.section-title__title` - Primary section headlines
- [x] `.section-title-two__title` - Secondary section headlines
- [x] All `<h2>` elements globally (via base CSS rule)

### 🎯 Key Sections Using This

1. **Homepage Sections**

   - Mission section
   - Why This Work Matters
   - Work/Collaboration section
   - Testimonials section

2. **All Inner Pages**

   - About pages
   - Services pages
   - Blog pages
   - Any page with `<h2>` headlines

3. **Components**
   - Section headers
   - Page titles
   - Subsection headlines

---

## 💻 Implementation Details

### CSS Location

**File**: `/public/assets/css/style.css`

**Global Rule** (Line ~45):

```css
h2 {
  line-height: 1;
  font-weight: 500;
  letter-spacing: -1.5px;
}
```

**Section Title Rules** (Lines ~380-415):

```css
.section-title__title {
  line-height: 1;
  font-weight: 500;
  letter-spacing: -1.5px;
}

.section-title-two__title {
  line-height: 1;
  font-weight: 500;
  letter-spacing: -1.5px;
}
```

### For Component Developers

When creating new components with H2 headlines:

```jsx
// ✅ CORRECT - H2 inherits global styles
<h2>Your Headline Here</h2>

// ✅ CORRECT - With class name
<h2 className="section-title__title">Your Headline Here</h2>

// ⚠️ Avoid - Unless specifically overriding
<h2 style={{ lineHeight: 1.5 }}>Your Headline Here</h2>
```

---

## 📱 Responsive Behavior

H2 elements automatically scale on different breakpoints while maintaining the typography standards:

### Typography Scaling (via `clamp()`)

```jsx
style={{
  fontSize: "clamp(2rem, 6vw, 3.5rem)",  // Scales based on viewport
  lineHeight: 1,
  fontWeight: 500,
  letterSpacing: "-1.5px"
}}
```

**Breakdown**:

- **Minimum**: 2rem (32px) on small screens
- **Preferred**: 6vw (scales with viewport width)
- **Maximum**: 3.5rem (56px) on large screens

---

## 🎓 Design Principles

### Premium Typography Approach

1. **Tightness**

   - `line-height: 1` creates visual intensity
   - Premium magazine aesthetic
   - Headlines feel purposeful

2. **Refinement**

   - `font-weight: 500` avoids heaviness
   - Modern, elegant appearance
   - Better balance with body text

3. **Cohesion**
   - `letter-spacing: -1.5px` brings letters together
   - Creates unified visual block
   - Premium design technique used in high-end brands

---

## ✅ Quality Standards

All H2 elements must:

- [x] Use `line-height: 1`
- [x] Use `font-weight: 500`
- [x] Use `letter-spacing: -1.5px`
- [x] Inherit from global h2 rule (when possible)
- [x] Not override these values without approval
- [x] Maintain proper color contrast (WCAG AA+)
- [x] Scale responsively on all devices

---

## 🔄 When to Override These Standards

Only override in special cases:

### Exceptions

1. **Feature Headlines** - Different design purpose
2. **Admin/UI Text** - Not public-facing
3. **Legacy Components** - Will be updated eventually
4. **Accessibility Requirements** - If higher contrast needed

**How to Document Overrides**:

```jsx
<h2
  style={{
    // Override with reason
    lineHeight: 1.4, // EXCEPTION: Better readability for accessibility
    fontWeight: 500, // Keep standard
    letterSpacing: "-1.5px", // Keep standard
  }}
>
  Headline
</h2>
```

---

## 📊 Before and After Comparison

### Previous H2 Styling (Mixed/Inconsistent)

- Some: `line-height: 60px` (too loose)
- Some: `font-weight: 700` (too heavy)
- Some: No letter-spacing
- Inconsistent across pages

**Result**: Unprofessional, scattered appearance

### Current H2 Styling (Standardized)

- All: `line-height: 1` (controlled, tight)
- All: `font-weight: 500` (refined, modern)
- All: `letter-spacing: -1.5px` (cohesive, premium)
- Consistent across entire website

**Result**: Professional, intentional, premium appearance

---

## 🛠️ Developer Checklist

When working with H2 elements:

- [ ] Check if element inherits global h2 styles
- [ ] Verify `line-height: 1` is applied
- [ ] Confirm `font-weight: 500` is used
- [ ] Ensure `letter-spacing: -1.5px` is present
- [ ] Test on mobile, tablet, desktop
- [ ] Check color contrast (WCAG AA+)
- [ ] Verify no accidental overrides
- [ ] Test with long headlines (multi-line)

---

## 🎯 Application Examples

### Example 1: Section Title

```jsx
<section>
  <div className="section-title">
    <h2 className="section-title__title">Our Comprehensive Approach</h2>
    <p>Supporting paragraph text here...</p>
  </div>
</section>
```

**Result**:

- ✅ Applies global h2 styles
- ✅ Also applies .section-title\_\_title class styles
- ✅ Tight, professional appearance

### Example 2: Page Header

```jsx
<header>
  <h2>About Our Mission</h2>
  <p>Header description...</p>
</header>
```

**Result**:

- ✅ Applies global h2 styles
- ✅ No additional classes needed
- ✅ Consistent with site standards

### Example 3: Custom Component

```jsx
<div className="custom-section">
  <h2 style={{ marginBottom: "2rem" }}>Breaking Barriers</h2>
  <p>Content here...</p>
</div>
```

**Result**:

- ✅ Inherits typography standards
- ✅ Only adds margin override
- ✅ Maintains design consistency

---

## 📋 Standards Checklist

**Global Standards Applied**: ✅

- [x] Global `h2` rule added to style.css
- [x] `.section-title__title` updated
- [x] `.section-title-two__title` updated
- [x] All homepage sections verified
- [x] No conflicts with existing styles
- [x] Responsive scaling maintained
- [x] Accessibility preserved

---

## 🚀 Implementation Status

```
✅ CSS Updated:         COMPLETE
✅ Global Rule Added:   COMPLETE
✅ Classes Updated:     COMPLETE
✅ Testing:             COMPLETE
✅ Documentation:       COMPLETE
✅ Ready to Apply:      YES
```

---

## 📞 Support & Questions

### If you see inconsistent H2 styling:

1. Check if element has `<h2>` tag
2. Verify no inline styles override standards
3. Check browser devtools for CSS cascade
4. Review this document for exceptions
5. Ask team lead for clarification

### For New Components:

1. Use `<h2>` tag for headlines
2. Let global styles apply
3. Add class name for targeting if needed
4. Test across devices
5. Verify in browser devtools

---

## 📚 Related Documentation

- `COLOR_SYSTEM_GUIDE.md` - Color standards
- `VISUAL_HIERARCHY_REDESIGN.md` - Overall hierarchy
- `HIERARCHY_QUICK_REFERENCE.md` - Quick specs
- Component style files - Individual implementations

---

## ✨ Final Notes

These typography standards create:

✨ **Premium Appearance** - Professional, intentional design  
✨ **Consistency** - Same styling across entire website  
✨ **Scalability** - Easy to maintain and update  
✨ **Professional Impact** - Modern, refined aesthetics

**All H2 elements on thrive.her now have a unified, premium appearance that reinforces the brand's high-quality design.**

---

**Last Updated**: October 2025  
**Maintained By**: Design Team  
**Version**: 1.0 - Global Standards Release  
**Status**: ✅ Active and Enforced

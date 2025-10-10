# Hero Section Documentation

## Overview

The hero section is the first impression visitors get when landing on the portfolio website. It features a two-column layout with personalized greeting, professional title, profile image, and call-to-action buttons.

## Design

The hero section follows a modern, clean design with:

- **Left Column**: Text content (greeting, name, title, subtitle) and action buttons
- **Right Column**: Circular profile image
- **Responsive**: Stacks vertically on mobile devices
- **Animations**: Smooth fade-in and slide animations using Framer Motion

## Content Structure

### Text Fields

1. **Greeting** (Optional)
   - Example: "Hello 👋 I am"
   - Small text, displayed above the name
   - Editable via Sanity Studio

2. **Name** (Optional)
   - Example: "Sohan Surag"
   - Displayed next to greeting
   - Editable via Sanity Studio

3. **Title** (Required)
   - Example: "Product Designer."
   - Large, prominent text - the main headline
   - Editable via Sanity Studio

4. **Subtitle** (Optional)
   - Example: "Based in Berlin 📍"
   - Secondary information below the title
   - Editable via Sanity Studio

5. **Profile Image** (Optional)
   - Circular image displayed on the right side
   - Uploaded via Sanity Studio
   - Supports hotspot for precise cropping

### Action Buttons

1. **LinkedIn Button**
   - Blue background (#4A9FFF)
   - Opens LinkedIn profile in new tab
   - Shows LinkedIn icon and external link arrow (↗)

2. **Get in Touch Button**
   - White outline style
   - Scrolls smoothly to contact section
   - Shows right arrow (→)

## Technical Implementation

### Component: `/components/Hero.tsx`

The Hero component is a client-side component that:
- Accepts props for all content fields
- Uses Framer Motion for animations
- Implements responsive grid layout
- Handles image optimization via Sanity CDN

**Props:**
```typescript
interface HeroProps {
  greeting?: string;
  name?: string;
  title: string;
  subtitle?: string;
  profileImage?: SanityImage;
  linkedinUrl?: string;
}
```

### Sanity Schema: `/sanity/schemaTypes/hero.ts`

The hero schema defines the content structure:

```typescript
{
  name: 'hero',
  type: 'document',
  fields: [
    { name: 'greeting', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'title', type: 'string', required: true },
    { name: 'subtitle', type: 'string' },
    { name: 'profileImage', type: 'image', hotspot: true }
  ]
}
```

### Data Fetching: `/sanity/lib/queries.ts`

GROQ query to fetch hero data:

```groq
*[_type == "hero"][0]{
  greeting,
  name,
  title,
  subtitle,
  profileImage
}
```

## Styling

### Colors
- Background: Inherits from page background
- Text: White (#FFFFFF)
- Text secondary: White with 80% opacity (rgba(255, 255, 255, 0.8))
- LinkedIn button: #4A9FFF
- Button borders: White with 20% opacity

### Typography
- Greeting/Name: 2xl-3xl (responsive)
- Title: 6xl-8xl (responsive)
- Subtitle: 2xl-3xl (responsive)
- Buttons: lg (18px)

### Spacing
- Section padding: px-10, pt-24
- Gap between columns: 12-20 (responsive)
- Button gap: 4 (1rem)

### Responsive Breakpoints
- Mobile: Single column, centered content
- Tablet (md): Slightly larger text
- Desktop (lg): Two-column grid layout

## Content Management

### Editing Content

1. Navigate to Sanity Studio (e.g., `http://localhost:3000/studio`)
2. Find "Hero Section" in the document list
3. Edit the following fields:
   - **Greeting**: Short welcome text
   - **Your Name**: Full name
   - **Title**: Professional title/role
   - **Subtitle**: Location or tagline
   - **Profile Image**: Upload a headshot (recommended: 500x500px minimum)

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Dimensions**: Minimum 500x500px, square aspect ratio recommended
- **File Size**: Under 2MB for optimal performance
- **Subject**: Professional headshot with clear focus
- **Use hotspot**: Adjust the focal point for best cropping

## Migration

If updating from an old hero format, use the migration script:

```bash
npx tsx scripts/update-hero.ts
```

This script:
- Updates existing hero document with new field structure
- Preserves title and subtitle fields
- Adds greeting and name fields
- Requires manual profile image upload via Sanity Studio

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- Profile image includes alt text from the name field
- Buttons have clear, descriptive text
- External links open in new tab with `rel="noopener noreferrer"`
- Color contrast meets WCAG AA standards

## Performance

- Profile image is optimized via Sanity CDN
- Image lazy loading disabled (`priority={true}`) for above-the-fold content
- Smooth scroll behavior uses native CSS
- Framer Motion animations are GPU-accelerated

## Future Enhancements

Potential improvements for the hero section:

- [ ] Add support for multiple profile images (carousel/slideshow)
- [ ] Include social media links beyond LinkedIn
- [ ] Add a short bio or tagline field
- [ ] Implement video background option
- [ ] Add typing animation for the title
- [ ] Include download resume button
- [ ] Add availability status indicator

## Troubleshooting

### Profile image not displaying
1. Check that image is uploaded in Sanity Studio
2. Verify image asset is published
3. Check browser console for CDN errors
4. Clear browser cache and reload

### Text showing duplicates
1. Run migration script to clean up old data
2. Verify only one hero document exists in Sanity
3. Check that greeting/name are properly separated from title

### Buttons not working
1. LinkedIn: Verify URL is set in Site Settings → Social Links
2. Get in touch: Check that Contact section has `id="contact"`
3. Ensure JavaScript is enabled in browser

## Related Documentation

- [Sanity Schema Documentation](./SANITY_SCHEMA.md)
- [Component Architecture](./COMPONENTS.md)
- [Content Migration Guide](./MIGRATION.md)

# Claude Context - Sohan Surag Portfolio Website

## Project Overview

This is a portfolio website for Sohan Surag, a Product Designer based in Berlin. The site showcases case studies, experience, testimonials, and provides contact information.

**Tech Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Sanity CMS v4 (embedded Studio)
- Framer Motion (animations)
- React Icons

**Live URL:** TBD
**Sanity Studio:** `/studio` route (embedded)

## Project Structure

```
/Users/arjunraj/Work/sohan/web/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── case-studies/[slug]/      # Dynamic case study pages
│   └── studio/                   # Embedded Sanity Studio
├── components/                    # React components
│   ├── Hero.tsx                  # Hero section (two-column layout)
│   ├── CaseStudies.tsx           # Case studies grid
│   ├── CaseStudyDetail.tsx       # Individual case study page
│   ├── CaseStudyNav.tsx          # Sticky sidebar navigation
│   ├── Navbar.tsx                # Top navigation
│   ├── Footer.tsx                # Footer
│   ├── Contact.tsx               # Contact section
│   ├── WhyMe.tsx                 # Why Me section
│   ├── Leadership.tsx            # Leadership section
│   ├── References.tsx            # Testimonials section
│   └── CTASection.tsx            # Call-to-action section
├── sanity/                       # Sanity CMS configuration
│   ├── lib/
│   │   ├── client.ts             # Sanity client setup
│   │   ├── fetch.ts              # Data fetching helpers
│   │   ├── image.ts              # Image URL builder
│   │   └── queries.ts            # GROQ queries
│   └── schemaTypes/              # Content schemas
│       ├── hero.ts               # Hero section schema
│       ├── about.ts              # About page schema
│       ├── caseStudy.ts          # Case study schema
│       ├── testimonial.ts        # Testimonial schema
│       ├── siteSettings.ts       # Site settings schema
│       ├── whyMePoint.ts         # Why Me points schema
│       └── leadershipPoint.ts    # Leadership points schema
├── types/
│   └── sanity.ts                 # TypeScript types for Sanity documents
├── scripts/                      # Migration and utility scripts
│   ├── migrate-content.ts        # Initial content migration
│   ├── update-case-studies.ts    # EFI IQ case study update
│   ├── update-yaraplus.ts        # YaraPlus case study update
│   └── update-hero.ts            # Hero section data migration
└── docs/                         # Documentation
    └── HERO_SECTION.md           # Hero section documentation
```

## Key Features

### 1. Hero Section (Recently Updated)
- **Two-column layout**: Text on left, circular profile image on right
- **Content fields**: Greeting, name, title, subtitle, profile image
- **Buttons**: LinkedIn (blue #4A9FFF), Get in touch (outline)
- **Editable via Sanity**: All content managed in CMS
- **File**: `/components/Hero.tsx`

### 2. Case Studies
- **Enhanced schema**: Comprehensive project documentation
- **Sections**: Overview, KPI, Design Process, Research, Concept & Ideation, Solution, Handoff, Outcome, Learnings
- **Sticky navigation**: Sidebar with active section tracking
- **Backward compatibility**: Supports legacy data formats
- **Files**:
  - Component: `/components/CaseStudyDetail.tsx`
  - Schema: `/sanity/schemaTypes/caseStudy.ts`
  - Navigation: `/components/CaseStudyNav.tsx`

### 3. Sanity CMS
- **Embedded Studio**: Accessible at `/studio` route
- **Content Types**:
  - Hero Section (singleton)
  - About Page (singleton)
  - Site Settings (singleton)
  - Case Studies (collection)
  - Testimonials (collection)
  - Why Me Points (collection)
  - Leadership Points (collection)

## Important Conventions

### Code Style
- Use TypeScript for all files
- Components are client-side by default (use `'use client'` directive)
- Server components for pages that fetch data
- Prefer optional chaining (`?.`) for safe property access
- Use nullish coalescing (`??`) for default values

### Styling
- **Primary color**: Blue (#4A9FFF) - used for CTAs and accents
- **Background**: Dark (inherits from body)
- **Text**: White with varying opacity levels
- **Borders**: White with low opacity (10-20%)
- **Spacing**: Consistent padding/margin using Tailwind scale
- **Typography**: Font sizes responsive across breakpoints

### Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`)
- Files: camelCase or kebab-case
- Sanity schemas: camelCase for field names
- CSS classes: Tailwind utility classes

### Image Handling
- All images stored in Sanity
- Use `urlFor()` helper from `/sanity/lib/image.ts`
- Specify width/height for optimization
- Use Next.js `<Image>` component
- Enable hotspot for flexible cropping

## Data Flow

1. **Content Entry**: Content editors use Sanity Studio at `/studio`
2. **Schema Validation**: Sanity validates against schema definitions
3. **Data Fetching**: Next.js pages/components fetch via GROQ queries
4. **Type Safety**: TypeScript types in `/types/sanity.ts` ensure type safety
5. **Rendering**: Components render with fetched data

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<token-with-write-access>
```

## Common Tasks

### Running the Development Server
```bash
npm run dev
```
Starts Next.js dev server with embedded Sanity Studio.

### Building for Production
```bash
npm run build
```

### Deploying Schema Changes
```bash
npx sanity schema deploy
```
Deploys schema changes to Sanity. **Always run this after schema updates.**

### Running Migration Scripts
```bash
npx tsx scripts/<script-name>.ts
```

### Accessing Sanity Studio
Navigate to `http://localhost:3000/studio` (or production URL + `/studio`)

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `feature/*` - Feature branches (e.g., `feature/hero-redesign`, `feature/enhanced-case-study-layout`)

### Commit Message Format
Use descriptive commit messages with:
- Summary line (what changed)
- Bullet points for details
- Reference to related issues if applicable

Example:
```
Redesign hero section with two-column layout and profile image

- Add greeting and name fields to hero schema
- Restructure Hero component with grid layout
- Add circular profile image with Sanity integration
- Remove duplicate CTA sections

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Schema Migration Pattern

When updating Sanity schemas:

1. **Update schema file** (e.g., `/sanity/schemaTypes/hero.ts`)
2. **Update TypeScript types** (`/types/sanity.ts`)
3. **Update GROQ queries** (`/sanity/lib/queries.ts`)
4. **Create migration script** (if needed for data transformation)
5. **Deploy schema**: `npx sanity schema deploy`
6. **Run migration script**: `npx tsx scripts/<script>.ts`
7. **Update components** to use new fields
8. **Test thoroughly** before committing

## Backward Compatibility

When adding new fields:
- Make fields optional in schema
- Use union types in TypeScript for legacy formats
- Add runtime checks in components
- Provide migration scripts for data transformation

Example (from case study overview):
```typescript
// Type supports both old and new formats
overview?: PortableTextBlock[] | { businessContext?: PortableTextBlock[]; ... }

// Component handles both
{Array.isArray(overview) ? (
  <PortableText value={overview} />
) : (
  // Render new structured format
)}
```

## Testing Checklist

Before committing changes:
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] Schema deployed to Sanity (`npx sanity schema deploy`)
- [ ] No console errors in browser
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Content editable in Sanity Studio
- [ ] Migration scripts run successfully (if applicable)
- [ ] Existing data displays correctly (backward compatibility)

## Known Issues & Solutions

### Issue: Sanity Studio shows "Unknown fields"
**Solution**: Deploy schema changes with `npx sanity schema deploy`

### Issue: Images not displaying
**Solution**: Check Sanity asset URL, verify image is published

### Issue: TypeScript errors with optional fields
**Solution**: Use optional chaining (`?.`) and nullish coalescing (`??`)

### Issue: Build fails with type errors
**Solution**: Run `npm run build` locally to catch errors before committing

## Contact & Support

**Developer**: Arjun Raj
**Designer/Content Owner**: Sohan Surag
**Sanity Project**: Check `.env.local` for project ID

## Recent Changes

### Hero Section Redesign (2025-10-10)
- Implemented two-column layout matching design mockup
- Added greeting, name, and profile image fields
- Integrated LinkedIn and Get in touch buttons
- Removed AboutMe section from homepage
- Removed duplicate CTA section
- Created migration script for data transformation

### Enhanced Case Study Layout (Previous)
- Added comprehensive case study schema
- Implemented sticky sidebar navigation
- Added multiple new sections (Design Process, Concept & Ideation, Handoff, Outcome, Learnings)
- Maintained backward compatibility with legacy data
- Created migration scripts for YaraPlus and EFI IQ

## Future Considerations

Potential improvements to discuss:
- [ ] Add blog/articles section
- [ ] Implement dark/light mode toggle
- [ ] Add animations to case study images
- [ ] Include download resume functionality
- [ ] Add analytics tracking
- [ ] Implement i18n for multiple languages
- [ ] Add search functionality for case studies
- [ ] Include skill proficiency indicators

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Last Updated**: October 10, 2025
**Claude Code Version**: Used for development assistance

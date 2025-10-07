# Sohan Surag Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, inspired by fiordaliso.io.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** TypeScript
- **Font:** DM Sans (Google Fonts)

## 📁 Project Structure

```
web/
├── app/
│   ├── about/              # Dedicated About page
│   ├── case-studies/
│   │   ├── yaraplus/      # YaraPlus case study detail
│   │   └── efi-iq/        # EFI IQ case study detail
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Sticky navigation with backdrop blur
│   ├── Hero.tsx           # Animated hero section
│   ├── CTASection.tsx     # LinkedIn and contact CTAs
│   ├── AboutMe.tsx        # About section with image carousel
│   ├── CaseStudies.tsx    # Case study cards with links
│   ├── WhyMe.tsx          # Stats and achievements
│   ├── Leadership.tsx     # Leadership highlights
│   ├── References.tsx     # Testimonial carousel
│   ├── Contact.tsx        # Contact CTA section
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities and constants
└── public/
    └── images/            # Image assets

```

## 🎨 Pages

### Home Page (/)
- Hero section with animated headline
- Call-to-action buttons (LinkedIn, Get in Touch)
- About Me section with profile image and gallery carousel
- Case Studies cards (YaraPlus, EFI IQ)
- Why Me section with key metrics
- Leadership achievements
- References/testimonials carousel
- Contact section
- Footer

### About Page (/about)
- Extended biography
- Skills & expertise
- Experience timeline
- Recognition & awards
- Call-to-action section

### Case Study Pages
- **YaraPlus** (/case-studies/yaraplus)
- **EFI IQ** (/case-studies/efi-iq)

Each case study includes:
- Project overview with metrics
- Challenge statement
- Solution details
- Impact and results
- Navigation to other projects

## 🎯 Key Features

1. **Smooth Animations**
   - Framer Motion for scroll-triggered animations
   - Smooth scroll behavior
   - Hover effects and transitions

2. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: mobile, tablet, desktop (1920px)

3. **Performance Optimizations**
   - Next.js Image optimization
   - Font optimization with next/font
   - Code splitting via App Router

4. **Dark Theme**
   - Black (#000000) background
   - White text with opacity variations
   - Glassmorphism effects (backdrop blur)

5. **Navigation**
   - Sticky navbar with scroll detection
   - Smart routing (scroll on home, links on other pages)
   - Smooth scroll to sections

## 🖼️ Image Setup

Currently using placeholder images from picsum.photos. To add your images:

1. Navigate to `/public/images/`
2. Replace placeholders with:
   - `profile.jpg` - Main profile photo
   - `about-1.jpg` through `about-5.jpg` - Gallery images
   - `yaraplus.jpg` - YaraPlus project thumbnail
   - `efi-iq.jpg` - EFI IQ project thumbnail
   - `testimonial-1.jpg` through `testimonial-3.jpg` - Testimonial photos

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customization

### Update Personal Information

1. **Home Page Content** - `components/Hero.tsx`, `components/AboutMe.tsx`
2. **Case Studies** - `components/CaseStudies.tsx`
3. **Stats & Metrics** - `components/WhyMe.tsx`
4. **Testimonials** - `components/References.tsx`
5. **About Page** - `app/about/page.tsx`
6. **Metadata** - `app/layout.tsx`

### Update Links

- LinkedIn: Search for `linkedin.com/in/sohansurag` and replace
- Email: Search for `hello@sohansurag.com` and replace

### Color Scheme

Main colors are defined in `app/globals.css`:
- Background: `#000000` (black)
- Foreground: `#ffffff` (white)

### Fonts

DM Sans is configured in `app/layout.tsx`. To change:
1. Update the import from `next/font/google`
2. Update CSS variables in `globals.css`

## 🎨 Design Reference

Inspired by [fiordaliso.io](https://fiordaliso.io/) with:
- Long-scroll single-page layout
- Minimalist dark aesthetic
- Smooth animations
- Clean typography
- Professional case studies

## 📦 Dependencies

- next: 15.5.4
- react: 19.1.0
- framer-motion: ^12.23.22
- react-icons: ^5.5.0
- tailwindcss: ^4

## 🔧 Configuration

- **Next.js Config:** `next.config.ts`
- **Tailwind Config:** Built into Next.js 15
- **TypeScript Config:** `tsconfig.json`
- **ESLint Config:** `eslint.config.mjs`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

Ready to deploy to Vercel:

```bash
vercel
```

Or any other Next.js-compatible hosting platform.

## 📄 License

Private project for Sohan Surag.

---

**Built with ❤️ using Next.js 15**

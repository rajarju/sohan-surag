import { groq } from 'next-sanity'

// Hero Section
export const heroQuery = groq`*[_type == "hero"][0]{
  greeting,
  name,
  title,
  subtitle,
  profileImage
}`

// About Page
export const aboutQuery = groq`*[_type == "about"][0]{
  title,
  description,
  profileImage,
  storyParagraphs,
  skills,
  experience,
  recognition
}`

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description,
  email,
  name,
  socialLinks,
  contactCTA
}`

// Case Studies (all)
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(order asc){
  _id,
  title,
  slug,
  description,
  tags,
  metrics,
  thumbnailImage,
  order
}`

// Single Case Study
export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0]{
  title,
  slug,
  description,
  tags,
  metrics,
  heroImage,
  projectInfo,
  overview,
  challenge,
  designProcess,
  research,
  conceptIdeation,
  solution,
  handoff,
  outcome,
  learnings,
  impact
}`

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  role,
  company,
  text,
  image,
  linkedin,
  order
}`

// Why Me Points
export const whyMePointsQuery = groq`*[_type == "whyMePoint"] | order(order asc){
  _id,
  title,
  description,
  icon,
  order
}`

// Leadership Points
export const leadershipPointsQuery = groq`*[_type == "leadershipPoint"] | order(order asc){
  _id,
  title,
  description,
  icon,
  order
}`

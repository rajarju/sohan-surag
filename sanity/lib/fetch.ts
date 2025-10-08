import { client } from './client'
import {
  heroQuery,
  aboutQuery,
  siteSettingsQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
  testimonialsQuery,
  whyMePointsQuery,
  leadershipPointsQuery,
} from './queries'

export async function getHero() {
  return await client.fetch(heroQuery)
}

export async function getAbout() {
  return await client.fetch(aboutQuery)
}

export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery)
}

export async function getCaseStudies() {
  return await client.fetch(caseStudiesQuery)
}

export async function getCaseStudyBySlug(slug: string) {
  return await client.fetch(caseStudyBySlugQuery, { slug })
}

export async function getTestimonials() {
  return await client.fetch(testimonialsQuery)
}

export async function getWhyMePoints() {
  return await client.fetch(whyMePointsQuery)
}

export async function getLeadershipPoints() {
  return await client.fetch(leadershipPointsQuery)
}

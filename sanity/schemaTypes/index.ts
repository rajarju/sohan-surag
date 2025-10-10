import { type SchemaTypeDefinition } from 'sanity'

import hero from './hero'
import about from './about'
import caseStudy from './caseStudy'
import testimonial from './testimonial'
import whyMePoint from './whyMePoint'
import leadershipPoint from './leadershipPoint'
import siteSettings from './siteSettings'
import company from './company'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    caseStudy,
    testimonial,
    whyMePoint,
    leadershipPoint,
    siteSettings,
    company,
  ],
}

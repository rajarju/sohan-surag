import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton documents
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Hero Section')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),
      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),

      S.divider(),

      // Collections
      S.listItem()
        .title('Case Studies')
        .child(
          S.documentTypeList('caseStudy')
            .title('Case Studies')
        ),
      S.listItem()
        .title('Testimonials')
        .child(
          S.documentTypeList('testimonial')
            .title('Testimonials')
        ),
      S.listItem()
        .title('Why Me Points')
        .child(
          S.documentTypeList('whyMePoint')
            .title('Why Me Points')
        ),
      S.listItem()
        .title('Leadership Points')
        .child(
          S.documentTypeList('leadershipPoint')
            .title('Leadership Points')
        ),
    ])

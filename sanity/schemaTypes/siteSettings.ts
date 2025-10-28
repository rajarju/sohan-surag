import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Your Name',
      type: 'string',
      description: 'Your full name (used in footer, etc.)',
    }),
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'blogUrl',
      title: 'Blog URL',
      type: 'url',
      description: 'External blog URL (e.g., Medium, Substack, etc.)',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        },
        {
          name: 'dribbble',
          title: 'Dribbble URL',
          type: 'url',
        },
        {
          name: 'behance',
          title: 'Behance URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'contactCTA',
      title: 'Contact CTA',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Page title for search engines and browser tabs (e.g., "Sohan Surag - Product Designer")',
      validation: (Rule) => Rule.max(60).warning('Title should be under 60 characters for optimal SEO'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines (150-160 characters recommended)',
      validation: (Rule) => Rule.max(160).warning('Description should be under 160 characters for optimal SEO'),
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title shown when shared on social media (Facebook, LinkedIn, etc.). Leave empty to use SEO Title.',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 3,
      description: 'Description shown when shared on social media. Leave empty to use SEO Description.',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image shown when shared on social media (1200x630px recommended)',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

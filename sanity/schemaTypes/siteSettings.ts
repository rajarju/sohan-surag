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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

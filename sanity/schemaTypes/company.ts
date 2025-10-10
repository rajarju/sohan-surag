import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'company',
  title: 'Companies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      description: 'Name of the company (shown in tooltip)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Company logo image (preferably white/light colored on transparent background)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Optional link to company website',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional description shown in tooltip',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which companies appear (lower numbers first)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'description',
    },
  },
})

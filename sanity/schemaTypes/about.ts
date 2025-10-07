import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({
      name: 'skills',
      title: 'Skills & Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
            },
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Experience Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'period',
              title: 'Time Period',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'recognition',
      title: 'Recognition & Awards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'emoji',
              title: 'Emoji',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Award Title',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
          ],
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

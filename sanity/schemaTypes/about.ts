import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'tagline1',
      title: 'Tagline Line 1',
      type: 'string',
      description: 'First line of tagline (e.g., "Designer by craft.")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline2',
      title: 'Tagline Line 2',
      type: 'string',
      description: 'Second line of tagline (e.g., "Strategist by mindset.")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline3',
      title: 'Tagline Line 3',
      type: 'string',
      description: 'Third line of tagline (e.g., "Storyteller at heart.")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Hero subtitle text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Illustration',
      type: 'image',
      description: 'Circular illustration for the hero section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
      description: 'Link to downloadable resume (optional)',
    }),

    // Experience Section
    defineField({
      name: 'experienceIntro',
      title: 'Experience Introduction',
      type: 'array',
      description: 'Introductory paragraphs for the Experience section',
      of: [{ type: 'text', rows: 4 }],
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
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Role/Position',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'period',
              title: 'Time Period',
              type: 'string',
              description: 'e.g., "Jun 2023 - Present"',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'company',
              subtitle: 'role',
            },
          },
        },
      ],
    }),

    // Education Section
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree/Certificate',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'period',
              title: 'Time Period',
              type: 'string',
              description: 'e.g., "2004 - 2007"',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'degree',
              subtitle: 'institution',
            },
          },
        },
      ],
    }),

    // Outside Work Section
    defineField({
      name: 'goodreadsUrl',
      title: 'Goodreads Profile URL',
      type: 'url',
      description: 'Link to Goodreads profile (optional)',
    }),
    defineField({
      name: 'favoriteQuote',
      title: 'Favorite Quote',
      type: 'text',
      rows: 3,
      description: 'Your favorite quote',
    }),
    defineField({
      name: 'hobbies',
      title: 'Hobbies & Interests',
      type: 'array',
      description: 'Paragraphs describing hobbies and interests',
      of: [{ type: 'text', rows: 4 }],
    }),
  ],
  preview: {
    select: {
      title: 'tagline1',
      subtitle: 'subtitle',
    },
  },
})

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

    // Legacy fields (kept for backward compatibility)
    defineField({
      name: 'title',
      title: 'Page Title (Legacy)',
      type: 'string',
      description: 'Old page title field - kept for backward compatibility',
    }),
    defineField({
      name: 'description',
      title: 'Description (Legacy)',
      type: 'text',
      rows: 3,
      description: 'Old description field - kept for backward compatibility',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image (Legacy)',
      type: 'image',
      description: 'Old profile image - kept for backward compatibility',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      description: 'Paragraphs about your background and story',
      of: [{ type: 'text', rows: 4 }],
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
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Optional detailed description of role and achievements',
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

    // Skills & Expertise
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

    // Recognition & Awards
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
    defineField({
      name: 'outsideWorkImages',
      title: 'Outside Work Images',
      type: 'array',
      description: 'Images showcasing hobbies and interests (displayed as carousel)',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: 'tagline1',
      subtitle: 'subtitle',
    },
  },
})

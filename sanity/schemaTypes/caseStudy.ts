import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Used in case studies grid',
    }),
    defineField({
      name: 'projectInfo',
      title: 'Project Information',
      type: 'object',
      fields: [
        {
          name: 'company',
          title: 'Company',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Your Role',
          type: 'string',
        },
        {
          name: 'team',
          title: 'Team',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'e.g., "Designers x6", "PM x4"',
        },
        {
          name: 'tools',
          title: 'Tools Used',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'e.g., "Miro", "Figma", "Amplitude"',
        },
        {
          name: 'timeline',
          title: 'Timeline',
          type: 'object',
          fields: [
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., "8 months", "6 months"',
            },
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              description: 'e.g., "Ongoing Iterations", "Completed"',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'object',
      fields: [
        {
          name: 'businessContext',
          title: 'Business Context',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'problem',
          title: 'Problem',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of problem statements',
        },
        {
          name: 'opportunity',
          title: 'Opportunity',
          type: 'text',
          rows: 3,
        },
        {
          name: 'productGoals',
          title: 'Product Goals',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'successMetrics',
          title: 'Success Metrics',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'primaryUsers',
          title: 'Primary Users',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'stakeholders',
          title: 'Stakeholders',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'designProcess',
      title: 'Design Process',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'phases',
          title: 'Process Phases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Phase Name',
                  type: 'string',
                  description: 'e.g., "Discovery", "Define", "Ideation"',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'methods',
                  title: 'Methods Used',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'research',
      title: 'Discovery & Research',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'methods',
          title: 'Research Methods',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Method Title',
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
        },
        {
          name: 'challenges',
          title: 'Challenges',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'images',
          title: 'Supporting Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
          name: 'points',
          title: 'Research Points (Legacy)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
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
          description: 'Keep for backward compatibility',
        },
      ],
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'sections',
          title: 'Solution Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'conceptIdeation',
      title: 'Concept & Ideation',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'approaches',
          title: 'Approaches',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
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
        },
        {
          name: 'challenges',
          title: 'Challenges',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'solutions',
          title: 'Solutions',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'images',
          title: 'Supporting Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
    }),
    defineField({
      name: 'handoff',
      title: 'Handoff',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'deliverables',
          title: 'Deliverables',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'images',
          title: 'Supporting Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'results',
          title: 'Results',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'learnings',
      title: 'Learnings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Learning Title',
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
      name: 'impact',
      title: 'Impact (Legacy)',
      type: 'object',
      description: 'Keep for backward compatibility - consider using Outcome instead',
      fields: [
        {
          name: 'text',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'text',
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which case studies appear',
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
      title: 'title',
      media: 'thumbnailImage',
      subtitle: 'description',
    },
  },
})

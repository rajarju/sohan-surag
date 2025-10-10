import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'Opening greeting (e.g., "Hello 👋 I am")',
    }),
    defineField({
      name: 'name',
      title: 'Your Name',
      type: 'string',
      description: 'Your full name (e.g., "Sohan Surag")',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline (e.g., "Product designer.")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subheading text (e.g., "Based in Berlin 📍")',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Profile photo displayed on the right side of hero section',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})

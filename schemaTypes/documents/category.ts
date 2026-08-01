import {defineField, defineType} from 'sanity'
import IconPicker from '../../src/studio/IconPicker'
export default defineType({
  name: 'category',
  title: 'Category',
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
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'Optional icon name (e.g. Bot, Cloud, Cpu, Palette) used by the frontend.',
      type: 'string',
      components: {
        input: IconPicker,
      },
    }),

    defineField({
      name: 'color',
      title: 'Theme Color',
      type: 'color',
    }),

    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Profile Image',
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'e.g. Software Engineer, Technical Writer, CEO',
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().max(500),
    }),

    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
        }),

        // Professional
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),

        // Blogging
        defineField({
          name: 'medium',
          title: 'Medium',
          type: 'url',
        }),
        defineField({
          name: 'devto',
          title: 'Dev.to',
          type: 'url',
        }),

        // Social
        defineField({
          name: 'twitter',
          title: 'X (Twitter)',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),

        // Video
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'tiktok',
          title: 'TikTok',
          type: 'url',
        }),

        // Design
        defineField({
          name: 'behance',
          title: 'Behance',
          type: 'url',
        }),

        // Messaging & Community
        defineField({
          name: 'discord',
          title: 'Discord',
          type: 'url',
        }),
        defineField({
          name: 'telegram',
          title: 'Telegram',
          type: 'url',
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'url',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'image',
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  initialValue: {
    author: {
      _type: 'reference',
      _ref: '5bdd69df-1231-4900-a8cb-28e781a7d5d3',
    },

    categories: [
      {
        _type: 'reference',
        _ref: 'f618510a-74cb-4752-8c48-f1157275aae8',
      },
    ],

    featured: false,
  },
  name: 'post',
  title: 'Post',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',

      options: {
        layout: 'tags',
      },

      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],

      validation: (Rule) => Rule.required().min(1).unique(),
    }),
    defineField({
      name: 'isPopular',
      title: 'Popular Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A short summary of the post, used for previews and SEO.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'featured',
      title: 'Homepage Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Only one post can be featured on the homepage.',
      validation: (Rule) =>
        Rule.custom(async (featured, context) => {
          if (!featured) return true

          const {document, getClient} = context
          const client = getClient({apiVersion: '2025-07-01'})

          const documentId = document?._id?.replace(/^drafts\./, '')

          const existing = await client.fetch(
            `
        *[
          _type == "post" &&
          featured == true &&
          _id != $publishedId &&
          _id != $draftId
        ][0]{
          title
        }
        `,
            {
              publishedId: documentId,
              draftId: `drafts.${documentId}`,
            },
          )

          if (!existing) return true

          return `Only one Featured Post is allowed. "${existing.title}" is already marked as Featured. Unselect it before selecting another post.`
        }),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      featured: 'featured',
      date: 'publishedAt',
    },
    prepare({title, author, media, featured, date}) {
      return {
        title,
        media,
        subtitle: `${featured ? '⭐ ' : ''}${author ? `by ${author}` : ''}${date ? ` • ${new Date(date).toLocaleDateString()}` : ''}`,
      }
    },
  },

  orderings: [
    {
      title: 'Publish Date',
      name: 'publishDateDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})

export const dashboardQueries = {
  overview: /* groq */ `
    {
      "stats": {
        "categories": count(*[_type == "category"]),
        "authors": count(*[_type == "author"]),
        "popularPosts": count(*[
          _type == "post" &&
          isPopular == true &&
          !(_id in path("drafts.**"))
        ])
      },

      "featuredPost": *[
        _type == "post" &&
        featured == true &&
        !(_id in path("drafts.**"))
      ]
      | order(_updatedAt desc)[0]{
        _id,
        _originalId,
        _type,
        title,
        slug,
        excerpt,
        featured,
        isPopular,
        publishedAt,
        _createdAt,
        _updatedAt,
        coverImage
      },

      "recentPosts": *[
        _type == "post" &&
        !(_id in path("drafts.**"))
      ]
      | order(_updatedAt desc)[0...5]{
        _id,
        _originalId,
        _type,
        title,
        slug,
        excerpt,
        featured,
        isPopular,
        publishedAt,
        _createdAt,
        _updatedAt,
        coverImage
      },

      "popularPosts": *[
        _type == "post" &&
        isPopular == true &&
        !(_id in path("drafts.**"))
      ]
      | order(coalesce(publishedAt, _createdAt) desc)[0...5]{
        _id,
        _originalId,
        _type,
        title,
        slug,
        excerpt,
        featured,
        isPopular,
        publishedAt,
        _createdAt,
        _updatedAt,
        coverImage
      }
    }
  `,

  postIds: /* groq */ `
    *[
      _type == "post"
    ]{
      _id
    }
  `,
} as const

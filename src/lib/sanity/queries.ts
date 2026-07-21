import { groq } from "next-sanity";

const POST_FIELDS = groq`
  _id,
  title,
  slug,
  excerpt,

  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        metadata{
          dimensions
        }
      }
    }
  },

  featured,
  publishedAt,
  updatedAt,
  seoTitle,
  seoDescription,
  tags,

  coverImage{
    asset->{
      _id,
      url,
      metadata{
        dimensions
      }
    },
    alt
  },

  author->{
    _id,
    name,
    slug,
    designation,
    bio,
    image{
      asset->{
        url
      }
    },
    social
  },

  category->{
    _id,
    title,
    slug,
    description,
    color,
    icon
  }
`;
export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ${POST_FIELDS}
  }
`;
export const POST_QUERY = groq`
  *[
    _type == "post" &&
    slug.current == $postSlug &&
    category->slug.current == $categorySlug
  ][0]{
    ${POST_FIELDS}
  }
`;
export const POSTS_BY_CATEGORY_QUERY = groq`
  *[
    _type == "post" &&
    category->slug.current == $categorySlug
  ] | order(publishedAt desc) {
    ${POST_FIELDS}
  }
`;
export const CATEGORY_QUERY = groq`
  *[
    _type == "category"
    && slug.current == $slug
  ][0]{
    _id,
    title,
    slug,
    description,
    icon,

    color{
      hex
    },

    image{
      asset->{
        url
      },
      alt
    },

    featured,
    order,

    "posts": *[
      _type == "post"
      && references(^._id)
    ] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featured,
      publishedAt,

      coverImage{
        asset->{
          url
        },
        alt
      },

      author->{
        name,
        slug
      }
    }
  }
`;
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon,

    color{
      hex
    },

    image{
      asset->{
        url
      },
      alt
    },

    featured,
    order
  }
`;
export const AUTHORS_QUERY = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    designation,
    bio,

    image{
      asset->{
        _id,
        url,
        metadata{
          dimensions
        }
      },
      alt
    },

    social
  }
`;
export const AUTHOR_QUERY = groq`
  *[
    _type == "author"
    && slug.current == $slug
  ][0]{
    _id,
    name,
    slug,
    designation,
    bio,

    image{
      asset->{
        _id,
        url,
        metadata{
          dimensions
        }
      },
      alt
    },

    social,

    "posts": *[
      _type == "post"
      && author._ref == ^._id
    ] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featured,
      publishedAt,

      coverImage{
        asset->{
          url
        },
        alt
      },

      category->{
        title,
        slug,
        color,
        icon
      }
    }
  }
`;
export const POSTS_BY_AUTHOR_QUERY = groq`
  *[
    _type == "post" &&
    author->slug.current == $slug
  ] | order(publishedAt desc) {
    ${POST_FIELDS}
  }
`;

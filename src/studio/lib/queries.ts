export const BULK_POPULAR_QUERY = `
*[
  _type == "post" &&
  !(_id in path("drafts.**"))
]
| order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  isPopular,
  publishedAt,
  "coverImage": coverImage.asset->url,
  category->{
    title
  }
}
`

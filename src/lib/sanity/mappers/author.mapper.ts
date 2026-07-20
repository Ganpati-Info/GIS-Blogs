import { Author } from "@/types";

export function mapAuthor(author: any): Author {
  return {
    id: author._id,
    name: author.name,
    slug: author.slug.current,
    avatar: author.image?.asset?.url ?? "",
    designation: author.designation ?? "",
    bio: author.bio ?? "",
    email: author.social?.email,
    social: author.social ?? {},
  };
}

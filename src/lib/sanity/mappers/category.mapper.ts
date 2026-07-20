import { Category } from "@/types";

export function mapCategory(category: any): Category {
  return {
    id: category._id,

    name: category.title,

    slug: category.slug.current,

    description: category.description ?? "",

    color: category.color?.hex ?? "#25499F",

    icon: category.icon ?? "",
  };
}

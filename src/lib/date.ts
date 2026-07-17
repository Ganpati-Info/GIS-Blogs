export function formatDate(date: string | Date, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(date: string | Date, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

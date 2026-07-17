const WORDS_PER_MINUTE = 225;

export function calculateReadingTime(html: string) {
  if (!html) return 1;

  const text = html.replace(/<[^>]+>/g, " ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

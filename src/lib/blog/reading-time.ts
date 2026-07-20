const WORDS_PER_MINUTE = 200;
const SECONDS_PER_IMAGE = 12;

export function calculateReadingTime(blocks: any[] = []) {
  let words = 0;
  let images = 0;

  for (const block of blocks) {
    if (block._type === "block") {
      words +=
        block.children
          ?.map((child: any) => child.text)
          .join(" ")
          .split(/\s+/)
          .filter(Boolean).length ?? 0;
    }

    if (block._type === "image") {
      images++;
    }
  }

  const readingMinutes = words / WORDS_PER_MINUTE;
  const imageMinutes = (images * SECONDS_PER_IMAGE) / 60;

  return Math.max(1, Math.ceil(readingMinutes + imageMinutes));
}
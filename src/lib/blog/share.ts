export function getLinkedInShareUrl(url: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url,
  )}`;
}

export function getTwitterShareUrl(url: string, title: string) {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url,
  )}&text=${encodeURIComponent(title)}`;
}

export function getFacebookShareUrl(url: string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export async function nativeShare(
  title: string,
  text: string,
  url: string,
): Promise<boolean> {
  if (
    typeof navigator === "undefined" ||
    typeof navigator.share !== "function"
  ) {
    return false;
  }

  try {
    await navigator.share({
      title,
      text,
      url,
    });

    return true;
  } catch {
    return false;
  }
}

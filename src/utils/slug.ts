export function toSlug(s: string) {
  return s
    .normalize('NFD')
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
}

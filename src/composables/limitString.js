export function useLimitString(title, limit) {
  if (title.length > limit) {
    return `${title.slice(0, limit)}...`;
  }
  return title;
}
import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

export function getVisiblePosts(posts: BlogPost[]) {
  return sortPostsByDate(posts).filter((post) => !post.data.draft);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function toMonthKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function toSlugPart(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-가-힣]/g, "");
}

export function fromSlugPart(value: string) {
  return decodeURIComponent(value).replace(/-/g, " ");
}

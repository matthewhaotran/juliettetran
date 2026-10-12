import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => getPostBySlug(file.replace(/\.md$/, "")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const raw = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: String(data.date),
    excerpt: data.excerpt ?? "",
    content,
  };
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const html = await marked.parse(post.content);

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#4a3f36]">
      <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <nav className="mb-10 text-sm">
          <Link href="/blog" className="text-[#9a7f68] hover:underline">
            ← Blog
          </Link>
        </nav>

        <p className="text-xs uppercase tracking-widest text-[#9a7f68] mb-2">
          {post.date}
        </p>
        <h1 className="font-serif text-4xl mb-8">{post.title}</h1>

        {/* Post bodies are written by the site owner in content/blog */}
        <article
          className="prose-warm space-y-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </div>
  );
}

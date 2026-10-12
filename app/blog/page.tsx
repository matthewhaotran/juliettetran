import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#f7f1e6] text-[#4a3f36]">
      <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <nav className="mb-10 text-sm">
          <Link href="/" className="text-[#9a7f68] hover:underline">
            ← Home
          </Link>
        </nav>

        <h1 className="font-serif text-4xl mb-10">Blog</h1>

        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <p className="text-xs uppercase tracking-widest text-[#9a7f68] mb-2">
                {post.date}
              </p>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="font-serif text-2xl group-hover:underline">
                  {post.title}
                </h2>
              </Link>
              {post.excerpt && <p className="mt-2 text-[#6d5b4c]">{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

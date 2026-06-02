import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Post } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function BlogIndex() {
  let dbPosts: Post[] = [];
  try {
    dbPosts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch database posts on blog index:", error);
  }

  // Combine database posts with the default static MDX post and sort by date
  const staticPost = {
    id: 0,
    title: "My First Blog Post 🚀",
    slug: "first-post",
    content: "Welcome to my first MDX-powered blog post! This blog is built using Next.js, Tailwind CSS, and MDX.",
    createdAt: new Date("2026-06-02T20:30:00.000Z"),
  };

  const allPosts = [
    ...dbPosts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      createdAt: post.createdAt,
    })),
    staticPost,
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white flex flex-col items-center px-5 py-6 selection:bg-purple-500/30 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-center mb-12 px-3 sticky top-3 z-50">
        <div className="backdrop-blur-xl flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-3 py-3 rounded-2xl border border-white/10 w-full max-w-4xl shadow-2xl shadow-purple-900/20">
          <Link href="/#home" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/#skills" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Skills
          </Link>
          <Link href="/#about" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            About
          </Link>
          <Link href="/#projects" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Projects
          </Link>
          <Link href="/blog" className="px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
            Blog
          </Link>
          <Link href="/#contact" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col items-center w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight">
          My Blog
        </h1>
        <p className="text-sm sm:text-lg text-gray-400 mt-4 max-w-2xl">
          Thoughts on AI engineering, frontend development, teaching, and my personal learning journey.
        </p>
      </div>

      {/* Grid Layout of Blog Posts */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
        {allPosts.map((post) => {
          // Truncate content for card snippet
          const snippet = post.content
            .replace(/[#*`_-]/g, "") // Strip basic markdown chars for snippet
            .substring(0, 150)
            .trim() + (post.content.length > 150 ? "..." : "");

          return (
            <div
              key={post.slug}
              className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between h-full group"
            >
              <div>
                <span className="text-xs text-gray-500 font-semibold block mb-3">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <h2 className="text-2xl font-bold text-gray-100 group-hover:text-purple-400 transition mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {snippet}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="self-start text-sm font-semibold text-purple-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-1 group/link"
              >
                Read Article
                <svg
                  className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-500 text-xs sm:text-sm pb-10 border-t border-white/10 pt-8 w-full max-w-4xl">
        <div className="mb-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-purple-400 transition">
            Admin
          </Link>
        </div>
        © 2026 Sanidhya Pratap. All rights reserved.
      </footer>
    </main>
  );
}

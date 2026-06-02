import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

// Enable dynamic rendering
export const dynamic = "force-dynamic";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    // Handle bullet list groupings
    const isListItem = line.startsWith("- ") || line.startsWith("* ");

    if (isListItem) {
      const text = line.substring(2);
      renderedElements.push(
        <li key={`li-${index}`} className="list-disc list-inside ml-4 my-1.5 text-gray-300 leading-relaxed">
          {parseInlineFormatting(text)}
        </li>
      );
      return;
    }


    // Headers
    if (line.startsWith("### ")) {
      renderedElements.push(
        <h3 key={index} className="text-xl font-bold text-purple-300 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      return;
    }
    if (line.startsWith("## ")) {
      renderedElements.push(
        <h2 key={index} className="text-2xl font-extrabold text-purple-400 mt-8 mb-4 border-b border-white/10 pb-2">
          {line.replace("## ", "")}
        </h2>
      );
      return;
    }
    if (line.startsWith("# ")) {
      renderedElements.push(
        <h1 key={index} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mt-10 mb-6">
          {line.replace("# ", "")}
        </h1>
      );
      return;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      renderedElements.push(
        <blockquote key={index} className="border-l-4 border-purple-500 bg-white/5 pl-4 py-3 my-5 rounded-r-xl italic text-gray-300">
          {parseInlineFormatting(line.replace("> ", ""))}
        </blockquote>
      );
      return;
    }

    // Spacing for empty lines
    if (line.trim() === "") {
      renderedElements.push(<div key={`space-${index}`} className="h-4" />);
      return;
    }

    // Standard paragraph
    renderedElements.push(
      <p key={index} className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
        {parseInlineFormatting(line)}
      </p>
    );
  });

  return renderedElements;
}

// Parse bold (**text**) inline formatting safely
function parseInlineFormatting(text: string): React.ReactNode {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-extrabold text-purple-200">
        {match[1]}
      </strong>
    );
    lastIndex = boldRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white flex flex-col items-center px-5 py-6 selection:bg-purple-500/30">
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

      {/* Blog Container */}
      <article className="w-full max-w-3xl px-4 sm:px-6 py-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-purple-950/15 mb-16">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition duration-300 mb-8 group"
        >
          <svg
            className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </Link>

        {/* Post Metadata & Title */}
        <header className="mb-8">
          <time className="text-sm text-gray-500 font-semibold block mb-3">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Post Content */}
        <div className="border-t border-white/10 pt-8 mt-8 prose-custom">
          {renderMarkdownContent(post.content)}
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 text-xs sm:text-sm pb-10 border-t border-white/10 pt-8 w-full max-w-3xl">
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

import { prisma } from "@/lib/prisma";
import DashboardForm from "./DashboardForm";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { Post } from "@prisma/client";

// Force dynamic rendering to ensure the admin dashboard always shows the latest database state
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  let posts: Post[] = [];
  try {
    posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch posts in dashboard:", error);
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white py-12 px-5 sm:px-8 selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              CMS Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Publish new blog posts and manage existing entries.
            </p>
          </div>
          <Link
            href="/"
            className="self-start sm:self-auto px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition text-sm text-gray-300 hover:text-purple-400 flex items-center gap-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/20">
            <h2 className="text-xl font-bold mb-6 text-purple-400">
              Create New Article
            </h2>
            <DashboardForm />
          </div>

          {/* Published Articles List Column */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/20">
            <h2 className="text-xl font-bold mb-6 text-purple-400">
              Published Posts ({posts.length})
            </h2>

            {posts.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
                <svg
                  className="h-10 w-10 text-gray-600 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <p className="text-gray-400 text-sm">No blog posts published yet.</p>
                <p className="text-gray-500 text-xs mt-1">Use the form to create your first article!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[550px] overflow-y-auto pr-1">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-purple-500/20 transition-all duration-300 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-200 truncate hover:text-purple-400 transition">
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <DeleteButton id={post.id} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
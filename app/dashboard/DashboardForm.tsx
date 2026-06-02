"use client";

import { useState, useRef } from "react";
import { publishPost } from "./actions";
import { useRouter } from "next/navigation";

export default function DashboardForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await publishPost(null, formData);

    setLoading(false);

    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: result.message || "Blog published successfully!" });
      formRef.current?.reset();
      // Refresh the page data so the list of posts is updated
      router.refresh();
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div
          className={`p-4 rounded-xl border text-sm transition-all duration-300 ${
            message.type === "success"
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-rose-500/10 border-rose-500/30 text-rose-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-300 mb-2">
          Blog Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          placeholder="Enter a captivating title..."
          className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-semibold text-gray-300 mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          required
          placeholder="Write your thoughts in markdown or plain text..."
          rows={10}
          className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 font-mono text-sm leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Publishing...
          </>
        ) : (
          "Publish Blog Post"
        )}
      </button>
    </form>
  );
}

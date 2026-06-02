"use client";

import { useState } from "react";
import { deletePost } from "./actions";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    setLoading(true);
    const result = await deletePost(id);
    setLoading(false);

    if (result.error) {
      alert(result.error);
    } else {
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-4 py-2 text-sm font-semibold rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white transition duration-300 disabled:opacity-50 flex items-center gap-1"
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
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
      ) : (
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      )}
      Delete
    </button>
  );
}

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        CMS Dashboard
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Write your blog..."
          rows={10}
          className="w-full p-3 border rounded"
        />

        <button
          className="bg-purple-600 text-white px-6 py-3 rounded"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
export default function FromCreatePosts() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg  mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Submit Content
      </h2>
      <form className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            URL Image
          </label>
          <input
            type="url"
            placeholder="Image url"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Caption
          </label>
          <textarea
            placeholder="Enter caption"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition cursor-pointer     ">
          Submit
        </button>
      </form>
    </div>
  );
}

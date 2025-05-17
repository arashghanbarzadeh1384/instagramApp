import React, { useState } from "react";
import axios from "axios";

export default function FromCreatePosts() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const postData = {
      image: imageUrl,
      title: title,
      caption: caption,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/postUser",
        postData
      );
      setImageUrl("");
      setTitle("");
      setCaption("");
    } catch (error) {
      console.error("❌ Error submitting post:", error);
      alert("Failed to submit post.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Submit Content
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            URL Image
          </label>
          <input
            type="url"
            placeholder="Image url"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
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
            value={caption}
            onChange={e => setCaption(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

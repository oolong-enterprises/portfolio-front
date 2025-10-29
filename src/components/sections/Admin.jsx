// src/pages/Admin.jsx
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomerTable from "../CustomerTable";
import BackButton from "../BackButton";

export const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = formData.tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    try {
      const res = await fetch("https://portfolio-backend-3zgg.onrender.com/blog", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content, // now HTML
          tags: tagsArray
        })
      });

      if (res.ok) {
        alert("Blog Posted!");
        setFormData({ title: "", content: "", tags: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <section className="flex flex-col min-h-screen">
      <div className="text-center mt-10 z-10 px-4">
        <h2 className="text-gray-400 text-2xl md:text-4xl font-bold mb-8 my-8">
          Post a Blog
        </h2>

        <div className="px-4 w-full max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
            />

            <input
              type="text"
              id="tags"
              name="tags"
              required
              value={formData.tags}
              onChange={handleChange}
              placeholder="Tag1, Tag2, Tag3, ..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-lg focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
            />
            <p className="text-right text-sm text-gray-400 mt-1">Separate tags with commas</p>

            <div>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                placeholder="Write your blog post..."
                className="bg-white/5 text-white rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Post
            </button>

          </form>
        </div>

        <div className="text-center mt-[25vh] z-10 px-4">
          <CustomerTable />
        </div>

        <div className="mt-auto flex justify-start space-x-4 pl-4 pb-4">
          <BackButton />
        </div>
      </div>
    </section>
  );
};

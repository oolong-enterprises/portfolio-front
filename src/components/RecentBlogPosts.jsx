import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecentBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://portfolio-backend-3zgg.onrender.com/blog");
        const data = await res.json();
        const recent = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setPosts(recent);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-3/4 mx-auto px-4 mt-[15vh] bg-black/70 p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Recent Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/5"
          >
            <Link
              to={`/blog/${post.id}`}
              className="text-xl font-bold mb-4 text-white hover:text-cyan-400 transition"
            >
              {post.title}
              </Link>

            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

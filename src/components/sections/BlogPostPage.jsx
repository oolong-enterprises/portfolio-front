import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-3zgg.onrender.com/blog/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center mt-20 text-white">Loading...</p>;
  if (!post) return <p className="text-center mt-20 text-white">Post not found</p>;

  return (
    <div className="w-3/4 mx-auto mt-[10vh] p-6 bg-black/70 rounded-xl text-white">
      <Link to="/" className="text-cyan-400 hover:underline mb-4 inline-block">
        &larr; Back to home
      </Link>

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-300 mb-6">{new Date(post.createdAt).toLocaleDateString()}</p>
      <div className="mb-6">
        {post.tags?.map((tag, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm mr-2 mb-2 inline-block"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-gray-200 whitespace-pre-line">{post.content}</div>
    </div>
  );
}

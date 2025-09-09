import React from "react";
import "../App.css"; // Ensure path is correct

const blogPosts = [
  {
    title: "Mastering the First Impression: Your intriguing post title goes here",
    date: "October 12, 2024",
    excerpt: "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction …",
  },
  {
    title: "The Art of Drawing Readers In: Your attractive post title goes here",
    date: "October 12, 2024",
    excerpt: "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction …",
  },
  {
    title: "Crafting Captivating Headlines: Your awesome post title goes here",
    date: "October 12, 2024",
    excerpt: "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction …",
  },
  {
    title: "Hello world!",
    date: "October 12, 2024",
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
  },
];

function Blog() {
  return (
    <div className="page-container">
      <section className="blog-section">
        <h1>Inspire & Learn</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="#">Read More »</a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;

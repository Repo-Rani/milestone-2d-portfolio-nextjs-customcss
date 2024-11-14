import React from "react";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { blogs } from "../../../Data/data";
const Blog = () => {
  return (
    <section className="blog-section">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="blog-container">
        {blogs.map((blog, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchorPlacement="top-center"
              data-aos-delay={`${i * 150}`}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import { BlogProps } from "../../Types/type";
import Image from "next/image";

const BlogCard = ({ blog }: BlogProps) => {
  const { date, image, summary, title } = blog;
  return (
    <div className="blog-card">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="blog-image"
      />
      <div className="content">
        <p className="category">News</p>
        <h1 className="title">{title}</h1>
        <p className="summary">{summary}</p>
        <div className="divider" />
        <div className="footer">
          <h1 className="date">{date}</h1>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

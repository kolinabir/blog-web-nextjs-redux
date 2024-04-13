"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";
import React from "react";

const BlogsPage = () => {
  const { data, isLoading, isError } = useGetBlogsQuery("");
  return (
    <div className="w-[90%] mx-auto my-5">
      <h1 className="text-4xl text-center my-4"> Latest Blogs</h1>
      <div className="text-center text-lg mb-4">
        <i>Dive into the world of programming with our latest blogs.</i>
      </div>
      <div className="grid grid-cols-3 gap-5 my-5">
        {data?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

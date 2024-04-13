import { TBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-4"> Latest Blogs</h1>
      <div className="text-center text-lg mb-4">
        <i>Dive into the world of programming with our latest blogs.</i>
      </div>

      <div className="grid grid-cols-2 gap-5 my-4">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 my-4">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

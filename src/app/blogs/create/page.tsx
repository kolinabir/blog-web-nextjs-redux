import CreateBlogForm from "@/components/ui/BlogForm";

const CreateBlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-4"> Create Blog</h1>
      <div className="text-center text-lg mb-4">
        <i>Share your knowledge with the world.</i>
      </div>
      <CreateBlogForm></CreateBlogForm>
    </div>
  );
};

export default CreateBlogPage;

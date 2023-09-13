import NewPostForm from "@/components/NewPostForm";

//Check if logged and it can create a post
const NewPostPage = () => {
  return (
    <div>
      <h1>New Post</h1>
      <NewPostForm />
    </div>
  );
};

export default NewPostPage;

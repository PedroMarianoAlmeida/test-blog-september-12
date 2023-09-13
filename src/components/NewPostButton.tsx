import Link from "next/link";

const NewPostButton = () => {
  return (
    <Link href={`/blog/new`}>
      <button>New Post</button>
    </Link>
  );
};

export default NewPostButton;

import Link from "next/link";

//Enable only if user is admin

const NewPostButton = () => {
  return (
    <Link href={`/blog/new`}>
      <button>New Post</button>
    </Link>
  );
};

export default NewPostButton;

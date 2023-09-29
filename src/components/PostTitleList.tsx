import Link from "next/link";
import { Suspense } from "react";
import { getPosts } from "@/services/posts";

const PostTitleList = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`}>
          <li key={post.id} className="text-red-500">
            {post.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

const PostTitleListStructure = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostTitleList />
      </Suspense>
    </>
  );
};

export default PostTitleListStructure;

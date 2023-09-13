import Link from "next/link";
import { Suspense } from "react";

interface post {
  title: string;
  id: string;
}

const getPosts = async (): Promise<post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: post[] = await response.json();
  const mockPostTitles: post[] = [
    { title: "test", id: "1" },
    { title: "test2", id: "2" },
  ];
  return mockPostTitles;
};

const PostTitleList = async () => {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`}>
          <li key={post.id}>{post.title}</li>
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
}

export default PostTitleListStructure;

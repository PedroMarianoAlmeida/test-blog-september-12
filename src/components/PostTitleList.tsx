import Link from "next/link";
import { Suspense } from "react";
import mysql from "mysql2";

interface post {
  title: string;
  id: string;
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "patientdb",
});
const runQuery = () => {
  // simple query
  connection.query(
    "SELECT id, title FROM posts",
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
};

//Call api with lambda function, that runs SQL
const getPosts = async (): Promise<post[]> => {
  //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //const posts: post[] = await response.json();
  runQuery();
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
};

export default PostTitleListStructure;

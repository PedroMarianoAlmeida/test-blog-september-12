"use client";
import { useEffect, useState } from "react";

//This fetchPostData can run on server? Because needs the client router to get the ID
const fetchPostData = async (
  id: string
): Promise<{ title: string; authorId: string; content: string }> => {
  //Get data using ID and passing to lambda function that runs SQL
  //const response = await fetch(`/api/posts/${id}`);
  //const post = await response.json();
  const post = {
    title: `Title post ${id}`,
    authorId: "1",
    content: `Content post ${id}`,
  };
  return post;
};

const ViewPostPage = ({ params: { id } }: { params: { id: string } }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const getPostData = async () => {
    const { title: asyncTitle, content: asyncContent } = await fetchPostData(
      id
    );

    setTitle(asyncTitle);
    setContent(asyncContent);
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1>View Post</h1>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ViewPostPage;

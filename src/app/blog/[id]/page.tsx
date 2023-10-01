"use client";
import { fetchPostData } from "@/services/posts";
import { useEffect, useState } from "react";

const ViewPostPage = ({ params: { id } }: { params: { id: number } }) => {
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

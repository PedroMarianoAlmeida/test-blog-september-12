"use client";

import { FormEvent, useState } from "react";
import { createPost } from "@/services/posts";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPost({ title, content, authorId: 1 });
    setTitle("");
    setContent("");
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black"
        />
      </div>
      <div className="flex flex-col">
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Post
      </button>
    </form>
  );
};

export default NewPostForm;

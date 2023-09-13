"use client";
import { useState } from "react";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    console.log({ title, content });
    //POST to lambda function that will write to DB (with author ID data)
    //In somewhere validate if user can post
  };
  return (
    <form className="flex flex-col gap-4">
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
        ></textarea>
      </div>
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Post
      </button>
    </form>
  );
};

export default NewPostForm;

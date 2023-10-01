"use server"
import mysql from "mysql2/promise";

interface Post {
  title: string;
  id: string;
  authorId: number;
  content: string;
}

export const getPosts = async (): Promise<Pick<Post, "id" | "title">[]> => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "patientdb",
  });

  const [rows, fields] = await connection.execute(
    "SELECT id, title FROM posts"
  );
  return rows as Pick<Post, "id" | "title">[];
};


export const createPost = async (data: Omit<Post, "id">) => {
  const { title, authorId, content } = data;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "patientdb",
  });

  const [rows, fields] = await connection.execute(
    "INSERT INTO posts (title, authorId, content) VALUES (?, ?, ?);",
    [title, authorId, content]
  );
  return rows;
};

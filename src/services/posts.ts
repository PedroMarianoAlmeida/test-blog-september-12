"use server";
import mysql from "mysql2/promise";

interface Post {
  title: string;
  id: string;
  authorId: number;
  content: string;
}

const getConnection = async () => {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "patientdb",
  });
};

export const getPosts = async (): Promise<Pick<Post, "id" | "title">[]> => {
  const connection = await getConnection();

  const [rows, fields] = await connection.execute(
    "SELECT id, title FROM posts"
  );
  return rows as Pick<Post, "id" | "title">[];
};

export const createPost = async (data: Omit<Post, "id">) => {
  const { title, authorId, content } = data;

  const connection = await getConnection();

  const [rows, fields] = await connection.execute(
    "INSERT INTO posts (title, authorId, content) VALUES (?, ?, ?);",
    [title, authorId, content]
  );
  return rows;
};

export const fetchPostData = async (id: number) => {
  const connection = await getConnection();

  const [data] = await connection.execute(
    `SELECT * FROM posts WHERE id = ${id}`
  );

  const [post]: Post[] = data as Post[];

  return post;
};

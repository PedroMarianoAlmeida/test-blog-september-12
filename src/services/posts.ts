import mysql from "mysql2/promise";

interface Post {
  title: string;
  id: string;
  authorId: string;
  content: string;
}

export const getPosts = async () => {
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

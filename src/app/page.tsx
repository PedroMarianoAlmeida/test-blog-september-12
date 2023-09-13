import Login from "@/components/Login";
import NewPostButton from "@/components/NewPostButton";
import PostTitleListStructure from "@/components/PostTitleList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Cool Blog</h1>
      <PostTitleListStructure />
      <NewPostButton />
      <Login />
    </main>
  );
}

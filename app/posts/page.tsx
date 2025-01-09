import Card, { CardSkeleton } from "@/components/Card";
import { Metadata } from "next";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default async function Posts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return (
      <div className="p-2 sm:p-4">
        <h1 className="mb-2 sm:mb-4 text-3xl sm:text-4xl font-bold">Posts</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((post: IPost) => (
            <Card key={post.id} {...post} />
          ))}

          {Array.from({ length: 8 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data");
  }
}

export const metadata: Metadata = {
  title: "Posts - Blog App",
  description: "View all posts of the blog application",
};

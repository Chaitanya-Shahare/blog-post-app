import Comments from "@/components/Comments";
import UserDetails from "@/components/UserDetails";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IPost } from "../page";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) notFound();

  const post: IPost = await res.json();

  return post;
}

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  }).then((res) => res.json());

  return posts.map((post: IPost) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const postData = await getPost(id);

  const commentsData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postData.userId}`
  ).then((res) => res.json());

  return (
    <>
      <div className="p-2 sm:p-4">
        <Link href="/posts" className="mb-4 underline-offset-4 underline">
          &lt; Go back to posts
        </Link>
        <div className="max-w-3xl mx-auto mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 capitalize">
            {postData.title}
          </h1>
          <hr className="mb-2" />
          <UserDetails userData={userData} />
          <div className=" mb-4 ">{postData.body}</div>
          <Comments commentsData={commentsData} />
        </div>
      </div>
    </>
  );
}

import Comments from "@/components/Comments";
import UserDetails from "@/components/UserDetails";
import { Metadata } from "next";
import Link from "next/link";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id: postId } = await params;

    const responseArr = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    ]);

    if (responseArr.some((res) => res.status === 404)) {
      return (
        <div className="p-2 sm:p-4">
          <Link href="/posts" className="mb-4 underline-offset-4 underline">
            &lt; Go back to posts
          </Link>
          <div className="flex w-full h-[80vh] justify-center items-center">
            <h1 className="text-4xl font-bold">Post not found.</h1>
          </div>
        </div>
      );
    }

    const data = await Promise.all(responseArr.map((res) => res.json()));

    const [postData, commentsData] = data;

    // user details
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + postData.userId
    );
    const userData = await response.json();

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
  } catch (err) {
    throw new Error(
      "An error occured while fetching data. Please try again. " + err
    );
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const postId = params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postData = await response.json();

  return {
    title: postData.title,
    description: postData.body,
  };
}

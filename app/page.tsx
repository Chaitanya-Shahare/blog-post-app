import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold ">Home</h1>
      <ul className="p-4 list-disc">
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home - Blog App",
  description: "Home page of the blog application",
};

"use client";
import Link from "next/link";

export default function NotFound() {
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

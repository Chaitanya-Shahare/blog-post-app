import { CommentsSkeleton } from "@/components/Comments";
import { UserDetailsSkeleton } from "@/components/UserDetails";
import Link from "next/link";

export default function PostSkeleton() {
  return (
    <>
      <div className="p-2 sm:p-4">
        <Link href="/posts" className="mb-4 underline-offset-4 underline">
          &lt; Go back to posts
        </Link>
        <div className="max-w-3xl mx-auto mt-4">
          <div className="h-12 bg-gray-700 rounded w-5/6 animate-pulse mb-4"></div>
          <hr className="mb-2" />
          <UserDetailsSkeleton />

          <div className="h-3 bg-gray-700 rounded w-full animate-pulse mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-full animate-pulse mb-4"></div>

          <CommentsSkeleton />
        </div>
      </div>
    </>
  );
}

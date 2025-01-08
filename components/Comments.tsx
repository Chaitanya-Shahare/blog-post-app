"use client";
import React from "react";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ICommentsProps {
  commentsData: IComment[];
}

const Comments: React.FC<ICommentsProps> = ({ commentsData }) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl mb-2 font-semibold">Comments</h2>
      <ul className="pl-2">
        {commentsData?.map((comment: IComment) => (
          <li
            key={comment.id}
            className="mb-2 border-b-[1px] pl-2 pb-2 border-gray-500"
          >
            <h3 className="text-md font-medium capitalize">{comment.name}</h3>
            <p className="text-gray-400 text-sm lowercase">{comment.email}</p>
            <p className="text-sm">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;

export const CommentsSkeleton: React.FC = () => {
  return (
    <div className="flex-1 space-y-4 py-1 ">
      <div className="h-6 bg-gray-700 rounded w-2/4 animate-pulse"></div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="space-y-2 pl-2 pb-2 border-b-[1px] border-gray-500"
          key={index}
        >
          <div className="h-5 bg-gray-700 rounded w-2/4 animate-pulse"></div>
          <div className="h-3 bg-gray-700 rounded w-1/6 animate-pulse"></div>
          <div className="h-3 bg-gray-700 rounded w-full animate-pulse"></div>
          <div className="h-3 bg-gray-700 rounded w-full animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

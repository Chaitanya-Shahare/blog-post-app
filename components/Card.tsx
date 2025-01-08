import Link from "next/link";

const Card = ({
  id,
  title,
  body,
}: {
  key?: number;
  id: number;
  title: string;
  body: string;
}) => {
  return (
    <Link
      className="rounded-md shadow-md py-4 px-3 border border-gray-800 flex flex-col justify-between"
      href={`/posts/${id}`}
    >
      <h2 className="text-md sm:text-xl font-bold mb-2 capitalize line-clamp-1 overflow-hidden">
        {title}
      </h2>
      <p className="text-sm sm:text-md text-gray-400 line-clamp-4 overflow-hidden">
        {body}
      </p>
    </Link>
  );
};

export default Card;

export const CardSkeleton = () => {
  return (
    <div className="rounded-md shadow-md py-4 px-3 border border-gray-800 animate-pulse flex flex-col justify-between">
      <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
    </div>
  );
};

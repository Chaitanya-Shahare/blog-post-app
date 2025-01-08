import { CardSkeleton } from "@/components/Card";

export default function PostsSkeleton() {
  return (
    <div className="p-2 sm:p-4">
      <h1 className="mb-2 sm:mb-4 text-3xl sm:text-4xl font-bold">Posts</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
}

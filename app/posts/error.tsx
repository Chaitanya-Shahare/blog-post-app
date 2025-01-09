"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-2 sm:p-4">
      <h1 className="mb-2 sm:mb-4 text-3xl sm:text-4xl font-bold">Posts</h1>
      <div className="h-[80vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold">Error: {error.message}</h1>
      </div>
    </div>
  );
}

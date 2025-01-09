"use client";
import React from "react";

interface UserDetailsProps {
  userData: IUser;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData }) => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-medium">{userData?.name}</h2>
        <p className="text-sm md:text-md lowercase text-gray-400">
          {userData?.username}
        </p>
        <p className="text-sm md:text-md lowercase text-gray-400">
          {userData?.email}
        </p>
      </div>
    </>
  );
};

export default UserDetails;

export const UserDetailsSkeleton = () => {
  return (
    <div className="flex-1 space-y-4 py-1 ">
      <div className="h-6 bg-gray-700 rounded w-2/4 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-3/6 animate-pulse"></div>
      </div>
    </div>
  );
};

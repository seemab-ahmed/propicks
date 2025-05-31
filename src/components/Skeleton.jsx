import React from "react";

const Skeleton = ({ count = 1, width = "100%", height = "20px", className = "" }) => {
  const skeletons = Array.from({ length: count }).map((_, index) => (
    <div
      key={index}
      className={`bg-["#010510"] rounded animate-pulse ${className}`}
      style={{ width, height }}
    />
  ));

  return <>{skeletons}</>;
};

export const PageSkeleton = () => {
  return (
    <div className="space-y-4 p-4">
      <Skeleton width="60%" height="40px" className="mb-6" />
      <Skeleton height="25px" />
      <Skeleton height="25px" width="80%" />
      <Skeleton height="25px" width="70%" />
      <Skeleton height="25px" className="mt-8" />
      <Skeleton height="120px" />
      <div className="flex space-x-4 mt-6">
        <Skeleton height="40px" width="120px" />
        <Skeleton height="40px" width="150px" />
      </div>
    </div>
  );
};

export default Skeleton;
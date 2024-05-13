"use client";
import { Skeleton } from "./ui/skeleton";

const Skeleton_Card = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-3 lg:grid lg:grid-cols-3 lg:gap-3">
        {Array(30)
          .fill(null)
          .map((curElem, id) => {
            return (
              <div
                className="animate-pulse w-[300px] m-auto py-3 sm:py-0 lg:py-0"
                key={id}
              >
                <div className="w-full rounded-md border bg-white">
                  <Skeleton className="w-full h-[200px] rounded-md" />

                  <div className="p-4">
                    <Skeleton className="w-full h-[28px] rounded-md" />
                    <div className="mt-3">
                      <Skeleton className="w-full h-[60px] rounded-md" />
                    </div>
                    <div className="mt-4">
                      <Skeleton className="w-[44px] h-[23px] rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Skeleton_Card;

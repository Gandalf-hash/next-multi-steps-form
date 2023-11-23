import React from "react";

export const AppContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-auto rounded-2xl max-w-4xl lg:max-w-5xl bg-white">
      <div className="flex flex-row gap-8 p-6 ">{children}</div>
    </div>
  );
};

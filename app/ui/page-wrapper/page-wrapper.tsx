import React from "react";

export const AppPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-6 flex justify-center items-center min-h-screen lg:max-w-full">
      {children}
    </div>
  );
};

import React, { MouseEventHandler } from "react";

type AppPrimaryButtonProps = {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AppPrimaryButton = ({
  children,
  onClick,
}: AppPrimaryButtonProps) => {
  return (
    <button
      className="w-36 rounded-lg text-white bg-olympian-blue p-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

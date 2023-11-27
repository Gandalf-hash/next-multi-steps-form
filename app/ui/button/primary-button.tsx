import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  disabled: boolean;
}

export const AppPrimaryButton = ({
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`text-white text-lg focus:outline-none focus:ring active:bg-blue-950 w-46 rounded-md flex hover:bg-olympian-blue items-center px-4 py-2  bg-downriver ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Next Steps"}
    </button>
  );
};

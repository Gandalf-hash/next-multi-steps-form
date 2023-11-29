import { clsx } from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
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
      className={clsx(
        "text-white text-lg focus:outline-none focus:ring active:bg-blue-950",
        "rounded-md flex hover:bg-olympian-blue items-center px-4 py-2  bg-downriver-blue",
        disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Next Steps"}
    </button>
  );
};

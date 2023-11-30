import { clsx } from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
  disabled: boolean;
  className: string;
}

export const AppPrimaryButton = ({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, {
        "bg-gray-300 pointer-events-none": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "Next Steps"}
    </button>
  );
};

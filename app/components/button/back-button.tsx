import React from "react";

interface Props {
  onClick: () => void;
}

export const AppBackButton = ({ onClick }: Props) => {
  return (
    <div className="text-gray-400">
      <button
        onClick={onClick}
        className="font-bold text-lg hover:text-downriver-blue"
      >
        Go Back
      </button>
    </div>
  );
};

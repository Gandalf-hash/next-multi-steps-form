import React from "react";

interface Props {
  heading: string;
  description: string;
}

export const AppHeading = ({ heading, description }: Props) => {
  return (
    <div className="flex flex-col space-y-4 mb-4 w-full max-w-lg">
      <h1 className="text-4xl text-downriver font-bold">{heading}</h1>
      <span className="text-gray-400 text-lg">{description}</span>
    </div>
  );
};

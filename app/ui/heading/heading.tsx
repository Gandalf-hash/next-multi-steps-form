import React from "react";

type Props = {
  title: string;
  description: string;
};

export const AppHeading = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl xl:text-4xl font-bold font-gs-bold text-downriver">
        {title}
      </h1>
      <p className="lg:text-lg text-base text-gray-500">{description}</p>
    </div>
  );
};

import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const AppPageInput = ({
  label,
  type = "text",
  placeholder,
  onChange,
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col max-w-lg">
        <label className="text-base text-downriver mb-2">{label}</label>
        <input
          type={type}
          className="block w-full rounded-md border-2 text-downriver text-xl xl:font-bold focus:border-2 focus:border-blue-genie border-gray-400 py-3 px-6 outline-0 placeholder:text-gray-400"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

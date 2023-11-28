import clsx from "clsx";
import React from "react";

interface NumberRadioButtonProps {
  step: string;
  section: string;
  number: number;
  checked: boolean;
}

export const NumberRadioButton = ({
  section,
  step,
  number,
  checked,
}: NumberRadioButtonProps) => {
  return (
    <div className="flex flex-row items-center space-x-6">
      <input type="radio" className="hidden" checked={checked} />

      <div
        className={clsx(
          "w-10 h-10 border-2 border-white rounded-full flex",
          "items-center justify-center",
          { "bg-radio-checked": checked === true }
        )}
      >
        <span
          className={clsx("text-white font-bold", {
            "text-black": checked === true,
          })}
        >
          {number}
        </span>
      </div>
      <div className="flex flex-col">
        <label className="items-center uppercase tracking-wider text-gray-300 cursor-pointer">
          {step}
        </label>
        <span className="uppercase tracking-wider text-white font-semibold">
          {section}
        </span>
      </div>
    </div>
  );
};
import React from "react";
import styles from "./toggle.module.css";
import clsx from "clsx";

interface ToggleSwitchProps {
  checked: boolean;
  onToggleChange: () => void;
}

export const AppToggleSwitch = ({
  checked,
  onToggleChange,
}: ToggleSwitchProps) => {
  return (
    <div className="flex flex-row justify-around w-full max-w-lg h-10 items-center bg-ghost-white">
      <span
        className={clsx("text-lg font-semibold text-downriver-blue", {
          "text-gray-400": checked,
        })}
      >
        Monthly
      </span>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onToggleChange} />
        <span className={styles.slider}></span>
      </label>
      <span
        className={clsx("text-lg font-semibold text-downriver-blue", {
          "text-gray-400": !checked,
        })}
      >
        Yearly
      </span>
    </div>
  );
};

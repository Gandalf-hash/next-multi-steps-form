import React from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

export const AppCheckbox = ({
  isChecked,
  onChange,
  className,
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };
  return (
    <div className={className}>
      <label className={styles.container}>
        <input
          onChange={handleCheckboxChange}
          checked={isChecked}
          type="checkbox"
        />
        <div className={styles.checkmark}></div>
      </label>
    </div>
  );
};

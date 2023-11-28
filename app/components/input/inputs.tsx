import React, { ChangeEvent, FocusEvent, useState } from "react";

interface InputProps {
  placeholder?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: "tel" | "email" | "text";
  required?: boolean;
  onValidationChange?: (isValid: boolean) => void;
  value: string | number;
}

export const AppInput = ({
  placeholder,
  onChange,
  type = "email",
  required,
  onValidationChange,
  value,
  label,
}: InputProps) => {
  const [validationError, setValidationError] = useState<string | null>(null);
  const [blurred, setBlurred] = useState<boolean>(false);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setBlurred(true);
    const inputValue = event.target.value.trim();

    if (required && !inputValue) {
      setValidationError("This field is required");
      onValidationChange?.(false);
    } else if (type === "email" && inputValue && !isValidEmail(inputValue)) {
      setValidationError("Invalid email format");
      onValidationChange?.(false);
    } else if (
      type === "tel" &&
      inputValue &&
      !isValidPhoneNumber(inputValue)
    ) {
      setValidationError("Invalid phone number");
      onValidationChange?.(false);
    } else {
      setValidationError(null);
      onValidationChange?.(true);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBlurred(false);
    onChange?.(event);
  };

  const isValidEmail = (email: string): boolean => {
    const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      email
    );

    if (!isEmailValid) {
      setValidationError("Invalid email format");
    }

    return isEmailValid;
  };

  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const isPhoneValid = /^\d{10}$/g.test(phoneNumber);

    if (!isPhoneValid) {
      setValidationError("Invalid phone number format");
    }

    return isPhoneValid;
  };

  return (
    <div className="flex flex-col">
      <div className="relative mb-2 flex flex-row justify-between">
        <label className="text-downriver-blue">{label}</label>
        {blurred && validationError && (
          <p className="tracking-[1.08px] font-bold text-red-500">
            {validationError}
          </p>
        )}
      </div>
      <input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`h-full w-full rounded-md border-[2px] border-solid bg-transparent py-4 px-6 placeholder-gray-500 text-downriver-blue font-bold focus:border-blue-genie focus:outline-none  ${
          validationError ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};

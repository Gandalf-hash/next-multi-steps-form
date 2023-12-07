import { AppPrimaryButton } from "@/app/components/button/next-button";
import { useFormContext } from "@/app/components/form/FormContextProvider";
import { AppForm } from "@/app/components/form/form";
import { AppHeading } from "@/app/components/heading/heading";
import React, { ChangeEvent, useEffect } from "react";

export interface FirstStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FirstStep = ({ setCurrentStep }: FirstStepProps) => {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.trim());
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };

  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value.trim());
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const {
    name,
    email,
    tel,
    isNameValid,
    isEmailValid,
    isTelValid,
    setName,
    setEmail,
    setTel,
    setIsNameValid,
    setIsEmailValid,
    setIsTelValid,
  } = useFormContext();

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify({ name, email, tel }));
  }, [name, email, tel]);

  return (
    <div className="flex flex-col max-w-lg xl:max-w-xl w-full">
      <AppHeading
        heading={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />
      <div className="animate-fadeIn flex flex-col space-y-6 md:mt-8">
        <AppForm
          value={name}
          required
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          onChange={handleNameChange}
          onValidationChange={(isValid) => setIsNameValid(isValid)}
        />
        <AppForm
          value={email}
          required
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleEmailChange}
          onValidationChange={(isValid) => setIsEmailValid(isValid)}
        />
        <AppForm
          value={tel}
          required
          label="Phone Numbers"
          type="tel"
          placeholder=" e.g. +1 234 567 890"
          onChange={handleTelChange}
          onValidationChange={(isValid) => setIsTelValid(isValid)}
        />
      </div>
      <div
        className="flex justify-end mt-24 xl:mt-32
      "
      >
        <AppPrimaryButton
          className="btn btn-primary"
          onClick={handleNextStep}
          disabled={!isNameValid || !isEmailValid || !isTelValid}
        />
      </div>
    </div>
  );
};

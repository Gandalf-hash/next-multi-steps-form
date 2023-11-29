import { AppPrimaryButton } from "@/app/components/button/primary-button";
import { AppForm } from "@/app/components/form/form";
import { AppHeading } from "@/app/components/heading/heading";
import React, { ChangeEvent } from "react";

export interface FirstStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FirstStep = ({ setCurrentStep }: FirstStepProps) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [isNameValid, setIsNameValid] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(false);
  const [isTelValid, setIsTelValid] = React.useState<boolean>(false);

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

  return (
    <div className="flex flex-col max-w-lg xl:max-w-xl w-full">
      <AppHeading
        heading={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />
      <div className="flex flex-col space-y-6 md:mt-8">
        <AppForm
          value={name}
          required
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          onChange={handleNameChange}
          onValidationChange={setIsNameValid}
        />
        <AppForm
          value={email}
          required
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleEmailChange}
          onValidationChange={setIsEmailValid}
        />
        <AppForm
          value={tel}
          required
          label="Phone Numbers"
          type="tel"
          placeholder=" e.g. +1 234 567 890"
          onChange={handleTelChange}
          onValidationChange={setIsTelValid}
        />
      </div>
      <div
        className="flex justify-end mt-24 xl:mt-32
      "
      >
        <AppPrimaryButton
          onClick={handleNextStep}
          disabled={!isNameValid || !isEmailValid || !isTelValid}
        />
      </div>
    </div>
  );
};

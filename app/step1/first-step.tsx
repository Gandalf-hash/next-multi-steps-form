import React, { ChangeEvent } from "react";
import { AppInput } from "../ui/input/inputs";
import { AppHeading } from "../ui/heading/heading";
import { AppPrimaryButton } from "../ui/button/primary-button";

interface FirstStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FirstStep = ({ setCurrentStep }: FirstStepProps) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [isNameValid, setIsNameValid] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(false);
  const [isTelValid, setIsTelValid] = React.useState<boolean>(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col max-w-lg xl:max-w-xl w-full ">
      <AppHeading
        heading={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />
      <div className="flex flex-col space-y-4">
        <AppInput
          value={name}
          required
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          onChange={handleNameChange}
          onValidationChange={setIsNameValid}
        />
        <AppInput
          value={email}
          required
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleEmailChange}
          onValidationChange={setIsEmailValid}
        />
        <AppInput
          value={tel}
          required
          label="Phone Numbers"
          type="tel"
          placeholder=" e.g. +1 234 567 890"
          onChange={handleTelChange}
          onValidationChange={setIsTelValid}
        />
      </div>
      <div className="flex justify-end md:mt-40 xl:mt-44">
        <AppPrimaryButton
          onClick={handleNextStep}
          disabled={!isNameValid || !isEmailValid || !isTelValid}
        />
      </div>
    </div>
  );
};

export default FirstStep;

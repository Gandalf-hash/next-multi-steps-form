import { AppHeading } from "@/app/components/heading/heading";
import React from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppBlockItems } from "./block-items";

interface SecondStepProps extends FirstStepProps {}

function SecondPage({ setCurrentStep }: SecondStepProps) {
  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col max-w-lg xl:max-w-xl w-full ">
      <AppHeading
        heading={"Select your plan"}
        description={" You have the option of monthly or yearly billing."}
      />
      <AppBlockItems />
    </div>
  );
}

export default SecondPage;

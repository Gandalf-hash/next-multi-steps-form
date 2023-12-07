import React, { useState } from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppHeading } from "@/app/components/heading/heading";
import { AppAddOnsMonthlyPlan } from "./monthly-plans";
import { AppAddOnsYearlyPlan } from "./yearly-plans";
import { AppBackButton } from "@/app/components/button/back-button";
import { AppPrimaryButton } from "@/app/components/button/next-button";

interface ThirdStepProps extends FirstStepProps {
  selectedPlan: string;
}

export const ThirdStep = ({
  setCurrentStep,
  selectedPlan = "monthly",
}: ThirdStepProps) => {
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  console.log("Selected Plan:", selectedPlan);

  return (
    <div className="animate-fadeIn flex flex-col max-w-lg xl:max-w-xl w-full ">
      <AppHeading
        heading={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      />
      {selectedPlan === "monthly" ? (
        <AppAddOnsMonthlyPlan currentPlan="monthly" />
      ) : (
        <AppAddOnsYearlyPlan currentPlan="yearly" />
      )}
      <div className="flex flex-row items-center md:mt-32 xl:mt-36 justify-between">
        <AppBackButton onClick={handleBackStep} />
        <AppPrimaryButton
          className="btn btn-primary"
          onClick={handleNextStep}
          disabled={false}
        />
      </div>
    </div>
  );
};

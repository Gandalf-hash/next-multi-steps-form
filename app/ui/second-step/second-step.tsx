import { AppHeading } from "@/app/components/heading/heading";
import React, { useState } from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppMonthlyPlan } from "./monthly-plans";
import { AppYearlyPlan } from "./yearly-plans";
import { AppToggleSwitch } from "@/app/components/toggle-switch/toggle-switch";
import { AppBackButton } from "@/app/components/button/back-button";
import { AppPrimaryButton } from "@/app/components/button/next-button";

interface SecondStepProps extends FirstStepProps {
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}

export const SecondStep = ({
  setCurrentStep,
  setSelectedPlan,
}: SecondStepProps) => {
  const [selectedPlan, setSelectedPlanState] = useState("monthly");

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNextStep = () => {
    setSelectedPlan(selectedPlan);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleToggleChange = () => {
    setSelectedPlanState((prev) => {
      const newPlan = prev === "monthly" ? "yearly" : "monthly";
      return newPlan;
    });
  };

  return (
    <>
      <div className="animate-fadeIn flex flex-col h-full">
        <div className="flex flex-col max-w-lg xl:max-w-xl w-full">
          <AppHeading
            heading={"Select your plan"}
            description={"You have the option of monthly or yearly billing."}
          />
          {selectedPlan === "monthly" ? (
            <AppMonthlyPlan currentPlan={selectedPlan} />
          ) : (
            <AppYearlyPlan currentPlan={selectedPlan} />
          )}
        </div>
        <div className="flex justify-center mt-8">
          <AppToggleSwitch
            checked={selectedPlan === "yearly"}
            onToggleChange={handleToggleChange}
          />
        </div>
        <div className="flex flex-row items-center md:mt-12 xl:mt-44 justify-between">
          <AppBackButton onClick={handleBackStep} />
          <AppPrimaryButton
            className="btn btn-primary"
            onClick={handleNextStep}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

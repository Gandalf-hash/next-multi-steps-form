import { AppHeading } from "@/app/components/heading/heading";
import React, { useState } from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppMonthlyPlan } from "./monthly-plans";
import { AppYearlyPlan } from "./yearly-plans";
import { AppToggleSwitch } from "@/app/components/toggle-switch/toggle-switch";
import { AppBackButton } from "@/app/components/button/back-button";
import { AppPrimaryButton } from "@/app/components/button/primary-button";

interface SecondStepProps extends FirstStepProps {}

function SecondPage({ setCurrentStep }: SecondStepProps) {
  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggleChange = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex flex-col max-w-lg xl:max-w-xl w-full">
          <AppHeading
            heading={"Select your plan"}
            description={" You have the option of monthly or yearly billing."}
          />
          {isMonthly ? <AppMonthlyPlan /> : <AppYearlyPlan />}
        </div>
        <div className="flex justify-center mt-8">
          <AppToggleSwitch
            checked={!isMonthly}
            onToggleChange={handleToggleChange}
          />
        </div>
        <div className="flex flex-row items-center md:mt-12 xl:mt-44 justify-between">
          <AppBackButton onClick={handleBackStep} />
          <AppPrimaryButton onClick={handleNextStep} disabled={false} />
        </div>
      </div>
    </>
  );
}

export default SecondPage;

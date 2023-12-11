import { AppPrimaryButton } from "@/app/components/button/next-button";
import React, { useState } from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppBackButton } from "@/app/components/button/back-button";

interface Props extends FirstStepProps {
  selectedPlan: string;
}

export const AppSummaryContainer = ({
  setCurrentStep,
  selectedPlan,
}: Props) => {
  const handleChangeClick = () => {
    setCurrentStep((prevStep: number) => prevStep - 2);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };
  console.log(selectedPlan);
  return (
    <>
      <div className="bg-ghost-white rounded w-full xl:max-w-lg p-6 flex flex-col items-start">
        <div className="flex w-full flex-row justify-between items-center">
          <div>
            <span className="text-lg font-bold text-downriver-blue">
              {selectedPlan} (Monthly)
            </span>
            <div className="">
              <AppPrimaryButton
                onClick={handleChangeClick}
                disabled={false}
                className="underline text-lg text-gray-500 hover:text-lavender-blue-shadow"
              >
                Change
              </AppPrimaryButton>
            </div>
          </div>
          <div className="">
            <span>$9/mo</span>
          </div>
        </div>

        <div className="w-full mt-8">
          <hr />
        </div>
        <div className="flex w-full flex-row justify-between items-center mt-6">
          <div>
            <span className="text-gray-500">Online Service</span>
          </div>
          <div>
            <span className="text-downriver-blue text-sm">+$1/mo</span>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between items-center mt-6">
          <div>
            <span className="text-gray-500">Large Storage</span>
          </div>
          <div>
            <span className="text-downriver-blue text-sm">+$2/mo</span>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-lg px-6 flex-row justify-between items-center mt-6">
        <div>
          <span className="text-gray-500 text-sm">Total (per month)</span>
        </div>
        <div>
          <span className="font-bold text-lavender-blue-shadow text-lg">
            +$12/mo
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center md:mt-40 lg:mt-44 justify-between">
        <AppBackButton onClick={handleBackStep} />
        <AppPrimaryButton
          className="btn btn-primary"
          onClick={handleNextStep}
          disabled={false}
        >
          Confirm
        </AppPrimaryButton>
      </div>
    </>
  );
};

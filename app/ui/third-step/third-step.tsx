import React from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppCheckbox } from "@/app/components/checkbox/checkbox";
import { AppHeading } from "@/app/components/heading/heading";
import { AppAddOnsMonthlyPlan } from "./monthly-plans";

interface ThirdStepProps extends FirstStepProps {}

export const ThirdStep = ({ setCurrentStep }: ThirdStepProps) => {
  return (
    <div className="flex flex-col max-w-lg xl:max-w-xl w-full ">
      <AppHeading
        heading={"Pick add-ons"}
        description={" Add-ons help enhance your gaming experience."}
      />
      <AppAddOnsMonthlyPlan />
    </div>
  );
};

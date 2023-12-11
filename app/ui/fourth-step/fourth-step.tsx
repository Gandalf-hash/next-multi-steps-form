import React, { useState } from "react";
import { FirstStepProps } from "../first-step/first-step";
import { AppHeading } from "@/app/components/heading/heading";
import { AppSummaryContainer } from "./summary-container";

interface FourthStepProps extends FirstStepProps {}

export const FourthStep = ({ setCurrentStep }: FourthStepProps) => {
  const [selectedPlan, setSelectedPlan] = useState("");
  return (
    <div className="animate-fadeIn flex flex-col h-full">
      <div className="flex flex-col w-full max-w-lg xl:max-w-xl ">
        <AppHeading
          heading={"Finishing up"}
          description={"Double-check everything looks okay before confirming"}
        />
        <AppSummaryContainer
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
        ></AppSummaryContainer>
      </div>
    </div>
  );
};

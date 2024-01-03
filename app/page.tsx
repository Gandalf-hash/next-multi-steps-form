"use client";
import React, { useState } from "react";
import { LeftAlignedImage } from "./components/left-image/left-aligned-image";
import { FirstStep } from "./ui/first-step/first-step";
import { ThirdStep } from "./ui/third-step/third-step";
import { FormProvider } from "./components/form/FormContextProvider";
import { SecondStep } from "./ui/second-step/second-step";
import { FourthStep } from "./ui/fourth-step/fourth-step";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  return (
    <FormProvider>
      <main className="w-full max-w-full flex items-center h-full mt-40 md:mt-0 min-h-screen justify-center">
        <div className="rounded-xl gap-12 lg:gap-20 p-4 w-full flex flex-row max-w-4xl xl:max-w-5xl bg-white h-full">
          <LeftAlignedImage currentStep={step} />
          <div className="md:mt-12 w-full max-w-full">
            {step === 1 && <FirstStep setCurrentStep={setStep} />}
            {step === 2 && (
              <SecondStep
                setCurrentStep={setStep}
                setSelectedPlan={setSelectedPlan}
              />
            )}
            {step === 3 && (
              <ThirdStep setCurrentStep={setStep} selectedPlan={selectedPlan} />
            )}
            {step === 4 && <FourthStep setCurrentStep={setStep} />}
          </div>
        </div>
      </main>
    </FormProvider>
  );
};

export default App;

"use client";
import React, { useState } from "react";
import { LeftAlignedImage } from "./components/left-image/left-aligned-image";
import { FirstStep } from "./ui/first-step/first-step";
import SecondPage from "./ui/second-step/second-step";
import { ThirdStep } from "./ui/third-step/third-step";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="w-full max-w-full flex items-center h-full p-6 mt-40 md:mt-0 min-h-screen justify-center">
      <div className="rounded-xl gap-12 lg:gap-20 p-6 w-full flex flex-row max-w-4xl xl:max-w-5xl bg-white h-full">
        <LeftAlignedImage currentStep={currentStep} />
        <div className="md:mt-12">
          {currentStep === 1 && <FirstStep setCurrentStep={setCurrentStep} />}
          {currentStep === 2 && <SecondPage setCurrentStep={setCurrentStep} />}
          {currentStep === 3 && <ThirdStep setCurrentStep={setCurrentStep} />}
        </div>
      </div>
    </main>
  );
};

export default App;

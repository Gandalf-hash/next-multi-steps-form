import React, { useState } from "react";
import Image from "next/image";
import { AppNumberRadioButton } from "../radio-button/number-radio-buttons";

interface LeftAlignedImageProps {
  currentStep: number;
}

export const LeftAlignedImage = ({ currentStep }: LeftAlignedImageProps) => {
  const [selectedStep, setSelectedStep] = useState<string>("");

  const handleRadioButtonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedStep(event.target.value);
  };

  return (
    <div className="relative hidden md:block h-full w-full max-w-xs">
      <div className="absolute left-0 top-12 flex flex-col gap-6">
        <AppNumberRadioButton
          step="step 1"
          section="your info"
          number={1}
          checked={currentStep === 1}
          onChange={handleRadioButtonChange}
        />
        <AppNumberRadioButton
          step="step 2"
          section="select plan"
          number={2}
          checked={currentStep === 2}
          onChange={handleRadioButtonChange}
        />
        <AppNumberRadioButton
          step="step 3"
          section="add ons"
          number={3}
          checked={currentStep === 3}
          onChange={handleRadioButtonChange}
        />
        <AppNumberRadioButton
          step="step 4"
          section="summary"
          number={4}
          checked={currentStep === 4}
          onChange={handleRadioButtonChange}
        />
      </div>

      <div className="">
        <Image
          className="object-cover object-left hidden md:block"
          src={"/assets/images/bg-sidebar-desktop.svg"}
          alt={"Desktop Left Aligned Image"}
          width={320}
          height={350}
        />
      </div>
    </div>
  );
};

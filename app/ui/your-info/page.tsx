"use client";

import React from "react";
import { AppHeading } from "../heading/heading";
import { AppPageInput } from "../input/page-input";
import { AppPrimaryButton } from "../button/primary-button";
import { useRouter } from "next/navigation";

const AppYourInfoSection = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/home");
  };

  return (
    <div className="w-full max-w-xl mt-10">
      <div className="flex flex-col space-y-6">
        <AppHeading
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <AppPageInput
          type="text"
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <AppPageInput
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <AppPageInput
          label="Phone Number"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <div className="w-full flex place-content-end mt-24 -ml-11">
        <AppPrimaryButton onClick={handleButtonClick}>
          Next steps
        </AppPrimaryButton>
      </div>
    </div>
  );
};
export default AppYourInfoSection;
import React from "react";
import { AppHeading } from "../ui/heading/heading";
import { AppPageInput } from "../ui/input/page-input";

export const AppYourInfoSection = () => {
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
    </div>
  );
};

import React, { useState } from "react";
import { clsx } from "clsx";
import { AppCheckbox } from "@/app/components/checkbox/checkbox";

const monthlyData = [
  {
    service: "Online service",
    desc: "   Access to multiplayer games",
    amount: "+$1/mo",
  },
  {
    service: "Larger storage",
    desc: "Extra 1TB of cloud save",
    amount: "+$2/mo",
  },
  {
    service: "Customizable Profile",
    desc: "Custom theme on your profile",
    amount: " +$2/mo",
  },
];

export const AppAddOnsMonthlyPlan = ({
  currentPlan,
}: {
  currentPlan: string;
}) => {
  const initialSelectedServices = [
    monthlyData[0].service,
    monthlyData[1].service,
  ];
  const [selectedMonthlyPlans, setSelectedMonthlyPlans] = useState<string[]>(
    initialSelectedServices
  );

  const handleCheckboxChange = (service: string) => {
    setSelectedMonthlyPlans((prevSelectedPlans) => {
      if (prevSelectedPlans.includes(service)) {
        return prevSelectedPlans.filter((plan) => plan !== service);
      } else {
        return [...prevSelectedPlans, service];
      }
    });
  };
  return (
    <div className="flex gap-6 flex-col justify-center">
      {currentPlan === "monthly" &&
        monthlyData.map(({ service, desc, amount }) => (
          <label
            key={service}
            className={clsx(
              "plan border hover:border-downriver-blue  gap-6 max-w-full cursor-pointer  flex flex-row rounded-md items-center py-6 px-6 w-full h-24 lg:w-[36vw]",
              {
                "border-2 border-violet-mix bg-ghost-white":
                  selectedMonthlyPlans.includes(service),
              }
            )}
          >
            <AppCheckbox
              onChange={() => handleCheckboxChange(service)}
              isChecked={selectedMonthlyPlans.includes(service)}
              className=""
            />
            <div className="flex flex-col">
              <h4 className=" text-downriver-blue font-bold">{service}</h4>
              <span className="text-gray-500">{desc}</span>
            </div>
            <span className="text-sm ml-auto tracking-wider text-blue-genie">
              {amount}
            </span>
          </label>
        ))}
    </div>
  );
};

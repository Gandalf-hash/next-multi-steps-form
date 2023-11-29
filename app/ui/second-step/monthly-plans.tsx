import { clsx } from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const chooseMonthlyPlan = [
  {
    image: "/assets/images/icon-arcade.svg",
    plan: "Arcade",
    amount: "$9/mo",
  },
  {
    image: "/assets/images/icon-advanced.svg",
    plan: " Advanced",
    amount: " $12/mo",
  },
  {
    image: "/assets/images/icon-pro.svg",
    plan: " Pro",
    amount: "$15/mo",
  },
];

export const AppMonthlyPlan = () => {
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState(
    chooseMonthlyPlan[0].plan
  );

  const handlePlanClick = (plan: string) => {
    setSelectedMonthlyPlan(plan);
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4 md:space-y-0 lg:space-x-4 mt-2 lg:mt-8 items-center">
      {chooseMonthlyPlan.map(({ image, plan, amount }) => (
        <div
          key={plan}
          className={clsx(
            "rounded-md w-full cursor-pointer border-2 p-5 flex",
            "flex-row gap-6 lg:flex-col lg:w-40 lg:h-48 hover:border-violet-mix",
            { "border-violet-mix bg-ghost-white": selectedMonthlyPlan === plan }
          )}
          onClick={() => handlePlanClick(plan)}
        >
          <Image
            className="object-fill object-left"
            src={image}
            alt={`${plan} Plan Icon`}
            width={45}
            height={45}
          />
          <div className="flex flex-col mt-auto">
            <span className="font-bold text-lg text-olympian-blue">{plan}</span>
            <span className="text-gray-500">{amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

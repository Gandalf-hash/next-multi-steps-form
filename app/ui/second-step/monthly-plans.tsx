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

export const AppMonthlyPlan = ({
  currentPlan = "monthly",
  onSelectPlan,
}: {
  currentPlan: string;
  onSelectPlan: (plan: string) => void;
}) => {
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState<string>(
    chooseMonthlyPlan[0].plan
  );
  const handlePlanClick = (plan: string) => {
    setSelectedMonthlyPlan(plan);
    onSelectPlan(plan);
  };

  return (
    <div className="plan-container">
      {currentPlan === "monthly" &&
        chooseMonthlyPlan.map(({ image, plan, amount }) => (
          <div
            key={plan}
            className={clsx("plan p-5 lg:flex-col lg:w-40 lg:h-48", {
              "border-violet-mix bg-ghost-white": selectedMonthlyPlan === plan,
            })}
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
              <span className="font-bold text-lg text-olympian-blue">
                {plan}
              </span>
              <span className="text-gray-500 tracking-wider">{amount}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

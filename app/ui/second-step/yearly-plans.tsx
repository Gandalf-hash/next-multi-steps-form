import { clsx } from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const chooseYearlyPlan = [
  {
    image: "/assets/images/icon-arcade.svg",
    plan: "Arcade",
    amount: "$90/yr",
    month: "2 months free",
  },
  {
    image: "/assets/images/icon-advanced.svg",
    plan: " Advanced",
    amount: " $120/yr",
    month: "2 months free",
  },
  {
    image: "/assets/images/icon-pro.svg",
    plan: " Pro",
    amount: "$150/yr",
    month: "2 months free",
  },
];

export const AppYearlyPlan = ({
  currentPlan = "yearly",
}: {
  currentPlan: string;
}) => {
  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState<string>(
    chooseYearlyPlan[0].plan
  );

  const handlePlanClick = (plan: string) => {
    setSelectedYearlyPlan(plan);
  };

  return (
    <>
      <div className="plan-container">
        {currentPlan === "yearly" &&
          chooseYearlyPlan.map(({ image, plan, amount, month }) => (
            <div
              key={plan}
              className={clsx("plan p-3 lg:p-5 lg:flex-col lg:w-40 lg:h-48", {
                "border-violet-mix bg-ghost-white": selectedYearlyPlan === plan,
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
              <div className="flex flex-col  mt-auto">
                <span className="font-bold lg:text-lg text-olympian-blue">
                  {plan}
                </span>
                <span className="text-gray-500 tracking-wider">{amount}</span>
                <span className="font-bold text-sm text-olympian-blue">
                  {month}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

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

export const AppYearlyPlan = () => {
  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState(
    chooseYearlyPlan[0].plan
  );

  const handlePlanClick = (plan: string) => {
    setSelectedYearlyPlan(plan);
  };
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-4 md:space-y-0 lg:space-x-4 mt-2 lg:mt-8 items-center">
        {chooseYearlyPlan.map(({ image, plan, amount, month }) => (
          <div
            key={plan}
            className={clsx(
              "rounded-md w-full cursor-pointer border-2 p-3 lg:p-5 flex",
              "flex-row gap-6 lg:flex-col lg:w-40 lg:h-48 hover:border-violet-mix",
              {
                "border-violet-mix bg-ghost-white": selectedYearlyPlan === plan,
              }
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
            <div className="flex flex-col  mt-auto">
              <span className="font-bold lg:text-lg text-olympian-blue">
                {plan}
              </span>
              <span className="text-gray-500">{amount}</span>
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
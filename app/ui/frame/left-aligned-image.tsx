import Image from "next/image";
import React from "react";

export const AppLeftAlignedImage = () => {
  return (
    <div className="hidden w-full max-w-sm md:block grow">
      <div>
        <Image
          className="object-cover"
          src="/assets/images/bg-sidebar-desktop.svg"
          alt="Container Sidebar Desktop Image"
          width={300}
          height={350}
        />
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";

export const LeftAlignedImage = () => {
  return (
    <div className="hidden md:block h-full w-full max-w-xs">
      <div>
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

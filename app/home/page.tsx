import React from "react";
import { AppContentWrapper } from "../ui/page-wrapper/content-wrapper";
import { AppLeftAlignedImage } from "../ui/frame/left-aligned-image";
import AppYourInfoSection from "../ui/your-info/page";
import { AppPageWrapper } from "../ui/page-wrapper/page-wrapper";

function Home() {
  return (
    <AppPageWrapper>
      <AppContentWrapper>
        <AppLeftAlignedImage />
        <AppYourInfoSection />
      </AppContentWrapper>
    </AppPageWrapper>
  );
}

export default Home;

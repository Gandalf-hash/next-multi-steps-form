import { Metadata } from "next";
import { AppContentWrapper } from "./ui/page-wrapper/content-wrapper";
import { AppLeftAlignedImage } from "./ui/frame/left-aligned-image";
import { AppYourInfoSection } from "./your-info/page";

export const metadata: Metadata = {
  title: "Form",
};
export default function Home() {
  return (
    <main className="w-full p-6 flex justify-center items-center min-h-screen lg:max-w-full">
      <AppContentWrapper>
        <AppLeftAlignedImage />
        <AppYourInfoSection />
      </AppContentWrapper>
    </main>
  );
}

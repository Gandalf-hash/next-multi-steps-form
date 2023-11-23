import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "Form",
};
export default function page() {
  return (
    <main>
      <Home />
    </main>
  );
}

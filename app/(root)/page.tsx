import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ScreenDemo from "@/components/Demo/ScreenDemo";
import { WhyRaycast } from "@/components/Features/WhyRaycast";
import Extensions from "@/components/Extensions/Extensions";
export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between gap-56 ">
      <Hero />
      <ScreenDemo />
      <WhyRaycast />
      <Extensions />
    </main>
  );
}

import Image from "next/image";
import Hero from "@/components/Hero";
import ScreenDemo from "@/components/ScreenDemo";
import { WhyRaycast } from "@/components/WhyRaycast";
import Extensions from "@/components/Extensions";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-56 ">
      <Hero />
      <ScreenDemo />
      <WhyRaycast />
      <Extensions />
    </main>
  );
}

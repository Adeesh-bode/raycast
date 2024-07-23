import Image from "next/image";
import Hero from "@/components/Hero";
import ScreenDemo from "@/components/ScreenDemo";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <ScreenDemo />
    </main>
  );
}

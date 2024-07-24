import ScreenNavbar from "./ScreenNavbar"
import Switch from "./Switch";
import { SparklesCore } from "./ui/sparkles";
import Window from "./Window";

const Screen = () => {
  return (
    <div className="relative w-full p-[6px]  flex flex-col justify-start items-center px-24 py-20">
      <div className="w-full absolute inset-0 z-0 p-12">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-full relative z-10  p-2 bg-black rounded-md screen-shadow ">
        <ScreenNavbar />
        <Window />
        <Switch />
      </div>
    </div>
  )
}

export default Screen
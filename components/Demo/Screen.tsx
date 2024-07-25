'use client'
import { useEffect, useState } from "react";
import ScreenNavbar from "./ScreenNavbar"
import Switch from "./Switch";
import { SparklesCore } from "../ui/Sparkles";
import Window from "./Window";


const Screen = () => {
  const windows : string[] = [ 'clipboard' , 'ai' , 'emoji' , 'calculator' , 'management']
  const [ selectedWindow , setSelectedWindow ] = useState<string>( windows[0] );

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedWindow((prevSelectedWindow) => {
        const currentIndex = windows.indexOf(prevSelectedWindow);
        const nextIndex = (currentIndex + 1) % windows.length;
        return windows[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="relative w-full   flex flex-col justify-start items-center  py-12">
      <div className="w-full absolute inset-0 z-0 py-6 px-3">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.5}
          maxSize={0.7}
          particleDensity={90}
          className="w-full h-full "
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-11/12  z-10  p-[4px] bg-neutral-600 rounded-md screen-shadow ">
        <div className="w-full h-screen bg-black rounded-md flex flex-col justify-start overflow-auto " >
          <ScreenNavbar />
          <Window currentWindow={selectedWindow} />
          <Switch selectWindow={ setSelectedWindow } />
        </div>
      </div>
    </div>
  )
}

export default Screen
'use client'
import { useState } from "react";
import MobileScreen from "./MobileScreen";
import Screen from "./Screen";

const ScreenDemo = (  ) => {

  const windows : string[] = [ 'clipboard' , 'ai' , 'emoji' , 'calculator' , 'management'];
  const [ selectedWindow , setSelectedWindow ] = useState<string>( windows[1] );

  return (
    <div className="w-full min-h-screen  flex flex-col justify-start items-center text-base md:text-xl gap-8 ">
        <div className="flex flex-col justify-between items-center gap-1">
            <h2 className="text-white text-center ">Take shortcuts, not detours.</h2>
            <h3 className="text-neutral-500 text-center">One interface, everything you need.</h3>
        </div>
        
          <div className="w-full h-full relative hidden md:block ">
            <Screen windows={windows} selectedWindow={selectedWindow} setSelectedWindow={setSelectedWindow} />
          </div>

          <div className="w-full h-full relative block md:hidden  ">
             <MobileScreen currentWindow={selectedWindow} setSelectedWindow={setSelectedWindow} />
          </div>

        {/* dynamic content based on above selectn in bar */}
         
        <div className=" w-4/5 md:w-1/2 text-neutral-600 text-center text-xl ">
            <span className="text-white text-center " >Remember Everything.{' '}</span> 
            Stop playing Clipboard ping pong - with Clipboard History you&apos;ll never forget anything
        </div>

        
    </div>
  )
}

export default ScreenDemo
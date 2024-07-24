import Screen from "./Screen";
import { SparklesCore } from "./ui/sparkles";

const ScreenDemo = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col justify-start items-center gap-5">
        <div className="flex flex-col justify-between items-center gap-1">
            <h2 className="text-white text-center ">Take shortcuts, not detours.</h2>
            <h3 className="text-neutral-500 text-center">One interface, everything you need.</h3>
        </div>
        
          <div className="w-full h-full relative ">
             {/* yaha aeega partilces */}
            <Screen />
          </div>

        {/* dynamic content based on above selectn in bar */}
         
        <div className=" w-1/2 text-neutral-600 text-center">
            <span className="text-white text-center " >Remember Everything.</span> 
            Stop playing Clipboard ping pong - with Clipboard History you&apos;ll never forget anything
        </div>

        
    </div>
  )
}

export default ScreenDemo
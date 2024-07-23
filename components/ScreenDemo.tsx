import Screen from "./Screen";

const ScreenDemo = () => {
  return (
    <div className="w-2/3 min-h-screen mt-72 flex flex-col justify-between items-center gap-5">
        <div className="flex flex-col justify-between items-center gap-1">
            <h2 className="text-white text-center ">Take shortcuts, not detours.</h2>
            <h3 className="text-neutral-500 text-center">One interface, everything you need.</h3>
        </div>
        
        <Screen />
        {/* dynamic content based on above selectn in bar */}
         
        <div className=" w-1/2 text-neutral-600 text-center">
            <span className="text-white text-center " >Remember Everything.</span> 
            Stop playing Clipboard ping pong - with Clipboard History you’ll never forget anything
        </div>

        
    </div>
  )
}

export default ScreenDemo
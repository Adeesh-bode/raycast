import DownloadButton from "../ui/DownloadButton"
import FadedKeyboard from "./FadedKeyboard"

export const WhyRaycast = () => {
  return (
    <div className="px-8 md:px-20 w-full h-screen flex flex-col-reverse md:flex-row " >
        
        <div className="w-full md:w-2/5 h-full flex flex-col justify-center items-start gap-8 px-4 text-xl " >
            <div className="text-center md:text-left" >
                <div>It&apos;s not about saving time.</div>
                <div className="text-neutral-600 text-center md:text-left" >It&apos;s about feeling like you&apos;re never wasting it.</div>
            </div>
            <div className="w-full flex justify-center md:justify-start" >
                <DownloadButton />
            </div>
        </div>
        
        <FadedKeyboard />
    
    </div>
  )
}

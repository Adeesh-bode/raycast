import DownloadButton from "./DownloadButton"
import FadedKeyboard from "./FadedKeyboard"

export const WhyRaycast = () => {
  return (
    <div className="px-20 w-full h-screen flex " >
        <div className="w-2/5 h-full flex flex-col justify-center items-start gap-8 px-4 text-xl " >
            <div>
                <div>It&apos;s not about saving time.</div>
                <div className="text-gray-700" >It&apos;s about feeling like you&apos;re never wasting it.</div>
            </div>
            <div className="flex justify-start" >
                <DownloadButton />
            </div>
        </div>
        
        <FadedKeyboard />
    </div>
  )
}

import Switch from "./Switch"

const bgimg = {
    clipboard : '/clipboard.webp' ,
    ai: '/ai.webp', 
    emoji : '/emoji.webp' ,
    calculator: '/calculator.webp' ,
    management: '/management.webp' ,
}

const MobileScreen = ({currentWindow , setSelectedWindow  }:{ currentWindow: string , setSelectedWindow: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="size-full relative border-y-2 border-gray-500 bg-neutral-700/25 py-2 px-0 " >
        <img src={bgimg[currentWindow]} alt={currentWindow} className="w-full h-full object-cover" />
        <div className="w-full flex-center absolute bottom-2  " >
            <Switch selectWindow={ setSelectedWindow } />
        </div>
    </div>
  )
}

export default MobileScreen
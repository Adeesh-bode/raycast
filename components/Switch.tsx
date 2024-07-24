import { FaRegClipboard } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCalculator } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";





const Switch = () => {
  return (
    <div className="w-full h-20 flex-center ">
        <div className="w-1/4 h-12 flex-center gap-2 rounded-md  border border-neutral-600 overflow-y-visible ">
            <div className="flex-center border p-2   border-neutral-600 rounded-md bg-gray-500/35 hover:scale-110 ">
                <FaRegClipboard />
            </div>
            <div className="flex-center border p-2 border-neutral-600   rounded-md bg-gray-500/35 hover:scale-110 ">
                <BsStars />
            </div>
            <div className="flex-center border p-2 border-neutral-600  rounded-md bg-gray-500/35 hover:scale-110 ">
                <FaRegFaceSmile />
            </div>
            <div className="flex-center border p-2  border-neutral-600 rounded-md bg-gray-500/35 hover:scale-110 ">
                <BsCalculator />
            </div>
            <div className="flex-center border p-2  border-neutral-600 rounded-md bg-gray-500/35  hover:scale-110 ">
                <CgMenuGridO />
            </div>
        </div>
    </div>
  )
}

export default Switch
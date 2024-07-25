import { CiPickerHalf } from "react-icons/ci";
import { AiFillApple } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CgLinear } from "react-icons/cg";
import { LuDot } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { FaBatteryFull } from "react-icons/fa6";




const ScreenNavbar = () => {
  return (
    <div className="w-full h-fit flex justify-between items-center text-sm font-semibold px-5 py-4  text-neutral-500">
        <div className="flex items-center justify-start gap-7">
        <div className="flex justify-between items-center gap-3 ">
            <AiFillApple size={20} />
            <span>Finder</span>
        </div>
        <div className="flex justify-between items-center gap-3">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Window</span>
            <span>Go</span>
            <span>Help</span>
        </div>
        </div>
        <div className="flex justify-between items-center gap-3">
            <CiPickerHalf />
            <div className="seperate gap-1">
                <FaGithub />
                <span>49</span>
            </div>   
            <div className="seperate gap-1">
                <CgLinear />
                <span>1</span>
            </div>   
            <div className=" seperate">
                <span>Lunch</span>
                <LuDot />
                <span>37 min left </span>
            </div>
            <FaWifi />
            <FaBatteryFull />
            <span>Mon Jul 22 </span>
            <span>12:00 am</span>
        </div>
    </div>
  )
}

export default ScreenNavbar
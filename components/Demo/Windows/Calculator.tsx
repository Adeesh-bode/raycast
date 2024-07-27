import { ReactTyped } from "react-typed"
import { IconArrowRight } from "@tabler/icons-react";
import { CiSettings } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";


const Calculator = () => {
  return (
    <div className="size-full flex flex-col justify-start items-center  " >
        <div className="w-full px-5 py-1 text-white border-b-2 border-gray-600  " >
            <ReactTyped strings={["Search Emoji & Symbols..."]} typeSpeed={150} loop />
        </div>
        <div className='w-full h-full p-3 flex flex-col justify-start gap-4 text-base '>
            <div className="w-full flex flex-col justify-start gap-[2px] " >
                <div className="" >Calculator</div>
                <div className="w-full h-32  seperate  bg-gray-200/35 rounded-md px-16 " >
                    <div className="flex flex-col justify-center items-center gap-4">
                        <span>12pm here in london</span>
                        <span className="bg-gray-100/45 p-2 rounded-md " >12:00 pm</span>
                    </div>
                    <div className='h-full flex flex-col justify-between items-center' >
                        <div className="bg-gray-300 w-[1px] h-full border-[1px] border-gray-300" ></div>
                        <div className="py-[6px]">
                        <IconArrowRight size={35} />
                        </div>
                        <div className="bg-gray-300 w-[1px] h-full border-[1px] border-gray-300" ></div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <span>20:00</span>
                        <span className="bg-gray-100/45 p-2 rounded-md " >London, GMT</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center gap-4" >
                <span>Use &quot;12pm here in london&quot; with...</span>
                <CiSettings />
            </div>
            <div className="w-full flex flex-col justify-between gap-3" >
                <div className='w-full flex justify-between items-center' >
                    <div className='flex justify-start items-start gap-3'>
                        <div className="p-[2px] bg-red-600 rounded flex-center">
                            <BiSearch />
                        </div>
                        <div>Search Files</div>
                        <div className="text-neutral-400" >File Search</div>
                    </div>
                    <div>Command</div>
                </div>
                <div className='w-full flex justify-between items-center' >
                    <div className='flex justify-start items-center gap-3'>
                        <div className="p-[2px] bg-red-600 rounded flex-center">
                            <BiSearch />
                        </div>
                        <div>Search Files</div>
                        <div className="text-neutral-400" >File Search</div>
                    </div>
                    <div>Command</div>
                </div>
                <div className='w-full flex justify-between items-center' >
                    <div className='flex justify-start items-start gap-3'>
                        <div className="p-[2px] bg-red-600 rounded flex-center">
                            <BiSearch />
                        </div>
                        <div>Search Files</div>
                        <div className="text-neutral-400" >File Search</div>
                    </div>
                    <div>Command</div>
                </div>
                <div className='w-full flex justify-between items-center' >
                    <div className='flex justify-start items-start gap-3'>
                        <div className="p-[2px] bg-red-600 rounded flex-center">
                            <BiSearch />
                        </div>
                        <div>Search Files</div>
                        <div className="text-neutral-400" >File Search</div>
                    </div>
                    <div>Command</div>
                </div>
            </div>
        </div>
    </div>  )
}

export default Calculator
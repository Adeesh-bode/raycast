import { AiOutlineEnter } from "react-icons/ai";
import { MdKeyboardCommandKey } from "react-icons/md";
const BottomBar = () => {
  return (
    <div className="absolute bottom-0 w-full bg-neutral-900/35 border-t border-neutral-600 seperate px-4 py-1  text-sm ">
          <div className="">Finder</div>
          <div className='flex justify-between items-center gap-2 '>
            <div className='flex items-center gap-2'>
              <span>Copy to Clipboard</span>
              <span className="p-[2px] bg-gray-100/35 rounded">
                <AiOutlineEnter />
              </span>
            </div> 
            <div className='flex items-center gap-2'> |
              <span>Actions</span>
              <div className='flex items-center gap-1'>
                <span className="p-[2px]  bg-gray-100/35 rounded">
                  <MdKeyboardCommandKey />
                </span>
                <span className=" px-[5px] bg-gray-100/35 rounded">
                  k
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default BottomBar
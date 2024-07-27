import { BiArrowBack } from "react-icons/bi"
import { ReactTyped } from "react-typed"
import { CiImageOn } from "react-icons/ci";


const Clipboard = () => {
  return (
    <div className="size-full flex flex-col justify-start items-center pb-[28px] bg-neutral-800/35 " >
        <div className="w-full py-3 text-white border-b-2 border-neutral-500  seperate " >
          <div className="seperate gap-[6px]" >
            <div className="p-1 flex-center" >
              <BiArrowBack />
            </div>
            <ReactTyped strings={["Magic at your fingertips"]} typeSpeed={150} loop />
          </div>
          <select className="bg-transparent text-gray-200 border-2 rounded-md px-1  py-[2px] focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            id="Type"
          >
            <option value="All type">All type</option>
            <option value="Image">Image Only</option>
            <option value="Files">Files Only</option>
            <option value="Text">Text Only</option>
            <option value="Links">Links Only</option>
            <option value="Color">Color Only</option>
          </select>
        </div>
        <div className='w-full h-full  flex '>
            <div className="w-4/5 h-full flex  flex-col justify-start text-base gap-3 p-1 " >
              <span className="text-neutral-400 " >Today</span> 
              <div className="flex h-full flex-col justify-start gap-2" >
                
                <div className="w-full flex justify-start items-center gap-2 " >
                  <CiImageOn />
                  <span>magic.png (640 x380 )</span>
                </div>
                
                <div className="w-full flex justify-start items-center gap-2 " >
                  <div className="w-3 h-3 rounded-full bg-orange-600" ></div>
                  <span>#FC14FG</span>
                </div>

                <div className="w-full flex justify-start items-center gap-2 " >
                  <div className="w-3 h-3 rounded-full bg-red-600" ></div>
                  <span>#E89ER4</span>
                </div>

                <div className="w-full flex justify-start items-center gap-2 " >
                  <div className="w-3 h-3 rounded-full bg-green-600" ></div>
                  <span>#CE2D45</span>
                </div>

                <div className="w-full flex justify-start items-center gap-2 " >
                  <div className="w-3 h-3 rounded-full bg-orange-600" ></div>
                  <span>Logo.png (16 x16 )</span>
                </div>
              
              </div> 
            </div>
            <div className='flex flex-col justify-start items-start w-full h-full text-base border-x-[2px] border-y-0   border-neutral-500 ' >
                <div className="w-full h-40 flex-center border-b-[2px]  border-neutral-500" >
                    <div className="w-20 h-20 rounded-full bg-red-500 border-[4px] border-red-800" ></div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2 p-2 pb-6" >
                  <span className="text-neutral-400" >Information</span>
                  <div className="w-full flex flex-col justify-start gap-2  " >
                    <div className="seperate hover:bg-gray-400/35 border-b-[1px] border-neutral-500 " >
                      <span>Application</span>
                      <span>VS Code</span>
                    </div>
                    <div className="seperate hover:bg-gray-400/35 border-b-[1px] border-neutral-500 " >
                      <span>Content Type</span>
                      <span>Color</span>
                    </div>
                    <div className="seperate hover:bg-gray-400/35 border-b-[1px] border-neutral-500 " >
                      <span>Copied</span>
                      <span>12:45:27</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clipboard
import { ReactTyped } from "react-typed";

const Management = () => {
    return (
    <div className="size-full flex flex-col justify-start items-center gap-2 p-1  " >
        <div className="w-full px-5 py-3 text-white border-b-2 border-neutral-500  " >
        <ReactTyped strings={["Window Management"]} typeSpeed={150} loop />
        </div>
        <div className='w-full h-full p-3 text-base'>
            <span className="text-neutral-300" >Results</span>
            <div className="w-full " >
                
                <div className="w-full hover:bg-gray-500/25 p-2 flex justify-start items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-start items-center p-[2px] bg-blue-600 rounded">
                        <span className="w-4 h-full bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Left Half</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>

                <div className="w-full hover:bg-gray-500/25 p-2 flex justify-start items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-end items-center p-[2px] bg-blue-600 rounded">
                        <span className="w-4 h-full bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Right Half</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>

                <div className="w-full hover:bg-gray-500/25 p-2 flex justify-start items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-start items-center p-[2px] bg-blue-600 rounded">
                        <span className="w-full h-full bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Miximize</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>
                
                <div className="w-full hover:bg-gray-500/25 p-2 flex justify-start items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-start items-center p-[2px] bg-blue-600 rounded">
                        <span className="w-1/3 h-full bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Last third</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>
                
                <div className="w-full hover:bg-gray-500/25 p-2 flex justify-start items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-start items-center p-[2px] bg-blue-600 rounded">
                        <span className="w-2/3 h-full bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Two third</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>
                
                <div className="w-full hover:bg-gray-500/25 p-2 flex justifstart items-center gap-2 " >
                    <span className="w-7 h-6 flex justify-end items-start p-[2px] bg-blue-600 rounded">
                        <span className="w-1/2 h-1/2 bg-white rounded">
                            
                        </span>
                    </span>
                    <span>Top Right Quater</span>
                    <span className="text-neutral-300" >Window Management</span>
                </div>
            

            </div>
        </div>
    </div>  
    )
}

export default Management;
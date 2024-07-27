import Ai from "./Windows/Ai";
import Calculator from "./Windows/Calculator";
import Clipboard from "./Windows/Clipboard";
import Emoji from "./Windows/Emoji";
import Management from "./Windows/Management";

interface windowProps {
    currentWindow : string,
}

const Window = ({ currentWindow } : windowProps ) => {
  return (
    <div className="flex-center w-full h-full red-bg py-3 ">
        <div className="flex-center w-3/5 p-2 h-full bg-neutral-900/25 border border-neutral-600 rounded-2xl  backdrop-blur-sm " >
          { currentWindow == 'clipboard' && <Clipboard />}
          { currentWindow == 'ai' && <Ai />}
          { currentWindow == 'emoji' && <Emoji />}
          { currentWindow == 'calculator' && <Calculator />}
          { currentWindow == 'management' && <Management />}
        </div>
    </div>
  )
}

export default Window;
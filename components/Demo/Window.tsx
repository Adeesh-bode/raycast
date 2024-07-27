import Ai from "./Windows/Ai";
import BottomBar from "./Windows/BottomBar";
import Calculator from "./Windows/Calculator";
import Clipboard from "./Windows/Clipboard";
import Emoji from "./Windows/Emoji";
import Management from "./Windows/Management";


interface WindowProps {
  currentWindow: string;
}

const Window = ({ currentWindow }: WindowProps) => {
  return (
    <div className="flex-center w-full h-full py-3 red-bg">
      <div className="relative flex-center w-3/5 p-2 h-full bg-neutral-900/25 border border-neutral-600 rounded-2xl backdrop-blur-sm">
        {currentWindow === 'clipboard' && <Clipboard />}
        {currentWindow === 'ai' && <Ai />}
        {currentWindow === 'emoji' && <Emoji />}
        {currentWindow === 'calculator' && <Calculator />}
        {currentWindow === 'management' && <Management />}

        <BottomBar />
      </div>
    </div>
  );
}

export default Window;

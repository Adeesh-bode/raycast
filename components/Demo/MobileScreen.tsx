import Switch from "./Switch";
import Image from 'next/image';

interface bgimgi {
  clipboard: string;
  ai: string;
  emoji: string;
  calculator: string;
  management: string;
  [key: string]: string; // Index signature
}

const bgimg: bgimgi = {
  clipboard: '/clipboard.webp',
  ai: '/ai.webp',
  emoji: '/emoji.webp',
  calculator: '/calculator.webp',
  management: '/management.webp',
};

const MobileScreen = ({ currentWindow, setSelectedWindow }: { currentWindow: string, setSelectedWindow: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="size-full relative border-y-2 border-gray-500 bg-neutral-700/25 py-2 px-0 ">
      <Image
        src={bgimg[currentWindow]}
        alt={currentWindow}
        className="w-full h-full object-cover"
        layout="fill" // Recommended for full-screen backgrounds
      />
      <div className="w-full flex-center absolute bottom-2 ">
        <Switch selectWindow={setSelectedWindow} />
      </div>
    </div>
  );
};

export default MobileScreen;

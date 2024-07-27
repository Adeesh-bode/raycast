import React from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import { BsStars, BsCalculator } from 'react-icons/bs';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { CgMenuGridO } from 'react-icons/cg';

interface SwitchProps {
    selectWindow: React.Dispatch<React.SetStateAction<string>>; // is set function of useState which contains string
}

export const iconMap = {
    clipboard: <FaRegClipboard size={30} />,
    ai: <BsStars size={30} />,
    emoji: <FaRegFaceSmile size={30} />,
    calculator: <BsCalculator size={30} />,
    management: <CgMenuGridO size={30} />,
};

const Switch: React.FC<SwitchProps> = ({ selectWindow }) => { // or can have assign inline type 
    const handleChangeWindow = (windowName: string) => {
        selectWindow(windowName);
    };

    return (
        <div className="w-full h-20 md:h-24 md:mb-4 flex-center">
            <div className="w-fit h-16 md:h-20 flex-center gap-2 md:gap-2 py-1 md:py-2 px-2 md:px-3 rounded-xl md:rounded-3xl bg-neutral-900/70 border border-neutral-600 overflow-y-visible">
                {Object.entries(iconMap).map(([key, Icon]) => (
                    <div
                        key={key}
                        className="flex-center  border p-1 md:p-3 px-1 md:px-4 border-neutral-600 rounded-lg bg-gray-500/35 hover:scale-110"
                        onClick={() => handleChangeWindow(key)}
                    >
                        {Icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Switch;

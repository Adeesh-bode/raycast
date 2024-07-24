import React from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import { BsStars, BsCalculator } from 'react-icons/bs';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { CgMenuGridO } from 'react-icons/cg';

interface SwitchProps {
    selectWindow: React.Dispatch<React.SetStateAction<string>>; // is set function of useState which contains string
}

export const iconMap = {
    clipboard: <FaRegClipboard />,
    ai: <BsStars />,
    emoji: <FaRegFaceSmile />,
    calculator: <BsCalculator />,
    management: <CgMenuGridO />,
};

const Switch: React.FC<SwitchProps> = ({ selectWindow }) => { // or can have assign inline type 
    const handleChangeWindow = (windowName: string) => {
        selectWindow(windowName);
    };

    return (
        <div className="w-full h-20 flex-center">
            <div className="w-1/5 h-12 flex-center gap-2 rounded-md border border-neutral-600 overflow-y-visible">
                {Object.entries(iconMap).map(([key, Icon]) => (
                    <div
                        key={key}
                        className="flex-center border p-2 border-neutral-600 rounded-md bg-gray-500/35 hover:scale-110"
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

'use client';

import { useState } from 'react';

interface ExtensionsHeaderProps {
  extension: string; 
  selectExtension: React.Dispatch<React.SetStateAction<string>>; // is set function of useState which contains string
}

const ExtensionsHeader: React.FC<ExtensionsHeaderProps> = ({ extension, selectExtension }) => {
  const ExtensionOptions = ['Productivity', 'Engineering', 'Design', 'Writing'];
  const handleChange = (extension: string) => {
    selectExtension(extension);
  };

  return (
    <div className="w-4/5  flex justify-between items-center cursor-pointer ">
      
      <div className="w-1/3 flex flex-col justify-start items-start gap-3 text-left text-xl">
        <div>There&apos;s an extension for that.</div>
        <div className="text-neutral-700">
          Use your favorite tools without even opening them.
        </div>
      </div>

      <div className="w-fit separate px-2 py-2 gap-3 rounded-full border border-neutral-600 flex">
        {ExtensionOptions.map((option) => (
          <span
            key={option}
            onClick={() => handleChange(option)}
            className={`py-2 px-3 rounded-full  hover:text-white inline-flex h-12 items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
              option === extension
                ? 'bg-[linear-gradient(110deg,#111010,10%,#a8a5a5,55%,#000103)] bg-[length:200%_100%] animate-shimmer border border-neutral-600'
                : 'text-slate-400'
            }`}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExtensionsHeader;

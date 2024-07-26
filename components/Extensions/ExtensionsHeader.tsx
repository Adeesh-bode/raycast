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
    <div className="w-full md:w-4/5 flex flex-col  md:flex-row  justify-between items-start cursor-pointer gap-5  ">
      
      <div className="w-full md:w-1/3 flex flex-col justify-start items-start gap-3 px-7 text-left text-xl">
        <div>There&apos;s an extension for that.</div>
        <div className="text-neutral-700">
          Use your favorite tools without even opening them.
        </div>
      </div>

      <div className="w-fit md:w-fit separate p-1 md:px-2 md:py-2 gap-1 md:gap-3 rounded-full border border-neutral-600 flex">
        {ExtensionOptions.map((option) => (
          <span
            key={option}
            onClick={() => handleChange(option)}
            className={`text-sm py-2 px-3 rounded-full  hover:text-white inline-flex h-12 items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
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

'use client'
import { useState } from "react";
import { CarouselDemo } from "./CarouselDemo"
import ExtensionsHeader from "./ExtensionsHeader"

const Extensions = () => {
  const [active, setActive] = useState('Productivity');
  return (
    <div className="w-full min-h-screen flex-center flex-col ">
        <ExtensionsHeader extension={active} selectExtension={setActive}   />
        <CarouselDemo  extension={active}  />
    </div>
  )
}

export default Extensions


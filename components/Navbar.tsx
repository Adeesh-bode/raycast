import Link from "next/link";

import { NavLinks } from "@/constants";
import DownloadButton from "./DownloadButton";
import Image from "next/image";

import logo from "@/assets/raycast_logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-6 z-50 w-full  h-20  flex-center">
        <div 
        className="bg-[#131313] flex justify-between items-center gap-40 px-7 py-5 mx-0 rounded-xl border border-y-2 border-neutral-800  border-l-1 border-r-1 ">
        <div className="flex justify-between items-center gap-2">
            <Image src={logo} width={30} height={30} alt="raycast logo" />
            <span>Raycast</span>
        </div>

        <nav className="flex justify-between gap-8  ">
            {
                NavLinks.map(({ label, route }) => (
                    <Link key={label} href={route} className="text-gray-400 hover:text-white text-sm font-semibold ">
                        {label}
                    </Link>
                ))
            }
        </nav>
        
        <div className="h-fit flex justify-between items-center gap-7 ">
            <span className="text-gray-400 text-sm font-semibold hover:text-white">Log in</span>
            <DownloadButton />
        </div>
        </div>    
    </div>
  )
}

export default Navbar;
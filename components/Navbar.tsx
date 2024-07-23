import Link from "next/link";
import { FaApple } from "react-icons/fa";

import { NavLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="fixed top-6  w-full  h-16  flex-center">
        <div className="bg-[#0e0f10] flex justify-between items-center gap-40 px-7 py-5 mx-12 rounded-xl border border-y-2 border-neutral-900  border-l-1 border-r-1 ">
        <div>
            <span></span>
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
            <button className="bg-white rounded-md flex justify-between items-center gap-2 py-1 px-2 ">
                <FaApple  color="black" className="flex-center" />
                <span className="text-black"> Download </span>
            </button>
        </div>
        </div>    
    </div>
  )
}

export default Navbar
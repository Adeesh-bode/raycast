'use client'
import Link from "next/link";
import { NavLinks } from "@/constants";
import DownloadButton from "./DownloadButton";
import Image from "next/image";
import logo from "@/assets/raycast_logo.png";
import { useState } from "react";
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {

    const [showLink, setShowLink] = useState(true);

    return (
        <div className="  sticky top-6 z-50 w-full h-20  flex flex-col gap-2  md:flex-center">
            <div className="bg-[#131313]/90 flex flex-col justify-between gap-2 mx-5 md:mx-32 rounded-xl border border-y-2 border-neutral-800 border-l-1 border-r-1">
                <div className="flex justify-between items-center  px-3 py-2 md:px-5 md:py-3 ">

                <div className="flex justify-between items-center">
                    <Image src={logo} width={50} height={50} alt="raycast logo" />
                    <span>Raycast</span>
                </div>
                <nav className="justify-between gap-8  hidden md:flex  ">
                    {NavLinks.map(({ label, route }) => (
                        <Link key={label} href={route} className="text-gray-400 hover:text-white text-sm font-semibold">
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden  h-fit md:flex justify-between items-center gap-7">
                    <span className="  text-gray-400 text-sm font-semibold hover:text-white">Log in</span>
                    <DownloadButton />
                </div>

                <button onClick={() => setShowLink(!showLink)}
                    className='nav-toggle  text-2xl bg-transparent cursor-pointer  md:hidden'>
                        {
                            showLink? 
                            <IoMenu size='40px' />
                            :
                            <RxCross1 size='40px' />
                        }

                </button>

            </div>
            {
                !showLink &&
                <div className="flex flex-col justify-start gap-4 bg-neutral-900/25 px-5 " >
                <nav className=" flex flex-col justify-between gap-2 bg-neutral-900/25 border-b-2 border-gray-600 mb-4 ">
                {NavLinks.map(({ label, route }) => (
                    <Link key={label} href={route} className="text-gray-400 hover:text-white text-sm font-semibold">
                        {label}
                    </Link>
                ))}
                </nav>
                <div className="text-left text-gray-400 hover:text-white text-sm font-semibold">
                    Login
                </div>
                </div>
            }
            </div>
        </div>
    );
}

export default Navbar;

import Link from "next/link";
import { FaApple } from "react-icons/fa";

import { NavLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="fixed top-20 w-auto  h-20 bg-gray-700 flex mx-16 ">
        <div>
            <span></span>
            <span>Raycast</span>
        </div>

        <nav>
            {
                NavLinks.map(({ label, route }) => (
                    <Link key={label} href={route}>
                        {label}
                    </Link>
                ))
            }
        </nav>

        <div>
            <span>Sign In</span>
            <button>
                <FaApple />
                <span> Download </span>
            </button>
        </div>
    </div>
  )
}

export default Navbar
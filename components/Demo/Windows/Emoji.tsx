import { ReactTyped } from 'react-typed';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";

import { LiaHeartSolid } from "react-icons/lia";
import Image from 'next/image';


const Emoji = () => {

  return (
    <div className="size-full flex flex-col justify-start items-center " >
        <div className="w-full px-5 py-3 text-white border-b-2 border-gray-600  " >
          <ReactTyped strings={["Search Emoji & Symbols..."]} typeSpeed={150} loop />
        </div>
        <div className='w-full h-full p-3 '>
            <div className="size-full bg-gray-500/25 p-3 flex flex-col justify-start items-start gap-1" >
              <div>Pinned</div>
              <div className='flex justify-start items-center gap-1'>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/emoji/40/red-heart.png" alt="red-heart"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/emoji/40/waving-hand-emoji.png" alt="waving-hand-emoji"/>                  
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/fluency/40/facebook-like.png" alt="facebook-like"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/emoji/40/rocket-emji.png" alt="rocket-emji"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/matisse/140/confetti.png" alt="confetti"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="40" height="40" src="https://img.icons8.com/emoji/40/folded-hands-emoji-1.png" alt="folded-hands-emoji-1"/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Emoji
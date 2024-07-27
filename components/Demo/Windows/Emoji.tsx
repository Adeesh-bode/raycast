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
        <div className="w-full px-5 py-1 text-white border-b-2 border-neutral-500  " >
          <ReactTyped strings={["Search Emoji & Symbols..."]} typeSpeed={150} loop />
        </div>
        <div className='w-full p-3 flex flex-col justify-start  '>
            <div className="bg-gray-500/25 p-3 flex flex-col justify-start items-start gap-1" >
              <div className='text-base' >Pinned</div>
              <div className='flex justify-start items-center gap-2' >
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
            <div className="w-full h-auto bg-gray-500/25 p-3 flex flex-col justify-start items-start gap-1   " >
              <div className='text-base' >Smileys & People</div>
              <div className='w-full h-52 overflow-hidden flex justify-start items-center flex-wrap gap-2'>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/grinning-face-with-smiling-eyes--v2.png" alt="grinning-face-with-smiling-eyes--v2"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/grinning-face-emoji.png" alt="grinning-face-emoji"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/fluency/48/lol.png" alt="lol"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/grinning-face-with-sweat--v2.png" alt="grinning-face-with-sweat--v2"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/rolling-on-the-floor-laughing.png" alt="rolling-on-the-floor-laughing"/></div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/face-with-tears-of-joy.png" alt="face-with-tears-of-joy"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/grinning-squinting-face--v2.png" alt="grinning-squinting-face--v2"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/upside-down-face.png" alt="upside-down-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/rectangle.png" alt="rectangle"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/face-with-rolling-eyes.png" alt="face-with-rolling-eyes"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/winking-face.png" alt="winking-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/sleeping-face.png" alt="sleeping-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/face-with-peeking-eye-emoji.png" alt="face-with-peeking-eye-emoji"/>   
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/winking-face-with-tongue.png" alt="winking-face-with-tongue"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/smiling-face-with-heart-eyes.png" alt="smiling-face-with-heart-eyes"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/face-with-steam-from-nose.png" alt="face-with-steam-from-nose"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/face-without-mouth.png" alt="face-without-mouth"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/clown-face.png" alt="clown-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/yawning-face.png" alt="yawning-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/shushing-face.png" alt="shushing-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/unamused-face.png" alt="unamused-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/pleading-face.png" alt="pleading-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/thinking-face.png" alt="thinking-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/expressionless-face.png" alt="expressionless-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/hushed-face.png" alt="hushed-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <Image width="48" height="48" src="https://img.icons8.com/emoji/48/woozy-face.png" alt="woozy-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <img width="48" height="48" src="https://img.icons8.com/emoji/48/money-mouth-face.png" alt="money-mouth-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                  <img width="48" height="48" src="https://img.icons8.com/emoji/48/zipper-mouth-face.png" alt="zipper-mouth-face"/>
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                
                </div>
                <div className='bg-gray-300/35 p-3 rounded-md' >
                
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Emoji
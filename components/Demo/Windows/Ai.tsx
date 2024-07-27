import { ReactTyped } from "react-typed";

const Ai = () => {
  return (
    <div className="size-full flex flex-col justify-start items-center gap-2 p-1" >
        <div className="w-full py-1 px-2 text-white border-b-2 border-gray-600  " >
            <ReactTyped strings={["Which note taking app support markdown?"]} typeSpeed={150} loop />
        </div>
        <div className='w-full bg-gray-500/35 h-full rounded-md py-1 px-3 flex flex-col justify-start  gap-4 text-base mt-1 '>
            
            <div className="w-full  " >
              Several note-taking apps support Markdown for formatting text. Here are some popular ones:
            </div>
            
            <div>
              <h2>Markdown Editors and Tools</h2>
              <ol>
                <li>Obsidian - Local folder-based Markdown knowledge base.</li>
                <li>Notion - Hybrid workspace with Markdown support.</li>
                <li>Typora - Minimal editor with live Markdown preview.</li>
                <li>Bear - Markdown writing app for Mac and iOS.</li>
                <li>Joplin - Open-source, notebook-organized Markdown notes.</li>
                <li>Zettir - Markdown editor for researchers with citation support.</li>
                <li>Boost Note - Developer-focused Markdown editor with code highlighting.</li>
              </ol>
            </div>

            <div className="w-full text-neutral-300 " > 
              References
            </div>
            
            <div className='flex justify-start items-center gap-2'>
            
            <div className="seperate" >
                <span className="p-2 bg-gray-200/25 text-center" >1</span>
                <span className="py-2 px-3 bg-gray-300/25 text-center" >Notion</span>
            </div>
            <div className="seperate" >
                <span className="p-2 bg-gray-200/25 text-center" >2</span>
                <span className="py-2 px-3 bg-gray-300/25 text-center" >Obsidian</span>
            </div>
            <div className="seperate" >
                <span className="p-2 bg-gray-200/25   text-center" >3</span>
                <span className="py-2 px-3 bg-gray-300/25  text-center" >+10 more</span>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Ai


// import { ReactTyped } from "react-typed";

// const Ai = () => {
//   return (
//     <div className="size-full flex flex-col justify-start items-center " >
//         <div className="w-full px-5 py-3 text-white border-b-2 border-gray-600  " >
//             <ReactTyped strings={["Which note taking app support markdown?"]} typeSpeed={150} loop />
//         </div>
//         <div className='w-full h-full p-3 '>
//             <div className="size-full bg-gray-500/25 p-3 text-left flex flex-col justify-between gap-4 " >
//                 <ReactTyped strings={["Several note-taking apps support Markdown for formatting text. Here are some popular ones:"]} typeSpeed={150} loop />
//                 <ReactTyped strings={[`
//                     1. Obsidian-Local folder-based Markdown knowledge base.

// 2. Notion-Hybrid workspace with Markdown support.

// 3. Typora-Minimal editor with live Markdown preview.

// 4. Bear-Markdown writing app for Mac and IOS.

// 5. Joplin-Open-source, notebook-organized Markdown notes.

// 6. Zettir - Markdown editor for researchers with citation support.

// 7. Boost Note - Developer-focused Markdown editor with code highlighting.
// `]} typeSpeed={500} loop />
                
//                 <ReactTyped strings={["References"]} typeSpeed={150} loop />
//                 <div className='seperate gap-2'>
//                     <div className="seperate" >
//                         <span className="p-2 bg-gray-200/25 text-center" >1</span>
//                         <span className="py-2 px-3 bg-gray-300/25 text-center" >Notion</span>
//                     </div>
//                     <div className="seperate" >
//                         <span className="p-2 bg-gray-200/25 text-center" >2</span>
//                         <span className="py-2 px-3 bg-gray-300/25 text-center" >Obsidian</span>
//                     </div>
//                     <div className="seperate" >
//                         <span className="p-2 bg-gray-200/25   text-center" >3</span>
//                         <span className="py-2 px-3 bg-gray-300/25  text-center" >+10 more</span>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Ai
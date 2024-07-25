
interface windowProps {
    currentWindow : string,
}

const Window = ({ currentWindow } : windowProps ) => {
  return (
    <div className="flex-center w-full h-full red-bg  py-12 ">
        <div className="flex-center w-3/5 p-2 h-full bg-black/25 backdrop-blur-sm " >
            { currentWindow }
        </div>
    </div>
  )
}

export default Window;
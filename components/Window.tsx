
interface windowProps {
    currentWindow : string,
}

const Window = ({ currentWindow } : windowProps ) => {
  return (
    <div className="flex-center w-full h-full ">
        <div className="flex-center w-2/3  " >
            { currentWindow }
        </div>
    </div>
  )
}

export default Window;
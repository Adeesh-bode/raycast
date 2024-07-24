import { FaApple } from "react-icons/fa";

const DownloadButton = () => {
  return (
    <button className="bg-white rounded-md flex justify-between items-center gap-2 py-1 px-2 ">
        <FaApple  color="black" className="flex-center" />
        <span className="text-gray-600 text-sm font-medium"> Download </span>
    </button>
  )
}

export default DownloadButton
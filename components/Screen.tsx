import ScreenNavbar from "./ScreenNavbar"

const Screen = () => {
  return (
    <div className="w-full p-[6px] bg-gray-700/20 rounded-md screen-shadow ">
      <div className="w-full bg-black rounded-md">
        <ScreenNavbar />

      </div>
    </div>
  )
}

export default Screen
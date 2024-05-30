import brandLogo from '../assets/abstract-logo.svg'
import { FaSearch } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";


function Header() {
  return (
    <div className="text-white bg-black h-[88px] flex items-center px-4 md:px-7">
      <div className="flex justify-between w-full md:w-[90%] m-auto">
        <div className="flex items-center text-lg leading-8 sm:text-2xl">
          <img src={brandLogo} className='pr-1 sm:pr-3'/>
          <div className="pl-1 border-l-2 sm:pl-3 text-nowrap">Help center</div>
        </div>
        <div className='flex self-center gap-1 sm:gap-4'>
          <button className='hidden px-6 py-2 text-2xl border rounded-lg lg:block'>Submit a request</button>
          <button className='hidden lg:block text-2xl bg-[#4C5FD4] hover:bg-white hover:text-black transition duration-300 px-8 py-2 rounded-lg'>Sign in</button>
          <FaSearch className='lg:hidden' size={25}/>
          <RiMenuLine className='lg:hidden' size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Header
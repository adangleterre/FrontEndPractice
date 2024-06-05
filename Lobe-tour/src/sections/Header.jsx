import logo from '../assets/Logotype.svg'
import { IoIosMenu } from "react-icons/io";

function Header() {
  return (
    <header className='flex items-center justify-between h-20 mx-5 lg:mx-32'>
      <a href="#"><img src={logo} className="w-auto h-5" alt="logo de Lobe" /></a> 
      <nav className='md:flex gap-12 text-lg font-medium text-[#767676] hidden'>
        <a href="#" className='hover:text-[#333] transition'>Overwiew</a>
        <a href="#" className='hover:text-[#333] transition'>Examples</a>
        <a href="#" className='hover:text-[#333] transition'>Tour</a>
        <a href="#" className='hover:text-[#333] transition'>Blog</a>
        <a href="#" className='hover:text-[#333] transition'>Help</a>
      </nav>
      <button className='hidden px-5 py-2 text-lg font-bold text-white transition duration-300 rounded-full md:block bg-primary-lobe hover:scale-105'>Download</button>
      <button className='rounded-full md:hidden bg-[#eef0f2] p-2'><IoIosMenu size={25} /></button>    
    </header>
  )
}

export default Header
import logo from '../assets/Logotype.svg'
import { IoIosMenu } from "react-icons/io";
import HeaderLink from '../components/HeaderLink';

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white bg-opacity-70'>
      <div className='flex items-center justify-between h-20 mx-5 lg:mx-32 backdrop-blur-[20px] '>
      
        <a href="#"><img src={logo} className="w-auto h-5" alt="logo de Lobe" /></a>
        <nav className='hidden gap-12 text-lg font-medium md:flex'>
          <HeaderLink linkText={"Overview"} />
          <HeaderLink linkText={"Examples"} />
          <HeaderLink linkText={"Tour"} />
          <HeaderLink linkText={"Blog"} />
          <HeaderLink linkText={"Help"} />
        </nav>
        <button className='hidden px-5 py-2 md:block'>Download</button>
        <button className='rounded-full md:hidden bg-[#eef0f2] p-2'><IoIosMenu size={25} /></button>    
      </div>
    </header>
  )
}

export default Header
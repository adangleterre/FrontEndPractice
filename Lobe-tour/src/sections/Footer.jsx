import logo from '../assets/Logotype.svg'
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-row flex-wrap items-center sm:text-start text-center sm:items-start 2xl:text-xl sm:max-w-[892px] sm:m-auto sm:py-14 sm:px-20 lg:max-w-[1072px] xl:max-w-[1314px] border-t-[0.5px]">
      <div className='w-6/12 mb-16 sm:w-2/12'>
        <p className='mb-4 font-bold sm:mb-8'>About</p>
        <a href="#"><p className='mb-4 sm:mb-6'>Download</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Overview</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Examples</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Blog</p></a>
      </div>
      <div className='w-6/12 mb-16 sm:w-2/12'>
        <p className='mb-4 font-bold sm:mb-8'>General</p>
        <a href="#"><p className='mb-4 sm:mb-6'>Notice</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>License</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Press Inquiry</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Press Images</p></a>
      </div>
      <div className='w-6/12 mb-16 sm:w-2/12'>
        <p className='mb-4 font-bold sm:mb-8'>Ressources</p>
        <a href="#"><p className='mb-4 sm:mb-6'>Help</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Tour</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Contact</p></a>
        <a href="#"><p className='mb-4 sm:mb-6'>Privacy</p></a>
      </div>
      <div className='flex flex-col items-center w-6/12 gap-4 mb-16 sm:w-2/12 lg:flex-row'>
        <div className='flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-lobe'> <TbMessageCircle2Filled size={20} /> </div>
        <div className='flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-lobe'> <FaTwitter size={20} /></div>
        <div className='flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-lobe'> <FaYoutube size={20} /></div>
      </div> 
      <div className='items-center w-full sm:w-4/12 sm:order-first'>
        <div className='flex justify-center sm:justify-start'>
          <img src={logo} alt="logo de Lobe" className='h-[18px] mb-10' />
        </div>
        <p className='mb-6'>A product by Microsoft.</p>
        <p className='mb-6'>All rights reserved.</p>
        <p className='mb-6'>© Microsoft 2021</p>
      </div>
    </footer>
  )
}

export default Footer
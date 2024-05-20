import brandLogo from '../assets/abstract-logo.svg'

function Header() {
  return (
    <div className="text-white bg-black h-[88px] flex items-center px-7">
      <div className="w-[90%] flex justify-between m-auto">
        <div className="flex items-center text-2xl leading-8">
          <img src={brandLogo} className='pr-3'/>
          <div className="pl-3 border-l-2 text-nowrap">Help center</div>
        </div>
        <div>
          <button className='px-6 py-2 ml-4 text-2xl border rounded-lg'>Submit a request</button>
          <button className='ml-4 text-2xl bg-[#4C5FD4] hover:bg-white hover:text-black transition duration-300 px-8 py-2 rounded-lg'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Header
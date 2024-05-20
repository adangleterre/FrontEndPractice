import brandLogo from '../assets/abstract-logo.svg'

function Header() {
  return (
    <div className="text-white bg-black h-[88px] flex items-center">
      <div className="w-[90%] flex justify-between m-auto">
        <div className="flex items-center text-2xl leading-8">
          <img src={brandLogo} className='pr-3'/>
          <div className="pl-3 border-l-2 text-nowrap">Help center</div>
        </div>
      </div>
    </div>
  )
}

export default Header
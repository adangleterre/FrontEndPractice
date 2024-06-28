import Logo from '/images/Starbucks_Logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";

export function Header() {
    return (
        <>
            <header className="h-[72px] md:h-20 xl:h-24">
                <nav className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-4">
                    <div className="flex items-center">
                        <img src={Logo} className="max-h-10 md:max-h-12 top-2/4 right-full mr-6 lg:mr-10" alt="Logo starbucks"/>
                        <ul className="hidden md:flex gap-5 text-[15px] tracking-widest font-bold">
                            <li><a href="#" className="hover:text-starbucks-green">MENU</a></li>
                            <li><a href="#" className="hover:text-starbucks-green border-b-[6px] border-starbucks-green pb-6 xl:pb-8">REWARDS</a></li>
                            <li><a href="#" className="hover:text-starbucks-green">GIFT CARDS</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-5">
                        <div className="flex flex-row items-center gap-2 font-semibold text-sm hover:text-starbucks-green mr-10">
                            <IoLocationSharp size={20}/>
                            <a href="#">Find a store</a>
                        </div>
                        <button className="border-black font-semibold text-sm">Sign in</button>
                        <button className="border-black bg-black text-white font-semibold text-sm">Join now</button>
                    </div>

                    <div className="md:hidden">
                        <RxHamburgerMenu size={25} color={"#00000094"}/>
                    </div>
                </nav>
            </header>
            <div className="text-white bg-[#1F3832] flex flex-row items-center justify-between px-4 h-[50px] shadow-lg sticky top-0">
                <p className="uppercase text-[13px] md:text-sm font-bold tracking-wider md:pl-24 lg:pl-32 lg:pl-72">Starbucks® rewards</p>
                <button className="border-white text-white md:hidden">Join the app</button>
            </div>
        </>

    );
}

export default Header
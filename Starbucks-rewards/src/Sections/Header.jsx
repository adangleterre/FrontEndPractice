import Logo from '../assets/Starbucks_Logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";

export function Header() {
    return (
        <>
            <header className="h-16 sm:h-[76px] md:h-20 xl:h-24">
                <nav className="flex justify-between items-center h-full max-w-7xl mx-auto px-4">
                    <div className="flex items-center">
                        <img src={Logo} className="max-h-11 top-2/4 right-full mr-6 lg:mr-10" alt="Logo starbucks"/>
                        <ul className="hidden md:flex gap-5 text-xl font-bold">
                            <li><a href="#" className="hover:text-starbucks-green">MENU</a></li>
                            <li><a href="#" className="hover:text-starbucks-green">REWARDS</a></li>
                            <li><a href="#" className="hover:text-starbucks-green">GIFT CARDS</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-5">
                        <div className="flex flex-row items-center gap-2 font-bold hover:text-starbucks-green mr-10">
                            <IoLocationSharp size={20}/>
                            <a href="#">Find a store</a>
                        </div>
                        <button className="border-black">Sign in</button>
                        <button className="border-black bg-black text-white">Join now</button>
                    </div>

                    <div className="md:hidden">
                        <RxHamburgerMenu size={25} color={"#00000094"}/>
                    </div>
                </nav>
            </header>
            <div className="text-white bg-[#1F3832] flex flex-row items-center justify-between px-4 h-[50px] shadow-lg">
                <p className="uppercase text-[13px] font-bold tracking-wider">Starbucks® rewards</p>
                <button className="border-white text-white">Join the app</button>
            </div>
        </>

    );
}

export default Header
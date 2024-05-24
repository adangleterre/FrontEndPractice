function Hero() {
    return (
        <div className="bg-[#DBDBF1] flex flex-col items-center pt-20 pb-28">
            <div className="text-[40px] md:text-[50px] lg:text-[80px] tracking-tighter leading-relaxed mb-12 lg:mb-4">
                How can we help?
            </div>
            <div className="w-full max-w-[720px]">
                <form>
                    <input type="search" placeholder="Search" className="p-4 rounded-[4px] text-xl shadow-lg w-full focus:outline-none border border-black focus:border-blue-700 transition" />
                </form>
            </div>
        </div>
    )
}

export default Hero
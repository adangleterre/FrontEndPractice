export function Hero() {


    return (
        <section className='flex justify-center md:justify-start md:items-center bg-covers-green bg-hero-mobile md:bg-hero-desktop bg-contain md:bg-cover bg-no-repeat bg-right md:bg-bottom right-0 h-[70vh] md:h-[80vh]'>
            <div className='w-full'>
                <div className='flex flex-col max-w-[1440px] m-auto items-center md:items-start text-center md:text-left py-8 px-4 md:px-6'>
                    <h2 className='uppercase font-semibold text-[28px] md:text-4xl'>Free coffee <br/> is a tap away</h2>
                    <p className='mt-4 md:text-[19px]'>Join now to start earning Rewards.</p>
                    <button className='bg-starbucks-green text-white px-4 mt-8'>Join in the app</button>
                    <a href="#" className='underline mt-4 md:hidden'>Or join online</a>
                    <p className='mt-4 hidden md:block text-[19px]'>Or <a href="#" className='underline hover:no-underline'>join in the app</a> for the best experience</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
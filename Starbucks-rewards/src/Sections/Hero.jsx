export function Hero() {
    return (
        <section className='md:pb-16 bg-covers-green bg-hero-mobile md:bg-hero-desktop bg-contain md:bg-cover bg-no-repeat bg-right md:bg-bottom right-0 pb-[72%]'>
            <div className='flex flex-col items-center text-center max-w-[400px] m-auto py-8 px-4'>
                <h2 className='uppercase font-semibold text-[28px]'>Free coffee <br/> is a tap away</h2>
                <p className='mt-4'>Join now to start earning Rewards.</p>
                <button className='bg-starbucks-green text-white px-4 mt-8'>Join in the app</button>
                <a href="#" className='underline mt-4'>Or join online</a>
            </div>
        </section>
    )
}

export default Hero
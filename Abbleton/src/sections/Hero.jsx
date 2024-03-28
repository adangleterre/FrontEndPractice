function Hero() {
    return (
        <>
            <div className="flex gap-6 px-5 py-5 md:px-10">
                <a href="#" className="text-sm font-medium lg:text-base text-accent">About</a>
                <a href="#" className="text-sm font-medium lg:text-base">Jobs</a>
            </div>

            <div className='relative flex items-center justify-center w-10/12 h-screen mx-auto bg-center bg-cover bg-hero max-h-[80vh]'>
                <div className='text-6xl font-medium sm:text-7xl md:text-9xl text-accent font-futura'>Ableton</div>
            </div>
        </>
    )
}

export default Hero
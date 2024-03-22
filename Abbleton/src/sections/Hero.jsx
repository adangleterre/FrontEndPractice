import ableton_header from '../assets/images/hero-header.jpg'

function Hero() {
    return (
        <div className='mb-32'>
            <div className="flex gap-6 px-5 py-5 md:px-10">
                <a href="#" className="text-accent">About</a>
                <a href="#">Jobs</a>
            </div>

            <div className='relative flex items-center justify-center w-10/12 h-screen mx-auto bg-center bg-cover bg-hero max-h-[80vh]'>
                <div className='text-6xl font-medium sm:text-7xl md:text-9xl text-accent font-futura'>Ableton</div>
            </div>
        </div>
    )
}

export default Hero
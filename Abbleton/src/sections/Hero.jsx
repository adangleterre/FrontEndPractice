import ableton_header from '../assets/images/hero-header.jpg'

function Hero() {
    return (
        <>
            <div className="flex gap-6 px-10 py-5">
                <a href="#" className="text-accent">About</a>
                <a href="#">Jobs</a>
            </div>

            <div className='relative flex items-center justify-center h-screen bg-center bg-cover bg-hero'>
                <div className='font-medium text-9xl text-accent font-futura'>Ableton</div>
            </div>
        </>
    )
}

export default Hero
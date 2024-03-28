import CompositionPicture from '../assets/images/music-sampling.jpg'
import CulturePicture from '../assets/images/music-culture.jpg'
import TitleSection from '../components/TitleSection'

function AboutUs() {
    return (
        <div>
            <TitleSection
                title={<>We make <span className='text-secondary'>Live</span>, <span className='text-secondary'>Push</span>, <span className='text-secondary'>Note</span> and <span className='text-secondary'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</>}
                subtext="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
            />
            <div className='relative w-full h-7/12'>
                <div className='absolute right-0 flex justify-end w-7/12 h-full bg-[#FBFFA7]' />
                <div className='relative flex items-center z-1 justify-evenly'>
                    <div className='max-w-[40%]'>
                        <img src={CompositionPicture} className='object-contain w-full h-full' alt="" />
                    </div>
                    <div className='max-w-[40%]'>
                        <img src={CulturePicture} className='object-contain w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default AboutUs
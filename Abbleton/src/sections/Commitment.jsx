import TitleSection from "../components/TitleSection"
import CompositionPicture from '../assets/images/music-sampling.jpg'
import CulturePicture from '../assets/images/music-culture.jpg'

function Commitment() {
    return (
        <div>
            <TitleSection
                title="We’re passionate about what we do, but we’re equally passionate about improving who we are."
                subtext={<div>
                    <p className="mb-4 font-normal">We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
                    <p className="font-normal">Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
                </div>}
            />
            <div className='relative w-full h-7/12 py-[10vw] lg:py-[8vw] flex items-center'>
                <div className='absolute m-auto left-0 right-0 flex w-8/12 h-full bg-[#D5B3FF]' />
                <div className='relative flex justify-end z-1'>
                    <div className='flex justify-center max-w'>
                        <img src={CulturePicture} className='object-contain w-7/12 h-full' alt="" />
                    </div>
                    <div className='max-w-[40%]'>
                        <img src={CompositionPicture} className='object-contain w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commitment
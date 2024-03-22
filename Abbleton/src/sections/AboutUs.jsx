import React from 'react'
import CompositionPicture from '../assets/images/music-sampling.jpg'
import CulturePicture from '../assets/images/music-culture.jpg'

function AboutUs() {
    return (
        <div>
            <div className='w-10/12 mx-auto mb-32 lg:w-7/12'>
                <h1 className='mb-3'>We make <span className='text-secondary'>Live</span>, <span className='text-secondary'>Push</span>, <span className='text-secondary'>Note</span> and <span className='text-secondary'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                <p className='font-normal'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
            <div className='relative w-full h-7/12'> 
                <div className='absolute right-0 flex justify-end w-7/12 h-full bg-[#FBFFA7]' />
                <div className='relative z-50 flex items-center justify-evenly'>
                    <img src={CompositionPicture} className='object-cover w-[660px]' alt="" />
                    <img src={CulturePicture} className='object-cover w-[530px] h-[400px]' alt="" />
                </div>
            </div>
        </ div>
    )
}

export default AboutUs
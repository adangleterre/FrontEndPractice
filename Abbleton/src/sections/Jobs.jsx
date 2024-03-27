import React from 'react'
import WorkingPlace from '../assets/images/working-space.jpg'
import TitleSection from '../components/TitleSection'

function Jobs() {
    return (
        <>
            <TitleSection
                title="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
                subtext="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
            />

            <div className='flex flex-col w-10/12 mx-auto xl:flex-row'>
                <div className='xl:w-6/12'>
                    <img src={WorkingPlace} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='bg-[#B1C5FF] p-[8vw] xl:p-32 xl:w-6/12 content-center'>
                    <p className='mb-5 text-xl font-medium lg:text-3xl'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p>
                    <a className='text-xl font-medium text-secondary' href="#">See latest jobs</a>
                </div>
            </div>
        </>
    )
}

export default Jobs
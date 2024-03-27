import React from 'react'
import TitleSection from '../components/TitleSection'
import MusicComputing from '../assets/images/music-computing.jpg'

function Culture() {
    return (
        <div>
            <TitleSection
                title="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
                subtext="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
            />
            <div >
                <img className='w-10/12 mx-auto bg-contain' src={MusicComputing} alt="" />
            </div>
        </div>
    )
}

export default Culture
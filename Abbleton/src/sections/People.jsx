import TitleSection from "../components/TitleSection"
import MusicCreation from "../assets/images/music-creation.jpg"
import DrawingPeople from "../assets/images/drawing-people.jpg"
import AbletonSign from "../assets/images/ableton-sign.jpg"


function People() {
    return (
        <div>
            <TitleSection
                title="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
                subtext="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
            />
            <div className='relative flex items-center py-[10vw] lg:py-[8vw]'>
                <div className='absolute left-0 flex w-7/12 h-full bg-[#B6FFC0]' />
                <div className='relative z-50 flex items-center w-full justify-evenly'>
                    <div className='flex flex-col max-w-[30%]'>
                        <img src={DrawingPeople} className='object-contain w-full h-full' alt="" />
                        <img src={AbletonSign} className='object-contain w-full h-full mt-[8vw]' alt="" />
                    </div>
                    <div className='max-w-[40%]'>
                        <img src={MusicCreation} className='object-contain w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People
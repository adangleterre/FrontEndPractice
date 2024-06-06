import videoThumbnail from '../assets/video-thumbnail.png'

function Hero() {
  return (
    <section className="flex flex-col items-center px-8 py-10 pb-24 cursor-default xl:pt-16 max-w-[1272px] m-auto">
      <h1 className="mb-2 sm:mb-3 text-[38px] sm:text-[56px] xl:text-[64px] font-bold leading-10 sm:leading-none">Lobe <span className="text-primary-lobe">Tour</span></h1>
      <p className="max-w-[420px] sm:max-w-[550px] xl:max-w-[600px] text-center text-lg sm:text-2xl xl:text-[26px] leading-6 mb-10">Build your first machine learning model in ten minutes. No code or experience required.</p>
      <div className='mt-[22px] sm:mt-6 sm:px-[5%] cursor-pointer hover:scale-105 transition duration-500'>
        <img src={videoThumbnail} alt="thumbnail for a demo video" className='transition-shadow duration-500 rounded-3xl hover:shadow-thumbnail'/>
      </div>
    </section>
  )
}

export default Hero
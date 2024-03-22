import React from 'react'
import YouTubeEmbed from '../components/YoutubeEmbed.jsx'

function TestimonialVideo() {
  return (
    <div className='w-10/12 mx-auto lg:w-7/12'>
      <div className='mb-32'>
        <h1 className='mb-5'>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
        <p className='font-normal'>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
      </div>
      <YouTubeEmbed embedId={'9SbnhgjeyXA'} />
      <p className='p-3 text-sm'>Why Ableton - Juanpe Bolivar</p>
    </div>
  )
}

export default TestimonialVideo
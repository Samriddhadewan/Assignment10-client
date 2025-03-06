import React from 'react'
import Slider from './Slider'
import RunningCampaign from './RunningCampaign'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <div className='mt-5'>
      <section className=''>
      <Slider></Slider>
      <RunningCampaign></RunningCampaign>
      <Testimonials></Testimonials>
      </section>
    </div>
  )
}

export default HomePage
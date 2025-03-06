import React from 'react'
import Slider from './Slider'
import RunningCampaign from './RunningCampaign'
import Testimonials from './Testimonials'
import Milestones from './Milestones'

const HomePage = () => {
  return (
    <div className='mt-5'>
      <section className=''>
      <Slider></Slider>
      <RunningCampaign></RunningCampaign>
      <Testimonials></Testimonials>
      <Milestones></Milestones>
      </section>
    </div>
  )
}

export default HomePage
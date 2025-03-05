import React from 'react'
import Slider from './Slider'
import RunningCampaign from './RunningCampaign'

const HomePage = () => {
  return (
    <div className='mt-5'>
      <section className=''>
      <Slider></Slider>
      <RunningCampaign></RunningCampaign>
      </section>
    </div>
  )
}

export default HomePage
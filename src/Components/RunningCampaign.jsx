import React, { useEffect, useState } from 'react'
import RunningCampaignDetails from './RunningCampaignDetails';

const RunningCampaign = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myItems`)
        .then(res=> res.json())
        .then(result => setCampaigns(result));
    } ,[])

    console.log(campaigns);
  return (
    <div className='mt-8 text-center font-semibold mb-14'>
        <h1 className='text-3xl'>Running Campaigns</h1>
        <div className='grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-[1140px] mx-auto mt-10'>
            {
                campaigns.map(campaign=> <RunningCampaignDetails 
                key={campaign?._key} 
                campaign={campaign}>
                </RunningCampaignDetails>)
            }
        </div>


    </div>
  )
}

export default RunningCampaign
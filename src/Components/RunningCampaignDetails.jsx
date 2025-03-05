import React from 'react'
import { Link } from 'react-router-dom';

const RunningCampaignDetails = ({campaign}) => {
    const {thumbnail, title,description,campaignType,minimumAmount,_id} = campaign;
    return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <img
        src={thumbnail}
        alt="Shoes"
        className="rounded-xl w-full h-[250px] object-cover" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p className='text-base font-normal text-gray-500'>{description}</p>
      <p className='text-base  text-gray-500'>{campaignType}</p>
      <p className='text-base  '>Minimum Amount to donate : {minimumAmount}$</p>
      <div className="card-actions">
        <Link to={`/campaigns/${_id}`}>
        <button className="btn bg-[#0E7A81] text-white">Donate Now</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default RunningCampaignDetails
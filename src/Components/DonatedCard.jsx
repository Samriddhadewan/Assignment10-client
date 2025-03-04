import React from 'react'

const DonatedCard = ({data}) => {
  const {thumbnail, description,title,userName,campaignType,donatedValue} =data;
    return (
    <div>
        <div className=" bg-base-100 p-4 min-h-[560px]  shadow-sm">
  <figure>
    <img
      className='h-[220px] object-cover'
      src={thumbnail}
      alt="Shoes" />
      
  </figure>
    <div>
    <div className="py-5 flex flex-col justify-between gap-2 ">
    <h2 className="text-[#09080F] font-semibold text-2xl">{title}</h2>
    <p className='text-[#09080F99] text-base'>Description: {description}</p>
    <p className='text-[#09080F99] text-base'>campaign Type: {campaignType}</p>
    <p className='text-[#09080F99] text-base'>Posted by: {userName}</p>
    <p className='text-[#09080F] font-semibold'>You Have Donated <span className='text-[#0E7A81] text-2xl'>{donatedValue}</span> $ on This Campaign</p>

    
  </div>
    </div>
</div>
    </div>
  )
}

export default DonatedCard
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DonatedCard from './DonatedCard';

const MyDonation = () => {
    const datas = useLoaderData();
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center'>total Donation {datas.length}</h1>
        <div className='max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                datas.map(data => <DonatedCard key={data._id}
                data={data}
                ></DonatedCard>)
            }
        </div>
    </div>
  )
}

export default MyDonation
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom'

const MyCampaign = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold'>My campaigns {data.length}</h1>

      <div className='max-w-[1140px] mx-auto'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>description</th>
        <th>Deadline</th>
        <th>Campaign Type</th>
        <th>Actionable</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data.map((campaign, idx) => <>
        <tr key={campaign._id}>
        <th>{idx + 1}</th>
        <td>{campaign?.title}</td>
        <th>{campaign?.description}</th>
        <td>{campaign?.deadline}</td>
        <td>{campaign?.campaignType}</td>
        <td>
          <div className='flex gap-3'>
            <button className='btn btn-info text-xl text-white
            '><MdEdit /></button>
            <button className='btn btn-error text-white text-xl'><AiOutlineDelete />
            </button>
          </div>
        </td>
      </tr>
        </>)
      }
    </tbody>
  </table>
</div>
      </div>

    </div>
  )
}

export default MyCampaign
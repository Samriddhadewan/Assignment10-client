import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const MyCampaign = () => {
  const data = useLoaderData();
  const [myCampaign, setMyCampaign] = useState(data)
  
  const handleDeleteCampaign = (id)=>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 1){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
          const filteredUsers = myCampaign.filter(user => user._id !== id)
          setMyCampaign(filteredUsers);
        })
      }
    });
  }
  
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
        myCampaign.map((campaign, idx) => <>
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
            <button onClick={()=> handleDeleteCampaign(campaign?._id)} className='btn btn-error text-white text-xl'><AiOutlineDelete />
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
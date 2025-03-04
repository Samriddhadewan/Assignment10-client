import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  
  const data = useLoaderData();
  console.log(data);
  const {title, deadline, description:des,campaignType, minimumAmount,thumbnail, _id} = data;
    const [thumbnaill, setThumbnaill] = useState(thumbnail );
    const [updateTitle, setUpdateTitle] = useState(title );
    const [selectedDate, setSelectedDate] = useState(deadline? new Date(deadline) : null);
    const [selectedValue, setSelectedValue] = useState(campaignType);
    const [description, setDescription] = useState(des);
    const [updateMinimum, setUpdateMinimum] = useState(minimumAmount)

    

  const handleUpdateCampaign =(e)=>{
      e.preventDefault();
      const updatedValues = {
        thumbnail : thumbnaill,
        title: updateTitle,
        description: description,
        campaignType: selectedValue,
        deadline: selectedDate.toISOString().split("T")[0],
        minimumAmount: parseInt(updateMinimum)
      }
      fetch(`http://localhost:5000/campaigns/${_id}`, {
        method: "PUT",
        headers: {
          "content-type" : "application/json"
        },
        body:JSON.stringify(updatedValues)
      })
      .then((res)=> res.json())
          .then(data =>{
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Success',
                text: 'Successfully Updated Campaign',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
            setSelectedDate(null);
            setDescription("");
            setSelectedValue("Campaign type");
          })
      
  
    }
  return (
   <div>
         <div className="min-h-[80vh] flex justify-center items-center">
           <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
             <form onSubmit={handleUpdateCampaign} className="">
               <h1 className="text-4xl mb-4 text-center font-bold">
                 Update Campaign :{title}
               </h1>
               <fieldset className="fieldset">
                 <label className="fieldset-label">Thumbnail</label>
                 <input
                  
                  value={thumbnaill}
                  onChange={(e)=> setThumbnaill(e.target.value)}
                   type="text"
                   name="thumbnail"
                   className="input w-full"
                   placeholder="Upload thumbnail"
                 />
                 <label className="fieldset-label">Campaign Title</label>
                 <input
                   value={updateTitle}
                   onChange={(e)=> setUpdateTitle(e.target.value)}
                   type="text"
                   name="title"
                   className="input w-full"
                   placeholder="Enter the name of Campaign"
                 />
                 <select
   
                   required
                   value={selectedValue}
                   onChange={(e)=> setSelectedValue(e.target.value)}
                   className="select w-full my-2"
                 >
                   <option disabled={true}>Campaign type</option>
                   <option>Personal Issue</option>
                   <option>Start Up</option>
                   <option>Business</option>
                   <option>Creative Idea</option>
                 </select>
                 <textarea
                   placeholder="description"
                   className="textarea textarea-sm w-full"
                   value={description}
                   onChange={(e)=> setDescription(e.target.value)}
                 ></textarea>
   
                 <label className="fieldset-label">Minimum Donation Amount</label>
                 <input
                   value={updateMinimum}
                   onChange={(u)=> setUpdateMinimum(u.target.value)}
                   type="number"
                   name="minimum"
                   className="input w-full"
                   placeholder="Enter the minimum Donation Amount"
                 />
   
                 {/* pick a date section  */}
                 <div className="w-full">
                   <label className="block mb-2">Pick a Date:</label>
                   <DatePicker
                     
                     selected={selectedDate}
                     onChange={(date) => setSelectedDate(date)}
                     dateFormat="yyyy-MM-dd"
                     minDate={new Date()} 
                     placeholderText="Click to select a date"
                     className="border border-gray-400 p-2 rounded-md w-full"
                   />
                 </div>
                 <button className="btn bg-[#0E7A81] text-white mt-4">
                   Create New Campaign
                 </button>
               </fieldset>
             </form>
           </div>
         </div>
       </div>
  )
}

export default UpdateCampaign
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const NewCampaign = () => {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Campaign type");
  const [description, setDescription] = useState("");


  const handleNewCampaign =(e)=>{
    e.preventDefault();


    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const minimum = parseInt(form.minimum.value);

    const newCampaign = {
      thumbnail: thumbnail,
      title: title,
      campaignType:selectedValue,
      description,
      minimumAmount: minimum,
      deadline:selectedDate.toISOString().split("T")[0],
      userEmail: user.email,
      userName: user.displayName
    } 
    console.log(newCampaign);
    fetch("http://localhost:5000/campaigns",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCampaign)
    })
    .then((res)=> res.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: 'Successfully Campaign added',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      form.reset();
      setSelectedDate(null);
      setDescription("");
      setSelectedValue("Campaign type");
    })
  }
  return (
    <div>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form onSubmit={handleNewCampaign} className="">
            <h1 className="text-4xl mb-4 text-center font-bold">
              Create New Campaign
            </h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                className="input w-full"
                placeholder="Upload thumbnail"
              />
              <label className="fieldset-label">Campaign Title</label>
              <input
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
  );
};

export default NewCampaign;

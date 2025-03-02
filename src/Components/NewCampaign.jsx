import React from 'react'
import { Link } from 'react-router-dom'

const NewCampaign = () => {
  return (
    <div>
        <div className="min-h-[80vh] flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form  className="">
            <h1 className="text-4xl mb-4 text-center font-bold">Create New Campaign</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter your Email"
              />
              <label className="fieldset-label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter Photo URL"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Enter Password"
              />
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

export default NewCampaign
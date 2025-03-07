import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const allCampaigns = useLoaderData();
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-semibold">
        Total Campaigns{allCampaigns.length}
      </h1>

      {/* table */}
      <div className="max-w-[1140px] min-h-[70vh] mx-auto mt-10 px-3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white bg-[#0E7A81]">
                <th></th>
                <th>Campaign Name</th>
                <th>Campaign type</th>
                <th>Campaign Deadline</th>
                <th>Campaign Added by</th>
                <th>Minimum Amount</th>
                <th>Actionable</th>
              </tr>
            </thead>
            <tbody>
              {allCampaigns.map((cam, idx) => (
                <>
                  <tr key={cam._id}>
                    <th>{idx + 1}.</th>
                    <td>{cam?.title}</td>
                    <td>{cam?.campaignType}</td>
                    <td>{cam?.deadline}</td>
                    <td>{cam?.userName}</td>
                    <td>{cam?.minimumAmount}$</td>
                    <td>
                        <Link to={`/campaigns/${cam._id}`} className="btn w-[110px] bg-[#0E7A81] text-white">
                            See more
                        </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;

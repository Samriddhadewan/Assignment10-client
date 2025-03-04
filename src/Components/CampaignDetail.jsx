import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const CampaignDetail = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  const [error, setError] = useState("");

  const data = useLoaderData();
  const {
    campaignType,
    deadline,
    description,
    thumbnail,
    minimumAmount,
    title,
    userName,
    userEmail,
  } = data;

  const handleDonateButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const donateValue = form.donate.value;
    const intDonateValue = parseInt(donateValue);
    if (intDonateValue < minimumAmount) {
      setError(`minimum donation amount is ${minimumAmount}$`);
      return;
    }

    const newDonation = {
      donatedValue: intDonateValue,
      campaignType,
      deadline,
      description,
      thumbnail,
      minimumAmount,
      title,
      userName,
      userEmail,
      donatedUserEmail:user.email
    };
    fetch(`http://localhost:5000/donation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Donated To the Campaign",
            text: `You have donated ${intDonateValue} $ to This Campaign`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        setError("");
        form.reset();
      });
  };

  return (
    <div className="min-h-[80vh] max-w-[1140px] mx-auto flex flex-col md:flex-row  gap-5  p-3">
      <div className=" rounded-lg flex-1">
        <img src={thumbnail} className="h-full object-cover" alt="" />
      </div>
      <div className="flex-1 flex p-4 items-center  rounded-lg">
        <div className="flex flex-col space-y-3">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-base font-normal text-gray-500">
            <b className="text-black">Title:</b> {description}
          </p>
          <p className="text-xl font-semibold">
            Campaign Type:{" "}
            <span className="text-gray-500 font-normal"> {campaignType}</span>
          </p>
          <p className="text-xl font-semibold">
            Minimum Amount:{" "}
            <span className="text-gray-500 font-normal">{minimumAmount}$</span>
          </p>
          <p className="text-xl font-semibold">
            Last Donating Date:{" "}
            <span className="text-gray-500 font-normal">{deadline}</span>
          </p>
          <p className=" font-semibold text-xl">
            Campaign Added By:{" "}
            <span className="text-gray-500 font-normal">{userName}</span>
          </p>
          <div>
            <div className=" border mt-4 p-7 rounded-xl">
              <h1 className="text-2xl text-center font-semibold">
                Enter the Value You wanna Donate
              </h1>
              <form onSubmit={handleDonateButton} className="fieldset">
                <label className="fieldset-label">Amount</label>
                <input
                  type="number"
                  name="donate"
                  className="input w-full"
                  placeholder="Enter the Amount"
                />
                {error && <p className="text-red-600">{error}</p>}
                <button className="btn btn-neutral mt-4">Donate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;

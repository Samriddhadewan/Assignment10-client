import { useLoaderData } from "react-router-dom";

const CampaignDetail = () => {
  const data = useLoaderData();
  console.log(data)
  const { campaignType, deadline, description, thumbnail, minimumAmount,title, userName } =
    data;
  return (
    <div className="min-h-[60vh] max-w-[1140px] mx-auto flex flex-col md:flex-row  gap-5  p-3">
        <div className=" rounded-lg flex-1">
            <img src={thumbnail} className="h-full object-cover" alt="" />
        </div>
        <div className="flex-1 flex p-4 items-center  rounded-lg">
            <div className="flex flex-col space-y-3">
                <h1 className="text-4xl font-semibold">{title}</h1>
                <p className="text-base font-normal text-gray-500"><b className="text-black">Title:</b> {description}</p>
                <p className="text-xl font-semibold">Campaign Type: <span className="text-gray-500"> {campaignType}</span></p>
                <p className="text-xl font-semibold">Minimum Amount: <span className="text-gray-500">{minimumAmount}$</span></p>
                <p className="text-xl font-semibold">Last Donating Date: <span className="text-gray-500">{deadline}</span></p>
                <p className=" font-semibold text-xl">Campaign Added By: <span className="text-gray-500">{userName}</span></p>
            </div>

        </div>
    </div>
  );
};

export default CampaignDetail;

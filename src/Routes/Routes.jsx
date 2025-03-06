import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateNewCampaign from "../Private/PrivateNewCampaign";
import NewCampaign from "../Components/NewCampaign";
import AllCampaigns from "../Components/AllCampaigns";
import CampaignDetail from "../Components/CampaignDetail";
import PrivateCampaignDetails from "../Private/PrivateCampaignDetails";
import PrivateMyCampaign from "../Private/PrivateMyCampaign";
import MyCampaign from "../Components/MyCampaign";
import UpdateCampaign from "../Components/UpdateCampaign";
import PrivateMyDonation from "../Private/PrivateMyDonation";
import MyDonation from "../Components/MyDonation";
import HomePage from "../Components/HomePage";
import ErrorPage from "../Components/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch("https://server-side-seven-psi.vercel.app/campaigns"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateNewCampaign>
            {" "}
            <NewCampaign></NewCampaign>{" "}
          </PrivateNewCampaign>
        ),
      },
      {
        path: "/campaigns/:id",
        element: (
          <PrivateCampaignDetails><CampaignDetail></CampaignDetail></PrivateCampaignDetails>),
        loader: ({params}) => fetch(`https://server-side-seven-psi.vercel.app/campaigns/${params.id}`)  
      },
      {
        path: "/myCampaign/:email",
        element: <PrivateMyCampaign>
          <MyCampaign></MyCampaign>
        </PrivateMyCampaign>,
        loader: ({params}) => fetch(`https://server-side-seven-psi.vercel.app/myCampaign/${params.email}`)
      },
      {
        path: "/updateCampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({params}) => fetch(`https://server-side-seven-psi.vercel.app/campaigns/${params.id}`)
      },
      {
        path:"/myDonation/:email",
        element: <PrivateMyDonation>
          <MyDonation></MyDonation>
        </PrivateMyDonation>,
        loader: ({params}) => fetch(`https://server-side-seven-psi.vercel.app/myDonation/${params.email}`)
      }
    ],
  },
]);

export default Router;

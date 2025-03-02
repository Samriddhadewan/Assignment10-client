import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateNewCampaign from "../Private/PrivateNewCampaign";
import NewCampaign from "../Components/NewCampaign";
import AllCampaigns from "../Components/AllCampaigns";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register ></Register>
            },
            {
                path:"/allCampaigns",
                element: <AllCampaigns></AllCampaigns>,
                loader: ()=> fetch("http://localhost:5000/campaigns")
            },
            {
                path:"/addCampaign",
                element: <PrivateNewCampaign> <NewCampaign></NewCampaign> </PrivateNewCampaign>
            },
        ]
    }
])

export default Router;
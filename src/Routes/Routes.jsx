import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateNewCampaign from "../Private/PrivateNewCampaign";
import NewCampaign from "../Components/NewCampaign";

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
                path:"/addCampaign",
                element: <PrivateNewCampaign> <NewCampaign></NewCampaign> </PrivateNewCampaign>
            },
        ]
    }
])

export default Router;
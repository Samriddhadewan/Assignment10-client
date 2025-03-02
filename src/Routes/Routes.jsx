import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
        ]
    }
])

export default Router;
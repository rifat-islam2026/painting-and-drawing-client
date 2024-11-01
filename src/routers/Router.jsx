import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import AddItems from "../pages/AddItems/AddItems";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },
            {
                path: "/addItems",
                element:<AddItems/>
            }
        ]
    },
]);

export default router;
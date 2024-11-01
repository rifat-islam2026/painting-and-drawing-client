import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import AddItems from "../pages/AddItems/AddItems";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyAllCraftItem from "../pages/MyAllCraftItem/MyAllCraftItem";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routers/PrivateRoute";

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
                element: <PrivateRoute><AddItems /></PrivateRoute>
            },
            {
                path: "/myAllCraftItems",
                element: <MyAllCraftItem />,
                loader: () => fetch(`http://localhost:5000/product`)
            }
        ]
    },
]);

export default router;
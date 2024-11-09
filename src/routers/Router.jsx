import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import AddItems from "../pages/AddItems/AddItems";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyAllCraftItem from "../pages/MyAllCraftItem/MyAllCraftItem";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import UpdateItem from "../pages/UpdateItem/UpdateItem";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "../routers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />, 
                 loader: () => fetch(`https://painting-and-drawing-server-phi.vercel.app/craftItems`)
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
                path: "/myCraftItems",
                element: <PrivateRoute><MyAllCraftItem /></PrivateRoute>,
            },
            {
                path: "/craftItems/:id",
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`https://painting-and-drawing-server-phi.vercel.app/craftItems/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: "/allArtAndCraftItems",
                element: <AllArtAndCraftItems />,
                loader: () => fetch(`https://painting-and-drawing-server-phi.vercel.app/craftItems`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateItem /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://painting-and-drawing-server-phi.vercel.app/update/${params.id}`)
            },
        ]
    },
]);

export default router;
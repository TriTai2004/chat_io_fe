import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login/index.jsx";
import HomePage from "../features/home/pages/HomePage";
import Register from "../features/auth/pages/Register/index.jsx";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>

    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/",
        element: <HomePage />
    }
]);

export default router;


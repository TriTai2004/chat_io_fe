import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login.jsx";
import HomePage from "../features/home/pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>

    },
    {
        path: "/",
        element: <HomePage />
    }
]);

export default router;


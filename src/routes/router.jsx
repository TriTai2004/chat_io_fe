import { createBrowserRouter } from "react-router-dom";import Login from "../features/auth/pages/Login.jsx";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>

    },
    {
        path: "/",
        element: "<h1>Login</h1>"
    }
]);

export default router;


import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../features/auth/pages/Login/index.jsx";
import HomePage from "../features/home/pages/HomePage";
import Register from "../features/auth/pages/Register/index.jsx";
import ChatPage from "../features/chat/pages/ChatPage/index.jsx";
import UserPage from "../features/user/pages/UserPage/index.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HomePage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/account" element={<UserPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;

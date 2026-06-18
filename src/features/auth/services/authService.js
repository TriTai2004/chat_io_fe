import axiosClient from './../../../services/api/axiosClient';

export const login = (credentials) =>
    axiosClient.post("/auth/login", credentials);

export const me = () =>
    axiosClient.get("/auth/me");

export const logout = () =>
    axiosClient.post("/auth/logout");

export const loginGG = () =>{
    window.window.location.href = import.meta.env.VITE_API_URL_BASE + "/oauth2/authorization/google";
}

export default {
    login,
    me,
    logout,
};

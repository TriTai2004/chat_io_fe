import axiosClient from './../../../services/api/axiosClient';

export const login = (credentials) =>
    axiosClient.post("/auth/login", credentials);

export const me = () =>
    axiosClient.get("/auth/me");

export const logout = () =>
    axiosClient.post("/auth/logout");

export default {
    login,
    me,
    logout,
};

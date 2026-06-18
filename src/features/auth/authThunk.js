import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./services/authService";

const getErrorMessage = (error, fallback) =>
    error?.response?.data?.message || error?.message || fallback;

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            await authService.login(credentials);

            const response = await authService.me();

            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error, "Login failed"));
        }
    }
);
export const loginGG = createAsyncThunk(
    "auth/loginGG",
    async (credentials, { rejectWithValue }) => {
        try {
            await authService.loginGG();

            const response = await authService.me();

            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error, "Login failed"));
        }
    }
);

export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authService.me();

            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error, "Failed to load current user"));
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
            return true;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error, "Logout failed"));
        }
    }
);

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { login, loginGG } from "../authThunk";
import { clearAuthError } from "../authSlice";
import {
    selectAuthError,
    selectAuthLoading
} from "../selectors";
import { useNavigate } from "react-router-dom";


const initialForm = {
    email: "",
    password: "",
    remember: true,
};


export const useLogin = () => {
    const dispatch = useDispatch();

    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const navigate = useNavigate();

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [submitState, setSubmitState] = useState("idle");


    const loginErrorMessage = authError &&
        /404|Not Found|invalid credentials/i.test(authError)
        ? "Invalid email or password."
        : "";


    const handleChange = (field) => (value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));

        setErrors(prev => ({
            ...prev,
            [field]: ""
        }));
    };


    const validate = () => {
        const nextErrors = {};

        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email.";
        }
        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            nextErrors.email = "Email format is invalid.";
        }

        if (!form.password) {
            nextErrors.password = "Please enter your password.";
        }
        else if (form.password.length < 6) {
            nextErrors.password =
                "Password must be at least 8 characters.";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) return;

        try {

            dispatch(clearAuthError());

            await dispatch(
                login({
                    email: form.email,
                    password: form.password,
                })
            ).unwrap();

            navigate("/chat");


        } catch {
            // redux tự giữ error
        }
    };

    const handleGoogleLogin = async () => {

        try {

            setSubmitState("google");

            dispatch(clearAuthError());


            await dispatch(
                loginGG()
            ).unwrap();


        } finally {

            setSubmitState("idle");

        }
    };

    const passwordIcon = useMemo(
        () => (
            <button
                type="button"
                onClick={() =>
                    setShowPassword(prev => !prev)
                }
                className="login-icon-button">
                {
                    showPassword
                        ? <FaEyeSlash />
                        : <FaEye />
                }
            </button>
        ),
        [showPassword]
    );



    return {
        form,
        errors,
        authLoading,
        loginErrorMessage,

        showPassword,
        setShowPassword,

        submitState,

        handleChange,
        handleSubmit,
        handleGoogleLogin,

        passwordIcon,
    };
};
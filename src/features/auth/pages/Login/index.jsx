import { useMemo, useState } from "react";
import Input from "../../../../shared/components/Input/input-base/input";
import { useDispatch, useSelector } from "react-redux";
import {
    FaArrowRight,
    FaCheckCircle,
    FaCommentDots,
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaLock,
    FaShieldAlt,
} from "react-icons/fa";
import { login, loginGG } from "../../authThunk";
import { clearAuthError } from "../../authSlice";
import { selectAuthError, selectAuthLoading } from "../../selectors";
import "./style.css";

const initialForm = {
    email: "",
    password: "",
    remember: true,
};

const Login = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitState, setSubmitState] = useState("idle");
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const loginErrorMessage = authError
        ? /401|unauthorized|invalid credentials/i.test(authError)
            ? "Invalid email or password."
            : authError
        : "";

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate("/", { replace: true });
    //     }
    // }, [isAuthenticated, navigate]);

    const passwordIcon = useMemo(
        () => (
            <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="login-icon-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        ),
        [showPassword]
    );

    const handleChange = (field) => (value) => {
        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: "" }));
    };

    const validate = () => {
        const nextErrors = {};

        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = "Email format is invalid.";
        }

        if (!form.password) {
            nextErrors.password = "Please enter your password.";
        } else if (form.password.length < 6) {
            nextErrors.password = "Password must be at least 8 characters.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            dispatch(clearAuthError());
            await dispatch(
                login({
                    email: form.email,
                    password: form.password,
                })
            ).unwrap();
        } catch {
            // Error state is already handled by Redux and displayed below.
        }
    };

    const handleGoogleLogin = async () => {
        setSubmitState("google");
        dispatch(clearAuthError());
            await dispatch(
                loginGG()
            ).unwrap();

    };

    return (
        <div className="login-page">
            <div className="login-orb login-orb--one" />
            <div className="login-orb login-orb--two" />

            <div className="login-grid">
                <section className="login-hero">
                    <div className="login-badge">
                        <FaShieldAlt />
                        <span>Secure access</span>
                    </div>

                    <h1 className="login-title">
                        Welcome back to
                        <span> Chatio</span>
                    </h1>

                    <p className="login-description">
                        Sign in to keep your conversations in one place, reconnect with your
                        team, and move faster across every chat thread.
                    </p>

                    <div className="login-feature-list">
                        <div className="login-feature-card">
                            <FaCommentDots />
                            <div>
                                <strong>Realtime chats</strong>
                                <p>Jump back into active conversations instantly.</p>
                            </div>
                        </div>

                        <div className="login-feature-card">
                            <FaCheckCircle />
                            <div>
                                <strong>Secure session</strong>
                                <p>Protected sign-in flow with cookie-based auth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="login-card">
                    <div className="login-card-header">
                        <p className="login-eyebrow">Sign in</p>
                        <h2>Access your workspace</h2>
                        <span>Enter your credentials to continue.</span>
                    </div>

                    <div className="login-social">
                        <button type="button" className="login-google" onClick={handleGoogleLogin}>
                            <FaGoogle />
                            <span>
                                {submitState === "google"
                                    ? "Connecting..."
                                    : "Continue with Google"}
                            </span>
                        </button>

                        <div className="login-divider">
                            <span>or use email</span>
                        </div>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        {loginErrorMessage ? (
                            <div className="login-server-error" role="alert">
                                {loginErrorMessage}
                            </div>
                        ) : null}

                        <Input
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            value={form.email}
                            onValueChange={handleChange("email")}
                            error={errors.email}
                            leftIcon={<FaEnvelope />}
                            variant="glass"
                            size="md"
                            autoComplete="email"
                            className="login-input"
                            labelClassName="login-label"
                            helperClassName="login-feedback"
                        />

                        <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            placeholder="Enter your password"
                            value={form.password}
                            onValueChange={handleChange("password")}
                            error={errors.password}
                            leftIcon={<FaLock />}
                            rightIcon={passwordIcon}
                            variant="glass"
                            size="md"
                            autoComplete="current-password"
                            className="login-input"
                            labelClassName="login-label"
                            helperClassName="login-feedback"
                        />

                        <div className="login-meta">
                            <label className="login-remember">
                                <input
                                    type="checkbox"
                                    checked={form.remember}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            remember: event.target.checked,
                                        }))
                                    }
                                />
                                <span>Remember me</span>
                            </label>

                            <button type="button" className="login-link">
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="login-submit"
                            disabled={authLoading}
                        >
                            <span>
                                {authLoading ? "Signing in..." : "Sign in"}
                            </span>
                            <FaArrowRight />
                        </button>

                        <p className="login-footer">
                            Don&apos;t have an account? <button type="button">Create one</button>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Login;

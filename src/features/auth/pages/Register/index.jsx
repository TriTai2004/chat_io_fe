import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock, FaShieldAlt, FaUser } from "react-icons/fa";
import Input from "../../../../shared/components/Input/input-base/input";
import Button from "../../../../shared/components/Button/button-base";
import "./style.css";

const initialForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitState, setSubmitState] = useState("idle");

    const passwordIcon = useMemo(
        () => (
            <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="register-icon-button"
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        ),
        [showPassword]
    );

    const confirmPasswordIcon = useMemo(
        () => (
            <button
                type="button"
                onClick={() => setShowConfirmPassword((current) => !current)}
                className="register-icon-button"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        ),
        [showConfirmPassword]
    );

    const handleChange = (field) => (value) => {
        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: "" }));
    };

    const validate = () => {
        const nextErrors = {};

        if (!form.fullName.trim()) {
            nextErrors.fullName = "Please enter your full name.";
        } else if (form.fullName.trim().length < 2) {
            nextErrors.fullName = "Full name must be at least 2 characters.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = "Email format is invalid.";
        }

        if (!form.password) {
            nextErrors.password = "Please enter your password.";
        } else if (form.password.length < 8) {
            nextErrors.password = "Password must be at least 8 characters.";
        }

        if (!form.confirmPassword) {
            nextErrors.confirmPassword = "Please confirm your password.";
        } else if (form.confirmPassword !== form.password) {
            nextErrors.confirmPassword = "Passwords do not match.";
        }

        if (!form.acceptTerms) {
            nextErrors.acceptTerms = "You must accept the terms to continue.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        setSubmitState("submitting");

        window.setTimeout(() => {
            setSubmitState("success");
        }, 700);
    };

    const handleGoogleSignUp = () => {
        setSubmitState("google");
    };

    return (
        <div className="register-page">
            <div className="register-orb register-orb--one" />
            <div className="register-orb register-orb--two" />

            <div className="register-grid">
                <section className="register-hero">
                    <div className="register-badge">
                        <FaShieldAlt />
                        <span>Join Chatio</span>
                    </div>

                    <h1 className="register-title">
                        Create your
                        <span> premium workspace</span>
                    </h1>

                    <p className="register-description">
                        Start your journey with a modern chat platform built for realtime
                        communication, communities, and collaboration.
                    </p>

                    <div className="register-feature-list">
                        <div className="register-feature-card">
                            <FaCheckCircle />
                            <div>
                                <strong>Fast onboarding</strong>
                                <p>Set up your account in under a minute.</p>
                            </div>
                        </div>

                        <div className="register-feature-card">
                            <FaCheckCircle />
                            <div>
                                <strong>Secure profile</strong>
                                <p>Protected signup flow with session-based auth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="register-card">
                    <div className="register-card-header">
                        <p className="register-eyebrow">Sign up</p>
                        <h2>Create your account</h2>
                        <span>Fill in your details to get started.</span>
                    </div>

                    <div className="register-social">
                        <button type="button" className="register-google" onClick={handleGoogleSignUp}>
                            <FaGoogle />
                            <span>
                                {submitState === "google"
                                    ? "Connecting..."
                                    : "Continue with Google"}
                            </span>
                        </button>

                        <div className="register-divider">
                            <span>or use email</span>
                        </div>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <Input
                            name="fullName"
                            label="Full name"
                            placeholder="Your full name"
                            value={form.fullName}
                            onValueChange={handleChange("fullName")}
                            error={errors.fullName}
                            leftIcon={<FaUser />}
                            variant="glass"
                            size="md"
                            autoComplete="name"
                            className="register-input"
                            labelClassName="register-label"
                            helperClassName="register-feedback"
                        />

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
                            className="register-input"
                            labelClassName="register-label"
                            helperClassName="register-feedback"
                        />

                        <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            placeholder="Create a password"
                            value={form.password}
                            onValueChange={handleChange("password")}
                            error={errors.password}
                            leftIcon={<FaLock />}
                            rightIcon={passwordIcon}
                            variant="glass"
                            size="md"
                            autoComplete="new-password"
                            className="register-input"
                            labelClassName="register-label"
                            helperClassName="register-feedback"
                        />

                        <Input
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            label="Confirm password"
                            placeholder="Re-enter your password"
                            value={form.confirmPassword}
                            onValueChange={handleChange("confirmPassword")}
                            error={errors.confirmPassword}
                            leftIcon={<FaLock />}
                            rightIcon={confirmPasswordIcon}
                            variant="glass"
                            size="md"
                            autoComplete="new-password"
                            className="register-input"
                            labelClassName="register-label"
                            helperClassName="register-feedback"
                        />

                        <label className="register-terms">
                            <input
                                type="checkbox"
                                checked={form.acceptTerms}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        acceptTerms: event.target.checked,
                                    }))
                                }
                            />
                            <span>
                                I agree to the{" "}
                                <a href="/" className="register-link-inline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="/" className="register-link-inline">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
                        {errors.acceptTerms ? (
                            <p className="register-terms-error">{errors.acceptTerms}</p>
                        ) : null}

                        <Button type="submit" variant="primary" size="lg" fullWidth loading={submitState === "submitting"}>
                            <span>
                                {submitState === "success"
                                    ? "Account created"
                                    : submitState === "submitting"
                                    ? "Creating account..."
                                    : "Create account"}
                            </span>
                            <FaArrowRight />
                        </Button>

                        <p className="register-footer">
                            Already have an account?{" "}
                            <Link to="/login" className="register-footer-link">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Register;

import { forwardRef, useEffect, useId, useState } from "react";
import "./style.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const Input = forwardRef(function Input(
    {
        id,
        name,
        type = "text",
        label,
        helperText,
        successText,
        error,
        required = false,
        disabled = false,
        placeholder,
        variant = "default",
        size = "md",
        tone = "default",
        fullWidth = true,
        leftIcon,
        rightIcon,
        clearable = false,
        className,
        containerClassName,
        labelClassName,
        helperClassName,
        inputClassName,
        value,
        defaultValue = "",
        onChange,
        onValueChange,
        onBlur,
        onFocus,
        validate,
        showValidationOnChange = false,
        autoComplete,
        ...rest
    },
    ref
) {
    const autoId = useId();
    const inputId = id || autoId;

    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = useState(defaultValue);
    const [localError, setLocalError] = useState("");
    const [touched, setTouched] = useState(false);
    const [focused, setFocused] = useState(false);

    const currentValue = isControlled ? value : innerValue;
    const resolvedError = error || localError;
    const showError = Boolean(resolvedError);
    const showSuccess = Boolean(successText) && !showError && Boolean(currentValue);

    useEffect(() => {
        if (!showValidationOnChange || !validate) {
            return;
        }

        const result = validate(currentValue);
        setLocalError(typeof result === "string" ? result : "");
    }, [currentValue, validate, showValidationOnChange]);

    const handleChange = (event) => {
        const nextValue = event.target.value;

        if (!isControlled) {
            setInnerValue(nextValue);
        }

        if (showValidationOnChange && validate) {
            const result = validate(nextValue);
            setLocalError(typeof result === "string" ? result : "");
        }

        onChange?.(event);
        onValueChange?.(nextValue, event);
    };

    const handleBlur = (event) => {
        setTouched(true);

        if (validate) {
            const result = validate(currentValue);
            setLocalError(typeof result === "string" ? result : "");
        }

        setFocused(false);
        onBlur?.(event);
    };

    const handleFocus = (event) => {
        setFocused(true);
        onFocus?.(event);
    };

    const handleClear = () => {
        const nextValue = "";
        const fakeEvent = {
            target: { value: nextValue, name },
            currentTarget: { value: nextValue, name },
        };

        if (!isControlled) {
            setInnerValue(nextValue);
        }

        setLocalError("");
        onChange?.(fakeEvent);
        onValueChange?.(nextValue, fakeEvent);
    };

    const shouldShowFeedback = showError || showSuccess || touched || focused || Boolean(currentValue);

    return (
        <div className={cx(fullWidth && "w-full", "input-field", containerClassName)}>
            {label ? (
                <label
                    htmlFor={inputId}
                    className={cx(
                        "input-label",
                        showError && "input-label--error",
                        showSuccess && "input-label--success",
                        labelClassName
                    )}
                >
                    <span>{label}</span>
                    {required ? <span className="ml-1 text-rose-500">*</span> : null}
                </label>
            ) : null}

            <div className="input-shell">
                {leftIcon ? <div className="input-icon-left">{leftIcon}</div> : null}

                <input
                    ref={ref}
                    id={inputId}
                    name={name}
                    type={type}
                    value={currentValue}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={showError}
                    aria-describedby={
                        helperText || showError || successText
                            ? `${inputId}-feedback`
                            : undefined
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={cx(
                        "input-base",
                        `input-variant--${variant}`,
                        `input-size--${size}`,
                        `input-tone--${showError ? "error" : showSuccess ? "success" : tone}`,
                        leftIcon && "input-base--with-left-icon",
                        (rightIcon || clearable) && "input-base--with-right-icon",
                        className,
                        inputClassName
                    )}
                    {...rest}
                />

                <div className="input-icon-right">
                    {clearable && currentValue ? (
                        <button
                            type="button"
                            aria-label="Clear input"
                            onClick={handleClear}
                            className="input-clear-btn pointer-events-auto"
                        >
                            ×
                        </button>
                    ) : null}
                    {rightIcon ? (
                        <span className="pointer-events-auto inline-flex items-center">
                            {rightIcon}
                        </span>
                    ) : null}
                </div>
            </div>

            {(helperText || showError || successText) && shouldShowFeedback ? (
                <p
                    id={`${inputId}-feedback`}
                    className={cx(
                        "input-feedback",
                        showError
                            ? "input-feedback--error"
                            : showSuccess
                            ? "input-feedback--success"
                            : "",
                        helperClassName
                    )}
                >
                    {showError ? resolvedError : showSuccess ? successText : helperText}
                </p>
            ) : null}
        </div>
    );
});

export default Input;

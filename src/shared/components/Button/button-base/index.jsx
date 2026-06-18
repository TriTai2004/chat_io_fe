import { forwardRef } from "react";
import "./style.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const Button = forwardRef(function Button(
    {
        as: Component = "button",
        variant = "primary",
        tone = "default",
        size = "md",
        shape = "rounded",
        fullWidth = false,
        loading = false,
        disabled = false,
        leftIcon,
        rightIcon,
        iconOnly = false,
        children,
        className,
        type = "button",
        ...rest
    },
    ref
) {
    const isDisabled = disabled || loading;

    return (
        <Component
            ref={ref}
            type={Component === "button" ? type : undefined}
            disabled={Component === "button" ? isDisabled : undefined}
            aria-disabled={isDisabled}
            data-variant={variant}
            data-tone={tone}
            data-size={size}
            data-shape={shape}
            data-loading={loading ? "true" : "false"}
            className={cx(
                "btn-base",
                fullWidth && "btn-base--full",
                iconOnly && "btn-base--icon-only",
                className
            )}
            {...rest}
        >
            <span className={cx("btn-content", loading && "btn-content--loading")}>
                {leftIcon ? <span className="btn-icon btn-icon--left">{leftIcon}</span> : null}
                {children ? <span className="btn-label">{children}</span> : null}
                {rightIcon ? <span className="btn-icon btn-icon--right">{rightIcon}</span> : null}
            </span>

            {loading ? <span className="btn-spinner" aria-hidden="true" /> : null}
        </Component>
    );
});

export default Button;

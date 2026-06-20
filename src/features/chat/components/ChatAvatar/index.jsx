import { useState } from "react";
import "./style.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const ChatAvatar = ({
    src,
    alt,
    children,
    label,
    accent,
    online = false,
    size = "md",
    className,
}) => {
    const [imageFailed, setImageFailed] = useState(false);
    const showImage = src && !imageFailed;

    return (
        <div
            className={cx("chat-avatar-base", `chat-avatar-base--${size}`, className)}
            style={!showImage && accent ? { background: accent } : undefined}
            aria-hidden="true"
        >
            {showImage ? (
                <img
                    src={src}
                    alt={alt || label || "Avatar"}
                    className="chat-avatar-base__image"
                    onError={() => setImageFailed(true)}
                />
            ) : (
                <span className="chat-avatar-base__label">{children || label}</span>
            )}
            {online ? <span className="chat-avatar-base__status" /> : null}
        </div>
    );
};

export default ChatAvatar;

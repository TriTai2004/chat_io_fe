import "./style.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const ChatAvatar = ({
    children,
    label,
    accent,
    online = false,
    size = "md",
    className,
}) => {
    return (
        <div
            className={cx("chat-avatar-base", `chat-avatar-base--${size}`, className)}
            style={accent ? { background: accent } : undefined}
            aria-hidden="true"
        >
            <span className="chat-avatar-base__label">{children || label}</span>
            {online ? <span className="chat-avatar-base__status" /> : null}
        </div>
    );
};

export default ChatAvatar;

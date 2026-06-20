import "./style.css";

const ChatScrollArea = ({ as: Component = "div", className, children, ...rest }) => {
    return (
        <Component className={["chat-scroll-area-base", className].filter(Boolean).join(" ")} {...rest}>
            {children}
        </Component>
    );
};

export default ChatScrollArea;

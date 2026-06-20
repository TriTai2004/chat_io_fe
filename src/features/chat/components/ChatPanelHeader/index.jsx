import "./style.css";

const ChatPanelHeader = ({ kicker, title, actionLabel, onAction, className }) => {
    return (
        <div className={["chat-panel-header-base", className].filter(Boolean).join(" ")}>
            <div>
                <p className="chat-panel-header-base__kicker">{kicker}</p>
                <h2 className="chat-panel-header-base__title">{title}</h2>
            </div>

            {actionLabel ? (
                <button type="button" className="chat-panel-header-base__action" onClick={onAction}>
                    {actionLabel}
                </button>
            ) : null}
        </div>
    );
};

export default ChatPanelHeader;

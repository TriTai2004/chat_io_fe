import ChatAvatar from "../ChatAvatar";
import "./style.css";

const ChatConversationItem = (props) => {
    const {
        name,
        label,
        lastMessage,
        time,
        unread = 0,
        active = false,
        online = false,
        avatar,
        accent,
        onClick
    } = props;

    return (
        <article onClick={onClick} className={`chat-conversation-item-base ${active ? "is-active" : ""}`}>
            <ChatAvatar size="sm" accent={accent} online={online} label={avatar} />

            <div className="chat-conversation-item-base__content">
                <div className="chat-conversation-item-base__row">
                    <strong>{name}</strong>
                    <span>{time}</span>
                </div>
                <p>{lastMessage}</p>
                <div className="chat-conversation-item-base__meta">
                    <span>{label}</span>
                    {unread ? <span className="chat-conversation-item-base__unread">{unread}</span> : null}
                </div>
            </div>
        </article>
    );
};

export default ChatConversationItem;

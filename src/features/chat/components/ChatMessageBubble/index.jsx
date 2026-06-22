import { memo } from "react";
import ChatAvatar from "../ChatAvatar";
import "./style.css";

const ChatMessageBubble = memo(({ author, time, text, mine = false }) => {
    return (
        <article className={`chat-message-bubble-base ${mine ? "is-mine" : ""}`}>
            {!mine ? (
                <ChatAvatar
                    size="sm"
                    label={author.slice(0, 1)}
                    accent="linear-gradient(135deg, #38bdf8, #2563eb)"
                    className="chat-message-bubble-base__avatar"
                />
            ) : null}

            <div className="chat-message-bubble-base__body">
                <div className="chat-message-bubble-base__meta">
                    <strong>{author}</strong>
                    <time>{time}</time>
                </div>
                <p>{text}</p>
            </div>
        </article>
    );
});

export default ChatMessageBubble;
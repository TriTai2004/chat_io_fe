import { useCallback, useRef, useState } from "react";
import { getChatMessagesByConversation } from "../services/messageService";
import socketService from "../../../services/websocket/socket"

const PAGE_SIZE = 10;

export const useChatMessages = (currentUserId) => {
    const [messages, setMessages] = useState([]);
    const [conversationId, setConversationId] = useState(null);
    const [message, setMessage] = useState("");

    const pageRef = useRef(0);
    const conversationIdRef = useRef(null);

    const fetchMessages = useCallback(async (convId, page) => {
        try {
            const res = await getChatMessagesByConversation(convId, {
                page,
                size: PAGE_SIZE,
            });
            const olderMessages = res.data.data.reverse();

            setMessages((prev) => {
                const ids = new Set(prev.map((m) => m.id));
                const unique = olderMessages.filter((m) => !ids.has(m.id));
                return [...unique, ...prev];
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const openConversation = useCallback(
        async (convId) => {
            conversationIdRef.current = convId;
            pageRef.current = 0;

            setConversationId(convId);
            setMessages([]); 

            await fetchMessages(convId, 0);
        },
        [fetchMessages]
    );

    const loadOlderMessages = useCallback(() => {
        if (!conversationIdRef.current) return;

        pageRef.current += 1;
        fetchMessages(conversationIdRef.current, pageRef.current);
    }, [fetchMessages]);

    const appendIncomingMessage = useCallback(
        (data) => {
            if (data.conversationId !== conversationIdRef.current) return;
            setMessages((prev) => [...prev, data]);
        },
        []
    );

    const sendMessage = useCallback(
        (e) => {
            e.preventDefault();
            if (!message.trim() || !conversationId) return;

            socketService.send({
                conversationId,
                senderId: currentUserId,
                content: message,
                imageUrl: "",
                type: "TEXT",
            });

            setMessage("");
        },
        [message, conversationId, currentUserId]
    );

    return {
        messages,
        conversationId,
        message,
        setMessage,
        openConversation,
        loadOlderMessages,
        appendIncomingMessage,
        sendMessage,
    };
}

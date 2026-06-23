import { useEffect, useState, useCallback } from "react";
import { getChatList } from "../services/conversation-memberService";

export const useConversationList = () => {
    const [chatList, setChatList] = useState(new Map());

    useEffect(() => {
        const loadConversation = async () => {
            try {
                const res = await getChatList();
                setChatList(
                    new Map(
                        res.data?.data.map((item) => [item.conversationId, item])
                    )
                );
            } catch (error) {
                console.error(error);
            }
        };

        loadConversation();
    }, []);

    const upsertLatestMessage = useCallback((data) => {
        setChatList((prev) => {
            const map = new Map(prev);
            const old = map.get(data.conversationId);

            map.delete(data.conversationId);
            map.set(data.conversationId, {
                ...(old ?? { conversationId: data.conversationId }),
                latestMessage: data.content,
                latestMessageTime: data.createdAt,
            });

            return map;
        });
    }, []);

    return { chatList, upsertLatestMessage };
}
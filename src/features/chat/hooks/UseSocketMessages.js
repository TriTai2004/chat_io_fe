import { useEffect } from "react";

export const useSocketMessages = (onMessage) => {
    useEffect(() => {
        const handleMessage = (event) => onMessage(event.detail);

        window.addEventListener("socket-message", handleMessage);
        return () => window.removeEventListener("socket-message", handleMessage);
    }, [onMessage]);
}
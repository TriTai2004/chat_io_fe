import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

class SocketService {
    client = null;
    connected = false;

    connect() {
        if (this.client?.active) return;

        this.client = new Client({
            webSocketFactory: () =>
                new SockJS(import.meta.env.VITE_API_URL_BASE + "/ws"),

            reconnectDelay: 5000,

            onConnect: () => {
                this.connected = true;
                console.log("WebSocket Connected");

                // subscribe cá nhân
                this.client.subscribe(
                    
                    `/user/queue/messages`,
                    (message) => {
                        const data = JSON.parse(message.body);

                        window.dispatchEvent(
                            new CustomEvent("socket-message", {
                                detail: data,
                            })
                        );
                    }
                );
            },

            onDisconnect: () => {
                this.connected = false;
            },

            onStompError: (frame) => {
                console.error(frame);
            },
        });

        this.client.activate();
    }

    send(destination, payload) {
        if (!this.connected) return;

        this.client.publish({
            destination,
            body: JSON.stringify(payload),
        });
    }

    subscribe(destination, callback) {
        if (!this.connected) return;

        return this.client.subscribe(destination, (message) => {
            callback(JSON.parse(message.body));
        });
    }

    disconnect() {
        this.client?.deactivate();
    }
}

export default new SocketService();